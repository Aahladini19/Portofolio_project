window.ASSETS = {
  themePreview: "images/theme-preview.jpg",
  featureResponsive: "images/kerge-fully-responsive.png",
  featurePageBuilder: "images/kerge-drag-and-drop-page-builder.png",
  featureDemoInstaller: "images/kerge-1-click-demo-installer.png",
  featureCustomizable: "images/kerge-easy-customizable.png",
  featureResume: "images/kerge-advanced-resume.png",
  featurePortfolio: "images/kerge-powerful-portfolio.png",
  featureShortcodes: "images/kerge-shortcodes.png",
  featureSupport: "images/kerge-24-7-support.png",
  setupPreview: "images/kerge_ts_preview.jpg",
  demo7: "images/breezycv_7.jpg",
  demo7Dark: "images/breezycv_7_dark.jpg",
  demo7FullWidth: "images/breezycv_7_fw.jpg",
  demo7FullWidthDark: "images/breezycv_7_fw_dark.jpg",
  demo1: "images/breezycv_1.jpg",
  demo1Dark: "images/breezycv_1_dark.jpg",
  demo1FullWidth: "images/breezycv_1_fw.jpg",
  demo1FullWidthDark: "images/breezycv_1_fw_dark.jpg",
  demo2: "images/breezycv_2.jpg",
  demo2Dark: "images/breezycv_2_dark.jpg",
  demo3: "images/breezycv_3.jpg",
  demo3Dark: "images/breezycv_3_dark.jpg",
  demo4: "images/breezycv_4.jpg",
  demo4Dark: "images/breezycv_4_dark.jpg",
  demo5: "images/breezycv_5.jpg",
  demo5Dark: "images/breezycv_5_dark.jpg",
  demo6: "images/breezycv_6.jpg",
  demo6Dark: "images/breezycv_6_dark.jpg"
};

document.querySelectorAll("[data-asset]").forEach((image) => {
  const assetPath = window.ASSETS[image.dataset.asset];
  if (assetPath) image.src = assetPath;
});