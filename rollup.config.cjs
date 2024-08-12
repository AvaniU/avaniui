const { defineConfig } = require("rollup");
const typescript = require('@rollup/plugin-typescript');

module.exports = defineConfig ({
    input : "src/index.ts",
    output : {
        dir : "dist",
        format : "es",
        name : "pack-ui",
    },
    external : ["react", "react-dom"],
    plugins : [typescript({tsconfig:"tsconfig.json"})],

})
