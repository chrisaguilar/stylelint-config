module.exports = {
    defaultSeverity: 'warning',
    extends: ['stylelint-config-standard', 'stylelint-config-sass-guidelines', 'stylelint-config-recess-order'],
    plugins: [
        'stylelint-declaration-block-no-ignored-properties',
        'stylelint-no-unsupported-browser-features',
        'stylelint-order',
        'stylelint-scss'
    ],
    rules: {
        // Plugin Configuration
        'order/properties-alphabetical-order': null,
        'plugin/declaration-block-no-ignored-properties': true,
        'plugin/no-unsupported-browser-features': [
            true,
            {
                browsers: ['> 1%', 'Last 2 versions']
            }
        ],
        // Stylistic Issues
        'indentation': 4
    }
};
