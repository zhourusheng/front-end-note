package cn.sunday.imoochybridandroidnative.helpers;

import android.content.Context;
import android.content.SharedPreferences;

import org.json.JSONException;
import org.json.JSONObject;

public class SpHelper {

    public static final String KEY_USER_NAME = "username";
    public static final String KEY_PASSWORD = "password";
    private static final String KEY_AUTO_LOGIN = "autoLogin";

    private Context mContext;
    private SharedPreferences mSp;

    public SpHelper(Context context) {
        this.mContext = context;
        mSp = mContext.getSharedPreferences("user", Context.MODE_PRIVATE);
    }

    /**
     * 保存用户
     * @param user
     * @return
     */
    public boolean setUser (JSONObject user) {
        SharedPreferences.Editor editor = mSp.edit();
        try {
            editor.putString(user.getString(KEY_USER_NAME), user.getString(KEY_PASSWORD));
        } catch (JSONException e) {
            return false;
        }
        return editor.commit();
    }

    /**
     * 提取用户
     */
    public String getUser (String username) {
        return mSp.getString(username, "");
    }

    /**
     * 记录登录用户
     */
    public void setAutoUser (String username) {
        SharedPreferences.Editor editor = mSp.edit();
        editor.putString(KEY_AUTO_LOGIN, username);
        editor.commit();
    }

    /**
     * 是否存在已登录用户
     */
    public String getAutoUser () {
        return mSp.getString(KEY_AUTO_LOGIN, "");
    }

    /**
     * 清除已登录用户
     */
    public boolean clearAutoUser () {
        SharedPreferences.Editor editor = mSp.edit();
        editor.remove(KEY_AUTO_LOGIN);
        return editor.commit();
    }
}
