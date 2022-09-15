import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from "rollup-plugin-typescript2"
import postcss from 'rollup-plugin-postcss'
import json from '@rollup/plugin-json'
const {babel} =require('@rollup/plugin-babel')
const package_json =require('./package.json')
const isProd=process.env.NODE_ENV==='production'
const babelOptions={
    presets:["@babel/preset-env"],
    extensions:['.js','.jsx','.ts','.tsx'],
    exclude:'**/node_modules/**'
}
export default {
    input:'src/index.ts',
    output: [{
        file:package_json.main,
        format:'cjs'
    },{
        file:package_json.module,
        format:'es'
    }],
    plugins:[
        peerDepsExternal({includeDependencies:!isProd}),
        resolve(),
        commonjs({sourceMap:!isProd}),
        typescript({useTsconfigDeclarationDir:true}),
        postcss({
            extract:true,
        }),
        babel(babelOptions),
        json()
    ]
}