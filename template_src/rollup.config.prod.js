/* eslint-disable import/no-extraneous-dependencies */
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';
import uglify from 'rollup-plugin-uglify'; // eslint-disable-line import/extensions
import baseConfig from './rollup.config.base';

export default Object.assign(
  baseConfig.common,
  {
    dest: 'www/bundle.js'
  },
  {
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      postcss({
        plugins: [cssnext({ warnForDuplicates: false }), cssnano()],
        extensions: ['.css']
      })
    ]
      .concat(baseConfig.plugins)
      .concat([uglify()])
  }
);
