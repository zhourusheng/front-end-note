更多资源联系qq810642693


## 混合开发京东商城系统 Android 端完整版代码

#### 运行项目
 1. 使用 `AndroidStudio` 运行 `ImoocHybridAndroidNative` 项目
 2. 首次运行会自动下载项目配置和依赖
 3. 依赖下载完成之后，可直接点击 `run app` 运行项目
 4. 默认情况下，项目运行会访问线上项目地址，即：`http://imooc.hybrid.lgdsunday.club/`

#### 访问局域网内项目
 1. 如需访问本地运行的局域网内项目，需修改 `imooc_jd_android_complete/ImoocHybridAndroidNative/app/src/main/java/cn/sunday/imoochybridandroidnative/constants/UrlConstants.java` 下的 `BASE_WEB_URL` 为需要访问项目的 `Network` 地址。
 2. 如果在 Android 9.0 以上设备中运行，还需修改 `imooc_jd_android_complete/ImoocHybridAndroidNative/app/src/main/res/xml/network_security_config.xml` 文件中的 `domain` 标签中的内容为访问地址（不包含 `http://` 和 端口号）
 3. 注意：`domain` 中必须保存 `lgdsunday.club` 以应对接口中图片资源的访问

#### 正式版APP

 1. 打包之后的正式版本 `APK` 安装包位于 `/imooc_jd_android_complete/ImoocHybridAndroidNative/app/release/慕课网高仿京东商城.apk` 中。
 2. **注意**：如需测试 **微信支付** ，需要使用正式版本  `APK` 。（安装正式版本 `APK` 到手机） 
