package cn.sunday.imoochybridandroidnative;

import android.Manifest;
import android.app.Activity;
import android.content.pm.PackageManager;
import android.os.Build;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.KeyEvent;
import android.view.View;
import android.widget.ImageView;
import android.widget.Toast;

import com.tencent.smtt.sdk.ValueCallback;
import com.tencent.smtt.sdk.WebView;

import cn.sunday.imoochybridandroidnative.AliPay.AliPayHelper;
import cn.sunday.imoochybridandroidnative.constants.UrlConstants;
import cn.sunday.imoochybridandroidnative.helpers.SpHelper;
import cn.sunday.imoochybridandroidnative.wxapi.helpers.WXPayHelper;
import cn.sunday.imoochybridandroidnative.utils.FullScreenUtils;
import cn.sunday.imoochybridandroidnative.views.X5WebView;


public class MainActivity extends Activity {

    /**
     * 获取权限使用的 RequestCode
     */
    private static final int PERMISSIONS_REQUEST_CODE = 1002;
    /**
     * 加载网页的 webview
     */
    private X5WebView mWebView;
    /**
     * 网页未加载出来之前，展示的图片控件
     */
    private ImageView mIv;
    /**
     * SharedPreferences 帮助类。用来保存、验证、用户的登录信息
     */
    private SpHelper mSpHelper;

    /**
     * 记录用户点击后退按钮的时间差
     */
    private long endTime;

    /**
     * 回调方法：
     * 相当于 vue 组件中的  created 。
     */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        init();
    }

    /**
     * 初始化方法
     */
    private void init() {
//        获取必要权限
        requestPermission();

//        设置沉浸式展示
        FullScreenUtils.setFullscreen(this, getResources().getColor(R.color.stateBarColor));

//        初始化数据存储帮助类
        mSpHelper = new SpHelper(this);

//        初始化视图
        initView();

    }

    /**
     * 初始化视图
     */
    private void initView () {
        mIv = findViewById(R.id.iv);

        mWebView = findViewById(R.id.web_view);
        mWebView.loadUrl(UrlConstants.BASE_WEB_URL);
        mWebView.setOnWebViewListener(new X5WebView.OnWebViewListener() {
            @Override
            public void onProgressChanged(WebView webView, int progress) {
                if (progress == 100) {
                    mIv.setVisibility(View.GONE);
                    isAutoUser();
                }
            }
        });

    }

    /**
     * 判断自动登录。
     * 在 Native 端判断自动登录，
     *  如果 Native 中保存着登录用户的信息，则表示当前用户已经登陆过，
     * 此时传递登录用户名到 web 端。
     *  如果 Native 中未保存登录用户信息，则表示当前没有用户登录过，
     * 此时直接 return 掉该方法，不做任何操作。
     */
    private void isAutoUser () {
        String username = mSpHelper.getAutoUser();
        if (TextUtils.isEmpty(username)) {
            return;
        }

        // 原生调用 JS 方法， 调用的是绑定到window上面的方法
        // 保存当前登录的用户名到 web
        mWebView.evaluateJavascript("javascript:nativeFunctionUserLogin('" + username + "')", new ValueCallback<String>() {
            @Override
            public void onReceiveValue(String s) {

            }
        });
    }

    /**
     * 检查支付宝 SDK 所需的权限，并在必要的时候动态获取。
     * 在 targetSDK = 23 以上，READ_PHONE_STATE 和 WRITE_EXTERNAL_STORAGE 权限需要应用在运行时获取。
     * 如果接入支付宝 SDK 的应用 targetSdk 在 23 以下，可以省略这个步骤。
     */
    private void requestPermission() {
        if (android.os.Build.VERSION.SDK_INT < Build.VERSION_CODES.M) return;
        // Here, thisActivity is the current activity
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.READ_PHONE_STATE)
                != PackageManager.PERMISSION_GRANTED
                || ContextCompat.checkSelfPermission(this, Manifest.permission.WRITE_EXTERNAL_STORAGE)
                != PackageManager.PERMISSION_GRANTED) {

            ActivityCompat.requestPermissions(this,
                    new String[]{
                            Manifest.permission.READ_PHONE_STATE,
                            Manifest.permission.WRITE_EXTERNAL_STORAGE
                    }, PERMISSIONS_REQUEST_CODE);

        } else {
//            支付宝 SDK 已有所需的权限
//            Toast.makeText(this, "支付宝 SDK 已有所需的权限", Toast.LENGTH_SHORT).show();
        }
    }

    /**
     * 权限获取回调
     */
    @Override
    public void onRequestPermissionsResult(int requestCode, String permissions[], int[] grantResults) {
        switch (requestCode) {
            case PERMISSIONS_REQUEST_CODE: {

                // 用户取消了权限弹窗
                if (grantResults.length == 0) {
                    Toast.makeText(this, "无法获取支付宝 SDK 所需的权限, 请到系统设置开启", Toast.LENGTH_SHORT).show();;
                    return;
                }

                // 用户拒绝了某些权限
                for (int x : grantResults) {
                    if (x == PackageManager.PERMISSION_DENIED) {
                        Toast.makeText(this, "无法获取支付宝 SDK 所需的权限, 请到系统设置开启", Toast.LENGTH_SHORT).show();;
                        return;
                    }
                }

                // 所需的权限均正常获取
                Toast.makeText(this, "支付宝 SDK 所需的权限已经正常获取", Toast.LENGTH_SHORT).show();;
            }
        }
    }

    /**
     * 监听 android 后退按钮点击事件。
     * 1、首先判断当前网页是否还可以进行后退页面的操作，如果可以的话那么就后退网页。
     * 2、如果网页已经不可以进行后退操作了（即：网页在首页中，虚拟任务栈中，只包含了 imooc 。）
     * 在这种情况下，则会提示 "再按一次退出程序" ， 用户 两秒内再次点击后退按钮，则退出应用
     */
    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
//        监听 android 后退按钮点击事件。
        if (keyCode == KeyEvent.KEYCODE_BACK) {
//            1、首先判断当前网页是否还可以进行后退页面的操作，如果可以的话那么就后退网页。
            if (mWebView.canGoBack() &&
                    !UrlConstants.BASE_WEB_URL.equals(mWebView.getUrl())) {
                mWebView.goBack();
                return true;
            }
//            2、如果网页已经不可以进行后退操作了（即：网页在首页中，虚拟任务栈中，只包含了 imooc 。）
//          在这种情况下，则会提示 "再按一次退出程序" ， 用户 两秒内再次点击后退按钮，则退出应用
            if (System.currentTimeMillis() - endTime > 2000) {
                Toast.makeText(this, "再按一次退出程序", Toast.LENGTH_SHORT).show();
                endTime = System.currentTimeMillis();
            } else {
                finish();
            }
        }
        return true;
    }

}
