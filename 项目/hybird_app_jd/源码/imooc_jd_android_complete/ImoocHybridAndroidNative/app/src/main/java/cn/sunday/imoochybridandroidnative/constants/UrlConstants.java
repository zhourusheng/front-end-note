package cn.sunday.imoochybridandroidnative.constants;

public class UrlConstants {

    /**
     * 访问 URL 地址。
     * 如果在 Android 9.0 以上设备中运行，还需修改
     * imooc_jd_android_complete/ImoocHybridAndroidNative/app/src/main/res/xml/network_security_config.xml 文件
     * domain 标签中的内容为访问地址（不包含 http:// 和 端口号）
     * <domain includeSubdomains="true">imooc.hybrid.lgdsunday.club</domain>
     * 注意：domain 中必须保存 lgdsunday.club 以应对接口中图片资源的访问
     */
    public static final String BASE_WEB_URL = "http://imooc.hybrid.lgdsunday.club/";

}
