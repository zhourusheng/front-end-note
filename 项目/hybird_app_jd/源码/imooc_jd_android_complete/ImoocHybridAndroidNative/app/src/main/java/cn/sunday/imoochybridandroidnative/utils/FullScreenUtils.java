package cn.sunday.imoochybridandroidnative.utils;

import android.app.Activity;
import android.os.Build;
import android.view.View;
import android.view.WindowManager;

public class FullScreenUtils {

    public static void setFullscreen(Activity context, int stateBarColor) {
        //设置状态栏文字颜色及图标为深色以及隐藏 NavigationBar
        context.getWindow().getDecorView().setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                        | View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR
//                去掉 NavgationBar 的方法
//                        | View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR
//                        | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
//                        | View.SYSTEM_UI_FLAG_FULLSCREEN
        );

        //专门设置一下状态栏导航栏背景颜色为透明，凸显效果。
        setNavigationStateBarColor(context , stateBarColor);
    }

    private static void setNavigationStateBarColor(Activity context, int color) {
        //VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP
        if (Build.VERSION.SDK_INT >= 21) {
            context.getWindow().addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
            context.getWindow().setNavigationBarColor(color);
            context.getWindow().setStatusBarColor(color);
        }
    }

}
