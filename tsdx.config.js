const svgr = require("@svgr/webpack");

module.exports = {
  rollup(config, options) {
    config.plugins.push({
      name: "load-svg",
      transform(code, id) {
        if (id.endsWith(".svg")) {
          return svgr(code, { icon: true }, { filePath: id }).then((res) => ({
            code: res,
          }));
        }
      },
    });

    return config;
  },
};
