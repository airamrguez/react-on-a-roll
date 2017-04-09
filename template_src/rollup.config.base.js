/* eslint-disable import/no-extraneous-dependencies */
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import multiEntry from 'rollup-plugin-multi-entry'; // eslint-disable-line import/extensions

export default {
  common: {
    entry: ['babel-polyfill', 'src/index.js'],
    format: 'iife',
    moduleName: 'rollupTpl',
    globals: {
      cordova: 'cordova'
    },
    external: ['cordova'],
    moduleContext: { 'node_modules/whatwg-fetch/fetch.js': 'window' }
  },
  plugins: [
    multiEntry(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      extensions: ['.js', '.jsx'],
      jsnext: true,
      browser: true,
      main: true
    }),
    commonjs({
      include: ['node_modules/**'],
      namedExports: {
        react: [
          'Component',
          'PureComponent',
          'cloneElement',
          'isValidElement',
          'Children'
        ],
        'react-dom': ['render', 'findDOMNode', 'unmountComponentAtNode'],
        'react-onsenui': [
          'AlertDialog',
          'BackButton',
          'BottomToolbar',
          'Button',
          'Carousel',
          'CarouselItem',
          'Col',
          'Dialog',
          'Fab',
          'Icon',
          'Input',
          'LazyList',
          'List',
          'ListHeader',
          'ListItem',
          'Navigator',
          'Modal',
          'Page',
          'Popover',
          'ProgressBar',
          'ProgressCircular',
          'PullHook',
          'Range',
          'Ripple',
          'RouterNavigator',
          'RouterUtil',
          'Row',
          'Select',
          'SpeedDial',
          'SpeedDialItem',
          'Splitter',
          'SplitterContent',
          'SplitterSide',
          'Switch',
          'Tab',
          'TabActive',
          'TabInactive',
          'Tabbar',
          'Toolbar',
          'ToolbarButton'
        ]
      }
    })
  ]
};
