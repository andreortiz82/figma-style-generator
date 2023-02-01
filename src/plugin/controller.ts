figma.showUI(__html__, {width: 600, height: 600});

// This script plugin can only be used on the Web Foundations 2.0 file.
// Query all local styles
const localPaintStyles = figma.getLocalPaintStyles();

const tokenResult = (arg: any) => {
    const {original, alias, theme} = arg;
    const reformat = original.replace('base/', '').replace(/[/]/g, '-');
    // console.log(`--${alias}: var(--${reformat});`)
    // console.log({ original:original, alias:alias, theme:theme })
    return `--${alias}: var(--${reformat});`;
};

const generateStyleAliases = () => {
    let output = [];

    const createCommonStyle = (arg: any) => {
        const {original, alias} = arg;
        const officalStyle = localPaintStyles.filter((item) => item.name === original);
        output.push(tokenResult({original: original, alias: alias, theme: 'shared'}));
    };

    ['light', 'dark'].map((mode) => {
        createCommonStyle({original: `base/blue/${mode}/9`, alias: 'shared-info'});
        createCommonStyle({original: `base/blue/${mode}/9`, alias: 'shared-link'});
        createCommonStyle({original: `base/blue/${mode}/10`, alias: 'shared-link-hover'});
        createCommonStyle({original: `base/indigo/${mode}/8`, alias: 'shared-filter'});
        createCommonStyle({original: `base/indigo/${mode}/9`, alias: 'shared-filter-hover'});
        createCommonStyle({original: `base/red/${mode}/9`, alias: 'shared-danger'});
        createCommonStyle({original: `base/amber/${mode}/9`, alias: 'shared-warning'});
        createCommonStyle({original: `base/green/${mode}/9`, alias: 'shared-success'});
    });

    // Create themes array for the products you want to theme
    const themes = [
        {product: 'ost-site', mode: 'light', base: 'base/olive', primary: 'base/green'},
        // { product: 'ost-site', mode: 'dark', base: 'base/olive', primary: 'base/green' },
        // { product: 'ost-sponsor', mode: 'light', base: 'base/sage', primary: 'base/teal' },
        // { product: 'ost-sponsor', mode: 'dark', base: 'base/sage', primary: 'base/teal' },
        // { product: 'ost-admin', mode: 'light', base: 'base/slate', primary: 'base/cyan' },
        // { product: 'ost-admin', mode: 'dark', base: 'base/slate', primary: 'base/cyan' }
    ];

    const createThemeStyle = (theme: any, {original, alias}: any) => {
        const {product, mode, base, primary} = theme;
        const officalStyle = localPaintStyles.filter((item) => item.name === original);
        output.push(tokenResult({original: original, alias: alias, theme: `${theme.product}-${theme.mode}`}));
    };

    themes.map((theme) => {
        const {product, mode, base, primary} = theme;

        // Application (Global)
        // -----------------
        createThemeStyle(theme, {original: `${base}/${mode}/1`, alias: `application-background-base`});
        createThemeStyle(theme, {original: `${base}/${mode}/2`, alias: `application-background-subtle`});

        createThemeStyle(theme, {original: `${base}/${mode}/12`, alias: `application-primary-text`});
        createThemeStyle(theme, {original: `${base}/${mode}/11`, alias: `application-secondary-text`});
        createThemeStyle(theme, {original: `${base}/${mode}/10`, alias: `application-tertiary-text`});

        createThemeStyle(theme, {original: `${base}/${mode}/1`, alias: `application-primary-text-inverse`});
        createThemeStyle(theme, {original: `${base}/${mode}/3`, alias: `application-secondary-text-inverse`});
        createThemeStyle(theme, {original: `${base}/${mode}/6`, alias: `application-tertiary-text-inverse`});

        createThemeStyle(theme, {original: `${primary}/${mode}/9`, alias: `application-brand-primary`});
        createThemeStyle(theme, {original: `${primary}/${mode}/6`, alias: `application-brand-secondary`});
        createThemeStyle(theme, {original: `${primary}/${mode}/3`, alias: `application-brand-tertiary`});

        // Common Component
        // -----------------
        createThemeStyle(theme, {original: `${base}/${mode}/6`, alias: `component-highlight`});
        createThemeStyle(theme, {original: `${base}/${mode}/9`, alias: `component-toggle-on`});
        createThemeStyle(theme, {original: `${base}/${mode}/5`, alias: `component-toggle-off`});
        createThemeStyle(theme, {original: `${base}/${mode}/7`, alias: `component-border`});

        if (mode == 'light') {
            createThemeStyle(theme, {original: `base/white`, alias: `component-background`});
        }
        if (mode == 'dark') {
            createThemeStyle(theme, {original: `${base}/dark/1`, alias: `component-background`});
        }

        // Text
        createThemeStyle(theme, {original: `${base}/${mode}/12`, alias: `component-text`});
        createThemeStyle(theme, {original: `${base}/${mode}/11`, alias: `component-hover-text`});
        createThemeStyle(theme, {original: `${base}/${mode}/9`, alias: `component-placeholder-text`});
        createThemeStyle(theme, {original: `${base}/${mode}/9`, alias: `component-disabled-text`});
        createThemeStyle(theme, {original: `${base}/${mode}/12`, alias: `component-focus-text`});
        createThemeStyle(theme, {original: `${base}/${mode}/1`, alias: `component-text-inverse`});

        // hover
        createThemeStyle(theme, {original: `${base}/${mode}/2`, alias: `component-hover-background`});
        createThemeStyle(theme, {original: `${base}/${mode}/8`, alias: `component-hover-border`});
        createThemeStyle(theme, {original: `${base}/${mode}/5`, alias: `component-hover-highlight`});
        // focus
        createThemeStyle(theme, {original: `${base}/${mode}/1`, alias: `component-focus-background`});
        createThemeStyle(theme, {original: `base/blue/${mode}/7`, alias: `component-focus-border`});
        createThemeStyle(theme, {original: `${base}/${mode}/6`, alias: `component-focus-highlight`});
        // disabled
        createThemeStyle(theme, {original: `${base}/${mode}/3`, alias: `component-disabled-background`});
        createThemeStyle(theme, {original: `${base}/${mode}/6`, alias: `component-disabled-border`});
        createThemeStyle(theme, {original: `${base}/${mode}/5`, alias: `component-disabled-highlight`});

        // Button Default
        // -----------------
        createThemeStyle(theme, {original: `${base}/${mode}/1`, alias: `button-default-background`});
        createThemeStyle(theme, {original: `${base}/${mode}/7`, alias: `button-default-border`});
        createThemeStyle(theme, {original: `${base}/${mode}/12`, alias: `button-default-text`});
        // hover
        createThemeStyle(theme, {original: `${base}/${mode}/1`, alias: `button-default-hover-background`});
        createThemeStyle(theme, {original: `${base}/${mode}/8`, alias: `button-default-hover-border`});
        createThemeStyle(theme, {original: `${base}/${mode}/12`, alias: `button-default-hover-text`});
        // focus
        createThemeStyle(theme, {original: `${base}/${mode}/2`, alias: `button-default-focus-background`});
        createThemeStyle(theme, {original: `${base}/${mode}/7`, alias: `button-default-focus-border`});
        createThemeStyle(theme, {original: `${base}/${mode}/11`, alias: `button-default-focus-text`});

        // Button Primary
        // -----------------
        createThemeStyle(theme, {original: `${primary}/${mode}/9`, alias: `button-primary-background`});
        createThemeStyle(theme, {original: `${primary}/${mode}/9`, alias: `button-primary-border`});
        createThemeStyle(theme, {original: `${primary}/${mode}/1`, alias: `button-primary-text`});
        // hover
        createThemeStyle(theme, {original: `${primary}/${mode}/10`, alias: `button-primary-hover-background`});
        createThemeStyle(theme, {original: `${primary}/${mode}/10`, alias: `button-primary-hover-border`});
        createThemeStyle(theme, {original: `${primary}/${mode}/1`, alias: `button-primary-hover-text`});
        // focus
        createThemeStyle(theme, {original: `${primary}/${mode}/8`, alias: `button-primary-focus-background`});
        createThemeStyle(theme, {original: `${primary}/${mode}/8`, alias: `button-primary-focus-border`});
        createThemeStyle(theme, {original: `${primary}/${mode}/1`, alias: `button-primary-focus-text`});

        // Button Danger
        // -----------------
        createThemeStyle(theme, {original: `base/red/${mode}/9`, alias: `button-danger-background`});
        createThemeStyle(theme, {original: `base/red/${mode}/9`, alias: `button-danger-border`});
        createThemeStyle(theme, {original: `base/red/${mode}/1`, alias: `button-danger-text`});
        // hover
        createThemeStyle(theme, {original: `base/red/${mode}/10`, alias: `button-danger-hover-background`});
        createThemeStyle(theme, {original: `base/red/${mode}/10`, alias: `button-danger-hover-border`});
        createThemeStyle(theme, {original: `base/red/${mode}/1`, alias: `button-danger-hover-text`});
        // focus
        createThemeStyle(theme, {original: `base/red/${mode}/8`, alias: `button-danger-focus-background`});
        createThemeStyle(theme, {original: `base/red/${mode}/8`, alias: `button-danger-focus-border`});
        createThemeStyle(theme, {original: `base/red/${mode}/1`, alias: `button-danger-focus-text`});

        // Button Warning
        // -----------------
        createThemeStyle(theme, {original: `base/amber/${mode}/9`, alias: `button-warning-background`});
        createThemeStyle(theme, {original: `base/amber/${mode}/9`, alias: `button-warning-border`});
        createThemeStyle(theme, {original: `base/amber/${mode}/1`, alias: `button-warning-text`});
        // hover
        createThemeStyle(theme, {original: `base/amber/${mode}/10`, alias: `button-warning-hover-background`});
        createThemeStyle(theme, {original: `base/amber/${mode}/10`, alias: `button-warning-hover-border`});
        createThemeStyle(theme, {original: `base/amber/${mode}/1`, alias: `button-warning-hover-text`});
        // focus
        createThemeStyle(theme, {original: `base/amber/${mode}/8`, alias: `button-warning-focus-background`});
        createThemeStyle(theme, {original: `base/amber/${mode}/8`, alias: `button-warning-focus-border`});
        createThemeStyle(theme, {original: `base/amber/${mode}/1`, alias: `button-warning-focus-text`});

        // -----------------
        // disabled (Same for every variation of button)
        createThemeStyle(theme, {original: `${base}/${mode}/3`, alias: `button-disabled-background`});
        createThemeStyle(theme, {original: `${base}/${mode}/6`, alias: `button-disabled-border`});
        createThemeStyle(theme, {original: `${base}/${mode}/10`, alias: `button-disabled-text`});

        // Alerts
        // -----------------
        // neutral
        createThemeStyle(theme, {original: `${base}/${mode}/3`, alias: `alert-info-background`});
        createThemeStyle(theme, {original: `${base}/${mode}/7`, alias: `alert-info-border`});
        createThemeStyle(theme, {original: `${base}/${mode}/9`, alias: `alert-info-highlight`});
        createThemeStyle(theme, {original: `${base}/${mode}/12`, alias: `alert-info-primary-text`});
        createThemeStyle(theme, {original: `${base}/${mode}/11`, alias: `alert-info-secondary-text`});
        createThemeStyle(theme, {original: `${base}/${mode}/10`, alias: `alert-info-tertiary-text`});

        // info
        createThemeStyle(theme, {original: `base/blue/${mode}/3`, alias: `alert-info-background`});
        createThemeStyle(theme, {original: `base/blue/${mode}/7`, alias: `alert-info-border`});
        createThemeStyle(theme, {original: `base/blue/${mode}/9`, alias: `alert-info-highlight`});
        createThemeStyle(theme, {original: `base/blue/${mode}/12`, alias: `alert-info-primary-text`});
        createThemeStyle(theme, {original: `base/blue/${mode}/11`, alias: `alert-info-secondary-text`});
        createThemeStyle(theme, {original: `base/blue/${mode}/10`, alias: `alert-info-tertiary-text`});
        // danger
        createThemeStyle(theme, {original: `base/red/${mode}/3`, alias: `alert-danger-background`});
        createThemeStyle(theme, {original: `base/red/${mode}/7`, alias: `alert-danger-border`});
        createThemeStyle(theme, {original: `base/red/${mode}/9`, alias: `alert-danger-highlight`});
        createThemeStyle(theme, {original: `base/red/${mode}/12`, alias: `alert-danger-primary-text`});
        createThemeStyle(theme, {original: `base/red/${mode}/11`, alias: `alert-danger-secondary-text`});
        createThemeStyle(theme, {original: `base/red/${mode}/10`, alias: `alert-danger-tertiary-text`});
        // warning
        createThemeStyle(theme, {original: `base/amber/${mode}/3`, alias: `alert-warning-background`});
        createThemeStyle(theme, {original: `base/amber/${mode}/7`, alias: `alert-warning-border`});
        createThemeStyle(theme, {original: `base/amber/${mode}/9`, alias: `alert-warning-highlight`});
        createThemeStyle(theme, {original: `base/amber/${mode}/12`, alias: `alert-warning-primary-text`});
        createThemeStyle(theme, {original: `base/amber/${mode}/11`, alias: `alert-warning-secondary-text`});
        createThemeStyle(theme, {original: `base/amber/${mode}/10`, alias: `alert-warning-tertiary-text`});
        // success
        createThemeStyle(theme, {original: `base/grass/${mode}/3`, alias: `alert-success-background`});
        createThemeStyle(theme, {original: `base/grass/${mode}/7`, alias: `alert-success-border`});
        createThemeStyle(theme, {original: `base/grass/${mode}/9`, alias: `alert-success-highlight`});
        createThemeStyle(theme, {original: `base/grass/${mode}/12`, alias: `alert-success-primary-text`});
        createThemeStyle(theme, {original: `base/grass/${mode}/11`, alias: `alert-success-secondary-text`});
        createThemeStyle(theme, {original: `base/grass/${mode}/10`, alias: `alert-success-tertiary-text`});

        // Avatar
        // -----------------
        createThemeStyle(theme, {original: `${primary}/${mode}/4`, alias: `avatar-background`});
        createThemeStyle(theme, {original: `${primary}/${mode}/4`, alias: `avatar-border`});
        createThemeStyle(theme, {original: `${primary}/${mode}/9`, alias: `avatar-text`});

        // Filters
        // -----------------
        createThemeStyle(theme, {original: `base/indigo/${mode}/8`, alias: `filter-block-background`});
        createThemeStyle(theme, {original: `base/indigo/${mode}/1`, alias: `filter-block-text-primary`});
        createThemeStyle(theme, {original: `base/indigo/${mode}/3`, alias: `filter-block-text-secondary`});
        createThemeStyle(theme, {original: `base/indigo/${mode}/6`, alias: `filter-block-text-tertiary`});
        createThemeStyle(theme, {original: `base/indigo/${mode}/1`, alias: `filter-block-tag-background`});
        createThemeStyle(theme, {original: `base/indigo/${mode}/12`, alias: `filter-block-tag-label`});
        createThemeStyle(theme, {original: `base/indigo/${mode}/8`, alias: `filter-tag-background`});
        createThemeStyle(theme, {original: `base/indigo/${mode}/1`, alias: `filter-tag-label`});
        createThemeStyle(theme, {original: `base/indigo/${mode}/6`, alias: `filter-tag-icon`});
        createThemeStyle(theme, {original: `base/indigo/${mode}/9`, alias: `filter-indication-active`});
        createThemeStyle(theme, {original: `base/indigo/${mode}/5`, alias: `filter-indication-inactive`});

        // Deprecated
        // ------------------
        // createThemeStyle(theme, { original: `${base}/${mode}/10`, alias: `application-placeholder-text` })
        // createThemeStyle(theme, { original: `${primary}/${mode}/9`, alias: `application-primary` })
        // createThemeStyle(theme, { original: `${primary}/${mode}/10`, alias: `application-primary-hover` })
    });
    return output;
};

figma.ui.postMessage({
    type: 'styles-generated',
    message: generateStyleAliases().join('\r\n'),
});

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
// figma.notify('Done!')
// figma.closePlugin();
