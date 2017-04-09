/* eslint-disable import/no-extraneous-dependencies */
import postcss from 'rollup-plugin-postcss';
import cssnext from 'postcss-cssnext';
import replace from 'rollup-plugin-replace';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import ip from 'ip';
import baseConfig from './rollup.config.base';

const config = Object.assign(
  {},
  baseConfig.common,
  {
    entry: ['babel-polyfill', 'src/index.js'],
    dest: 'platforms/browser/www/bundle.js',
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
    ]
      .concat(baseConfig.plugins)
      .concat([
        serve({
          open: true,
          contentBase: ['platforms/browser/www'],
          historyApiFallback: true,
          host: ip.address(),
          port: process.env.npm_package_config_serve_port
        }),
        livereload({
          watch: 'platforms/browser/www/',
          debug: true,
          verbose: true,
          port: process.env.npm_package_config_livereload_port,
          usePolling: true
        })
      ])
  }
);

export default config;
