import typescript from '@rollup/plugin-typescript'
import url from '@rollup/plugin-url'
// import { nodeResolve } from '@rollup/plugin-node-resolve'
// import commonjs from '@rollup/plugin-commonjs'
// import { babel } from '@rollup/plugin-babel'
import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
  ],
  plugins: [
    url(),
    typescript(),
    // nodeResolve(),
    // commonjs(),
    // babel({
    //   babelHelpers: 'bundled',
    //   exclude: 'node_modules/**',
    //   extensions: ['.ts', '.js'],
    //   presets: ['@babel/preset-env', '@babel/preset-typescript'],
    // }),
  ],
}
