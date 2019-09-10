package cn.sunday.imoochybridandroidnative.jsInterface;


import android.content.Context;
import android.text.TextUtils;
import android.webkit.JavascriptInterface;

import org.json.JSONException;
import org.json.JSONObject;

import cn.sunday.imoochybridandroidnative.AliPay.AliPayHelper;
import cn.sunday.imoochybridandroidnative.helpers.SpHelper;
import cn.sunday.imoochybridandroidnative.wxapi.helpers.WXPayHelper;

public class MyJaveScriptInterface {

    private Context mContext;
//    数据存储帮助类
    private SpHelper mSpHelper;
//    微信支付帮助类
    private WXPayHelper mWxPayHelper;
//    阿里支付帮助类
    private AliPayHelper aliPayHelper;

    public MyJaveScriptInterface (Context context) {
        this.mContext = context;
//        初始化数据存储帮助类
        this.mSpHelper = new SpHelper(mContext);
//        初始化微信帮助类
        mWxPayHelper = new WXPayHelper(mContext);
//        初始化微信支付服务
        mWxPayHelper.initWXPay();
//        阿里支付帮助类
        aliPayHelper = new AliPayHelper(mContext);
    }

    /**
     * 注册：
     * 保存用户在前端输入的用户名和密码到Native端，
     * 这里使用 SharedPreferences 进行保存
     * @return boolean： true 表示注册成功，false 表示注册失败
     */
    @JavascriptInterface
    public boolean register (String userJson) {
        boolean result = false;
        try {
            JSONObject jsonObject = new JSONObject(userJson);
            result = mSpHelper.setUser(jsonObject);
        } catch (JSONException e) {
            e.printStackTrace();
        }

        return result;
    }

    /**
     * 登录:
     * 验证用户在前端输入的用户名和密码是否与Native端保存的一致
     * @return -1:内部错误 0: 登录成功  1：用户不存在 2：密码错误
     */
    @JavascriptInterface
    public String login (String userJson) {
        String result = "-1";
        try {
            JSONObject user = new JSONObject(userJson);
            String password = mSpHelper.getUser(user.getString(SpHelper.KEY_USER_NAME));
//        如果password返回为空，则表示没有该用户
            if (TextUtils.isEmpty(password)) {
                result = "1";
            } else {
                if (!password.equals(user.getString(SpHelper.KEY_PASSWORD))) {
                    result = "2";
                } else {
                    result = "0";
                    mSpHelper.setAutoUser(user.getString(SpHelper.KEY_USER_NAME));
                }
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return result;
    }


    /**
     *  退出登录：
     *  退出当前自动登录的用户
     * @return boolean： true 表示当前用户已退出登录（即下次不会再进行自动登录），false 表示用户退出登录失败（即下次依然会进行自动登录）
     */
    @JavascriptInterface
    public boolean logout () {
        return mSpHelper.clearAutoUser();
    }

    /**
     * 微信支付
     * @param payJson 支付商品信息
     */
    @JavascriptInterface
    public void wxPay (String payJson) {
        mWxPayHelper.pay(payJson);
    }

    /**
     * 支付宝支付
     * @param payJson 支付商品信息
     */
    @JavascriptInterface
    public void aliPay (String payJson) {
        aliPayHelper.pay(payJson);
    }
}
