import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import {minify} from 'uglify-es'
import fs from 'fs'
const pkg = JSON.parse(fs.readFileSync('./package.json'))

export default {
  name: 'ReactExiting',
  input: 'src/react-exiting.js',
  output: [
    {format: 'es', file: pkg.module},
    {format: 'cjs', file: pkg.main},
    {format: 'umd', file: pkg['umd:main']}
  ],
  external: ['react', 'prop-types'],
  globals: {
    react: 'React',
    'prop-types': 'PropTypes'
  },
  plugins: [
    resolve(),
    commonjs({exclude: 'src/**'}),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        [
          'babel-preset-env',
          {
            modules: false,
            loose: true,
            targets: {browsers: ['last 2 versions', '> 1%']}
          }
        ],
        'babel-preset-react',
        'babel-preset-stage-2'
      ],
      plugins: ['external-helpers']
    }),
    uglify({}, minify)
  ]
}
