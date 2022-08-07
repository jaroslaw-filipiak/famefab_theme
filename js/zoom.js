export const checkUserZoomValue = () => {
  var browserZoomLevel = Math.round(window.devicePixelRatio * 100);
  console.log(browserZoomLevel);
};
