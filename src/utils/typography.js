import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'

// based on "St.Annes Typography Theme"

const _grayPercentage = require('gray-percentage')
const _typographyBreakpointConstants = require('typography-breakpoint-constants')

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
const _grayPercentage2 = _interopRequireDefault(_grayPercentage);
const systemFonts = ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Helvatica', 'sans-serif']

const theme = {
  title: 'Systemcluster Custom',
  googleFonts: [
    {
      name: 'Source Sans Pro',
      styles: ['300', '400', '400i', '500', '600', '700']
    },
    {
      name: 'PT Sans Narrow', 
      styles: ['400', '700']
    },
  ],
  baseFontSize: '16px',
  baseLineHeight: 1.8,
  headerFontFamily: ['PT Sans Narrow', ...systemFonts],
  bodyFontFamily: ['Source Sans Pro', ...systemFonts],
  headerColor: 'hsla(0,0%,0%,1)',
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 700,
  scaleRatio: 1.68,
  includeNormalize: true,
  overrideStyles: function overrideStyles(_ref, options) {
    var adjustFontSizeTo = _ref.adjustFontSizeTo,
        scale = _ref.scale,
        rhythm = _ref.rhythm;
    return _defineProperty(
      {
        html: {
            margin: 0,
            padding: 0,
            minWidth: '350px',
            minHeight: '100%',
            width: '100%',
            position: 'absolute',
            overflow: 'auto',
            '-ms-overflow-style': '-ms-autohiding-scrollbar',
        },
        body: {
            backgroundColor: '#fafafa',
            margin: 0,
            padding: 0,
            minHeight: '100%',
            width: '100%',
            position: 'absolute',
            overflow: 'hidden',
        },
        code: {
            fontFamily: `'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`,
            fontWeight: 300,
            lineHeight: '1.3rem',
            fontSize: '0.85rem;',
        },
        main: {
            display: 'block',
            boxSizing: 'border-box',
            maxWidth: '1000px'
        },
        header: {
            maxWidth: '1140px',
            fontFamily: theme.headerFontFamily.join(',')
        },
        a: {
            color: '#F36170',
            textDecoration: 'none'
        },
        hr: {
            background: 'rgba(0,0,0,0.1)',
            marginTop: '2.8rem',
        },
        'a:hover,a:active': {
            color: options.bodyColor
        },
        'h1,h2,h3,h4,h5,h6': {
            marginTop: rhythm(2),
            letterSpacing: '0.04rem'
        },
        blockquote: _extends({}, scale(1 / 5), {
            color: (0, _grayPercentage2.default)(41),
            paddingLeft: rhythm(18 / 16),
            marginLeft: 0,
            borderLeft: rhythm(6 / 16) + ' solid',
            borderColor: '#fcea0e'
        }),
        'blockquote > :last-child': {
            marginBottom: 0
        },
        'blockquote cite': _extends({}, adjustFontSizeTo(options.baseFontSize), {
            color: options.bodyColor,
            fontWeight: options.bodyWeight
        }),
        'blockquote cite:before': {
            content: '"â€” "'
        },
        '@media print': {
            footer: {
                'page-break-after': 'always'
            },
            'body, html': {
                overflow: 'visible !important',
                display: 'block',
                height: 'auto'
            },
            'main': {
                display: 'block'
            }
        }
      }, 
      _typographyBreakpointConstants.MOBILE_MEDIA_QUERY, 
      {
        blockquote: {
            marginLeft: rhythm(-3 / 4),
            marginRight: 0,
            borderLeft: rhythm(3 / 16) + ' solid',
            borderColor: '#fcea0e',
            paddingLeft: rhythm(9 / 16)
        }
      }
    );
  }
};

const typo = new Typography(theme)
typo.plugins = [
    CodePlugin()
]

export default typo
