export const fetchAssetList = () => {
  let assets = {};
  const files = require.context('../assets', true, /\.(jpg|jpeg|png|gif|svg|pdf|ico)$/);
  files.keys().forEach (function(item) {
    assets[item.replace('./', '')] = files(item);
  });
  return assets;
}

export const fetchMuralAssets = () => {
  let assets = {};
  const files = require.context('../assets/mural', true, /\.(jpg|jpeg|png|gif|svg|pdf|ico)$/);
  files.keys().forEach (function(item) {
    assets[item.replace('./', '')] = files(item);
  });
  return assets;
}
