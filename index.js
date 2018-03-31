const { dirname, join } = require('path');
const { resolve } = require;

const absPathToModule = (m, ...paths) => join(dirname(resolve(m)), ...paths);

module.exports = {
    defaultSeverity: 'warning',
    plugins: [
        absPathToModule('stylelint-declaration-block-no-ignored-properties'),
        absPathToModule('stylelint-no-unsupported-browser-features'),
        absPathToModule('stylelint-order'),
        absPathToModule('stylelint-scss')
    ],
    rules: {
        // Plugins
        'plugin/declaration-block-no-ignored-properties': true,
        'plugin/no-unsupported-browser-features': true,

        // The following 2 rules were taken directly from Palantir (and I'm very thankful for it!)
        // https://github.com/palantir/stylelint-config-palantir/blob/master/stylelint.config.js
        'order/order': [
            [
                'custom-properties',
                'at-variables',
                'dollar-variables',
                'less-mixins',
                {
                    type: 'at-rule',
                    name: 'include'
                },
                'declarations',
                'rules'
            ],
            { unspecified: 'ignore' }
        ],
        'order/properties-order': [
            [
                'display',
                'flex',
                'flex-basis',
                'flex-direction',
                'flex-flow',
                'flex-grow',
                'flex-shrink',
                'flex-wrap',
                'align-content',
                'align-items',
                'align-self',
                'justify-content',
                'order',
                'position',
                'top',
                'right',
                'bottom',
                'left',
                'columns',
                'column-gap',
                'column-fill',
                'column-rule',
                'column-span',
                'column-count',
                'column-width',
                'float',
                'clear',
                'transform',
                'transform-origin',
                'visibility',
                'opacity',
                'z-index',
                'margin',
                'margin-top',
                'margin-right',
                'margin-bottom',
                'margin-left',
                'outline',
                'border',
                'border-top',
                'border-right',
                'border-bottom',
                'border-left',
                'border-width',
                'border-top-width',
                'border-right-width',
                'border-bottom-width',
                'border-left-width',
                'border-style',
                'border-top-style',
                'border-right-style',
                'border-bottom-style',
                'border-left-style',
                'border-color',
                'border-top-color',
                'border-right-color',
                'border-bottom-color',
                'border-left-color',
                'border-radius',
                'border-top-left-radius',
                'border-top-right-radius',
                'border-bottom-left-radius',
                'border-bottom-right-radius',
                'box-shadow',
                'box-sizing',
                'background',
                'background-clip',
                'background-color',
                'background-image',
                'background-position',
                'background-repeat',
                'background-size',
                'cursor',
                'width',
                'min-width',
                'max-width',
                'height',
                'min-height',
                'max-height',
                'overflow',
                'overflow-x',
                'overflow-y',
                'padding',
                'padding-top',
                'padding-right',
                'padding-bottom',
                'padding-left',
                'list-style',
                'caption-side',
                'table-layout',
                'border-collapse',
                'border-spacing',
                'empty-cells',
                'vertical-align',
                'text-align',
                'text-decoration',
                'text-indent',
                'text-overflow',
                'text-rendering',
                'text-shadow',
                'text-transform',
                'line-height',
                'word-spacing',
                'letter-spacing',
                'white-space',
                'color',
                'font',
                'font-family',
                'font-size',
                'font-weight',
                'font-style',
                'font-smoothing',
                'content',
                'quotes',
                'transition',
                'transition-property',
                'transition-duration',
                'transition-timing-function',
                'transition-delay'
            ],
            { unspecified: 'bottomAlphabetical' }
        ],

        // Possible Errors
        'color-no-invalid-hex': true,
        'font-family-no-duplicate-names': true,
        'font-family-no-missing-generic-family-keyword': true,
        'function-calc-no-unspaced-operator': true,
        'function-linear-gradient-no-nonstandard-direction': true,
        'string-no-newline': true,
        'unit-no-unknown': true,
        'property-no-unknown': [true, { checkPrefixed: true }],
        'keyframe-declaration-no-important': true,
        'declaration-block-no-duplicate-properties': [
            true,
            { ignore: ['consecutive-duplicates-with-different-values'] }
        ],
        'declaration-block-no-shorthand-property-overrides': true,
        'block-no-empty': true,
        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-element-no-unknown': true,
        'selector-type-no-unknown': true,
        'media-feature-name-no-unknown': true,
        'at-rule-no-unknown': true,
        'comment-no-empty': true,
        'no-descending-specificity': true,
        'no-duplicate-at-import-rules': true,
        'no-duplicate-selectors': true,
        'no-empty-source': true,
        'no-extra-semicolons': true,
        'no-invalid-double-slash-comments': true,

        // Limit Language Features
        'color-named': 'never',
        'color-no-hex': null,
        'function-blacklist': null,
        'function-url-no-scheme-relative': null,
        'function-url-scheme-blacklist': null,
        'function-url-scheme-whitelist': null,
        'function-whitelist': null,
        'number-max-precision': 3,
        'time-min-milliseconds': null,
        'unit-blacklist': null,
        'unit-whitelist': null,
        'shorthand-property-no-redundant-values': true,
        'value-no-vendor-prefix': true,
        'custom-property-pattern': null,
        'property-blacklist': null,
        'property-no-vendor-prefix': true,
        'property-whitelist': null,
        'declaration-block-no-redundant-longhand-properties': true,
        'declaration-no-important': true,
        'declaration-property-unit-blacklist': null,
        'declaration-property-unit-whitelist': null,
        'declaration-property-value-blacklist': null,
        'declaration-property-value-whitelist': null,
        'declaration-block-single-line-max-declarations': 1,
        'selector-attribute-operator-blacklist': null,
        'selector-attribute-operator-whitelist': null,
        'selector-class-pattern': null,
        'selector-combinator-blacklist': null,
        'selector-combinator-whitelist': null,
        'selector-id-pattern': null,
        'selector-max-attribute': null,
        'selector-max-class': null,
        'selector-max-combinators': null,
        'selector-max-compound-selectors': null,
        'selector-max-empty-lines': 0,
        'selector-max-id': null,
        'selector-max-specificity': null,
        'selector-max-type': null,
        'selector-max-universal': null,
        'selector-nested-pattern': null,
        'selector-no-qualifying-type': null,
        'selector-no-vendor-prefix': true,
        'selector-pseudo-class-blacklist': null,
        'selector-pseudo-class-whitelist': null,
        'selector-pseudo-element-blacklist': null,
        'selector-pseudo-element-whitelist': null,
        'media-feature-name-blacklist': null,
        'media-feature-name-no-vendor-prefix': true,
        'media-feature-name-whitelist': null,
        'custom-media-pattern': null,
        'at-rule-blacklist': null,
        'at-rule-no-vendor-prefix': true,
        'at-rule-whitelist': null,
        'comment-word-blacklist': null,
        'max-nesting-depth': 5,
        'no-unknown-animations': true,

        // Stylistic Issues
        'color-hex-case': 'upper',
        'color-hex-length': 'long',
        'font-family-name-quotes': 'always-unless-keyword',
        'font-weight-notation': 'numeric',
        'function-max-empty-lines': 0,
        'function-name-case': 'lower',
        'function-parentheses-space-inside': 'never',
        'function-url-quotes': 'always',
        'number-leading-zero': 'always',
        'number-no-trailing-zeros': true,
        'string-quotes': 'single',
        'length-zero-no-unit': true,
        'unit-case': 'lower',
        'value-keyword-case': 'lower',
        'value-list-max-empty-lines': 0,
        'property-case': 'lower',
        'declaration-block-trailing-semicolon': 'always',
        'selector-attribute-brackets-space-inside': 'never',
        'selector-attribute-quotes': 'always',
        'selector-descendant-combinator-no-non-space': true,
        'selector-pseudo-class-case': 'lower',
        'selector-pseudo-class-parentheses-space-inside': 'never',
        'selector-pseudo-element-case': 'lower',
        'selector-pseudo-element-colon-notation': 'double',
        'selector-type-case': 'lower',
        'media-feature-name-case': 'lower',
        'media-feature-parentheses-space-inside': 'never',
        'at-rule-name-case': 'lower',
        'comment-whitespace-inside': 'always',
        indentation: 4,
        'max-empty-lines': 2,
        'max-line-length': 80,
        'no-eol-whitespace': true,
        'no-missing-end-of-source-newline': true
    }
};
