const modulesFiles = require.context("./options", true, /index.ts$/);
let modules = {};
modulesFiles.keys().forEach((item) => {
  modules = Object.assign({}, modules, modulesFiles(item).default);
});
export default modules;
