/* eslint-disable import/no-extraneous-dependencies */
import postcss from 'rollup-plugin-postcss';
import cssnext from 'postcss-cssnext';
import replace from 'rollup-plugin-replace';
import baseConfig from './rollup.config.base';

const config = Object.assign(
  {},
  baseConfig.common,
  {
    entry: ['babel-polyfill', 'src/index.js'],
    dest: 'www/bundle.js',
    sourceMap: true
  },
  {
    plugins: [
      postcss({
        plugins: [cssnext({ warnForDuplicates: false })],
        extensions: ['.css']
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ].concat(baseConfig.plugins)
  }
);

export default config;
