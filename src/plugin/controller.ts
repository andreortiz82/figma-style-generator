figma.showUI(__html__, {width: 600, height: 500});

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

const generateStyleAliases = (reqProduct, reqMode) => {
    let output = [];
    let base = '';
    let primary = '';

    const createCommonStyle = (arg: any) => {
        const {original, alias} = arg;
        // const officalStyle = localPaintStyles.filter((item) => item.name === original);
        output.push(tokenResult({original: original, alias: alias, theme: 'shared'}));
    };

    createCommonStyle({original: `base/blue/${reqMode}/9`, alias: 'shared-info'});
    createCommonStyle({original: `base/blue/${reqMode}/9`, alias: 'shared-link'});
    createCommonStyle({original: `base/blue/${reqMode}/10`, alias: 'shared-link-hover'});
    createCommonStyle({original: `base/indigo/${reqMode}/8`, alias: 'shared-filter'});
    createCommonStyle({original: `base/indigo/${reqMode}/9`, alias: 'shared-filter-hover'});
    createCommonStyle({original: `base/red/${reqMode}/9`, alias: 'shared-danger'});
    createCommonStyle({original: `base/amber/${reqMode}/9`, alias: 'shared-warning'});
    createCommonStyle({original: `base/green/${reqMode}/9`, alias: 'shared-success'});

    const createThemeStyle = ({original, alias}) => {
        // const officalStyle = localPaintStyles.filter((item) => item.name === original);
        output.push(tokenResult({original: original, alias: alias}));
    };

    switch (reqProduct) {
        case 'ost-site':
            base = 'olive';
            primary = 'grass';
            break;
        case 'ost-sponsor':
            base = 'sage';
            primary = 'teal';
            break;
        case 'ost-admin':
            base = 'slate';
            primary = 'cyan';
            break;
        default:
            base = 'olive';
            primary = 'grass';
            break;
    }

    // Application (Global)
    // -----------------
    createThemeStyle({original: `${base}/${reqMode}/2`, alias: `application-background-subtle`});
    createThemeStyle({original: `${base}/${reqMode}/1`, alias: `application-background-base`});

    createThemeStyle({original: `${base}/${reqMode}/12`, alias: `application-primary-text`});
    createThemeStyle({original: `${base}/${reqMode}/11`, alias: `application-secondary-text`});
    createThemeStyle({original: `${base}/${reqMode}/10`, alias: `application-tertiary-text`});

    createThemeStyle({original: `${base}/${reqMode}/1`, alias: `application-primary-text-inverse`});
    createThemeStyle({original: `${base}/${reqMode}/3`, alias: `application-secondary-text-inverse`});
    createThemeStyle({original: `${base}/${reqMode}/6`, alias: `application-tertiary-text-inverse`});

    createThemeStyle({original: `${primary}/${reqMode}/9`, alias: `application-brand-primary`});
    createThemeStyle({original: `${primary}/${reqMode}/6`, alias: `application-brand-secondary`});
    createThemeStyle({original: `${primary}/${reqMode}/3`, alias: `application-brand-tertiary`});

    // Common Component
    // -----------------
    createThemeStyle({original: `${base}/${reqMode}/6`, alias: `component-highlight`});
    createThemeStyle({original: `${base}/${reqMode}/9`, alias: `component-toggle-on`});
    createThemeStyle({original: `${base}/${reqMode}/5`, alias: `component-toggle-off`});
    createThemeStyle({original: `${base}/${reqMode}/7`, alias: `component-border`});

    if (reqMode == 'light') {
        createThemeStyle({original: `base/white`, alias: `component-background`});
    }
    if (reqMode == 'dark') {
        createThemeStyle({original: `${base}/dark/1`, alias: `component-background`});
    }

    // Text
    createThemeStyle({original: `${base}/${reqMode}/12`, alias: `component-text`});
    createThemeStyle({original: `${base}/${reqMode}/11`, alias: `component-hover-text`});
    createThemeStyle({original: `${base}/${reqMode}/9`, alias: `component-placeholder-text`});
    createThemeStyle({original: `${base}/${reqMode}/9`, alias: `component-disabled-text`});
    createThemeStyle({original: `${base}/${reqMode}/12`, alias: `component-focus-text`});
    createThemeStyle({original: `${base}/${reqMode}/1`, alias: `component-text-inverse`});

    // hover
    createThemeStyle({original: `${base}/${reqMode}/2`, alias: `component-hover-background`});
    createThemeStyle({original: `${base}/${reqMode}/8`, alias: `component-hover-border`});
    createThemeStyle({original: `${base}/${reqMode}/5`, alias: `component-hover-highlight`});
    // focus
    createThemeStyle({original: `${base}/${reqMode}/1`, alias: `component-focus-background`});
    createThemeStyle({original: `base/blue/${reqMode}/7`, alias: `component-focus-border`});
    createThemeStyle({original: `${base}/${reqMode}/6`, alias: `component-focus-highlight`});
    // disabled
    createThemeStyle({original: `${base}/${reqMode}/3`, alias: `component-disabled-background`});
    createThemeStyle({original: `${base}/${reqMode}/6`, alias: `component-disabled-border`});
    createThemeStyle({original: `${base}/${reqMode}/5`, alias: `component-disabled-highlight`});

    // Button Default
    // -----------------
    createThemeStyle({original: `${base}/${reqMode}/1`, alias: `button-default-background`});
    createThemeStyle({original: `${base}/${reqMode}/7`, alias: `button-default-border`});
    createThemeStyle({original: `${base}/${reqMode}/12`, alias: `button-default-text`});
    // hover
    createThemeStyle({original: `${base}/${reqMode}/1`, alias: `button-default-hover-background`});
    createThemeStyle({original: `${base}/${reqMode}/8`, alias: `button-default-hover-border`});
    createThemeStyle({original: `${base}/${reqMode}/12`, alias: `button-default-hover-text`});
    // focus
    createThemeStyle({original: `${base}/${reqMode}/2`, alias: `button-default-focus-background`});
    createThemeStyle({original: `${base}/${reqMode}/7`, alias: `button-default-focus-border`});
    createThemeStyle({original: `${base}/${reqMode}/11`, alias: `button-default-focus-text`});

    // Button Primary
    // -----------------
    createThemeStyle({original: `${primary}/${reqMode}/9`, alias: `button-primary-background`});
    createThemeStyle({original: `${primary}/${reqMode}/9`, alias: `button-primary-border`});
    createThemeStyle({original: `${primary}/${reqMode}/1`, alias: `button-primary-text`});
    // hover
    createThemeStyle({original: `${primary}/${reqMode}/10`, alias: `button-primary-hover-background`});
    createThemeStyle({original: `${primary}/${reqMode}/10`, alias: `button-primary-hover-border`});
    createThemeStyle({original: `${primary}/${reqMode}/1`, alias: `button-primary-hover-text`});
    // focus
    createThemeStyle({original: `${primary}/${reqMode}/8`, alias: `button-primary-focus-background`});
    createThemeStyle({original: `${primary}/${reqMode}/8`, alias: `button-primary-focus-border`});
    createThemeStyle({original: `${primary}/${reqMode}/1`, alias: `button-primary-focus-text`});

    // Button Danger
    // -----------------
    createThemeStyle({original: `base/red/${reqMode}/9`, alias: `button-danger-background`});
    createThemeStyle({original: `base/red/${reqMode}/9`, alias: `button-danger-border`});
    createThemeStyle({original: `base/red/${reqMode}/1`, alias: `button-danger-text`});
    // hover
    createThemeStyle({original: `base/red/${reqMode}/10`, alias: `button-danger-hover-background`});
    createThemeStyle({original: `base/red/${reqMode}/10`, alias: `button-danger-hover-border`});
    createThemeStyle({original: `base/red/${reqMode}/1`, alias: `button-danger-hover-text`});
    // focus
    createThemeStyle({original: `base/red/${reqMode}/8`, alias: `button-danger-focus-background`});
    createThemeStyle({original: `base/red/${reqMode}/8`, alias: `button-danger-focus-border`});
    createThemeStyle({original: `base/red/${reqMode}/1`, alias: `button-danger-focus-text`});

    // Button Warning
    // -----------------
    createThemeStyle({original: `base/amber/${reqMode}/9`, alias: `button-warning-background`});
    createThemeStyle({original: `base/amber/${reqMode}/9`, alias: `button-warning-border`});
    createThemeStyle({original: `base/amber/${reqMode}/1`, alias: `button-warning-text`});
    // hover
    createThemeStyle({original: `base/amber/${reqMode}/10`, alias: `button-warning-hover-background`});
    createThemeStyle({original: `base/amber/${reqMode}/10`, alias: `button-warning-hover-border`});
    createThemeStyle({original: `base/amber/${reqMode}/1`, alias: `button-warning-hover-text`});
    // focus
    createThemeStyle({original: `base/amber/${reqMode}/8`, alias: `button-warning-focus-background`});
    createThemeStyle({original: `base/amber/${reqMode}/8`, alias: `button-warning-focus-border`});
    createThemeStyle({original: `base/amber/${reqMode}/1`, alias: `button-warning-focus-text`});

    // -----------------
    // disabled (Same for every variation of button)
    createThemeStyle({original: `${base}/${reqMode}/3`, alias: `button-disabled-background`});
    createThemeStyle({original: `${base}/${reqMode}/6`, alias: `button-disabled-border`});
    createThemeStyle({original: `${base}/${reqMode}/10`, alias: `button-disabled-text`});

    // Alerts
    // -----------------
    // neutral
    createThemeStyle({original: `${base}/${reqMode}/3`, alias: `alert-info-background`});
    createThemeStyle({original: `${base}/${reqMode}/7`, alias: `alert-info-border`});
    createThemeStyle({original: `${base}/${reqMode}/9`, alias: `alert-info-highlight`});
    createThemeStyle({original: `${base}/${reqMode}/12`, alias: `alert-info-primary-text`});
    createThemeStyle({original: `${base}/${reqMode}/11`, alias: `alert-info-secondary-text`});
    createThemeStyle({original: `${base}/${reqMode}/10`, alias: `alert-info-tertiary-text`});

    // info
    createThemeStyle({original: `base/blue/${reqMode}/3`, alias: `alert-info-background`});
    createThemeStyle({original: `base/blue/${reqMode}/7`, alias: `alert-info-border`});
    createThemeStyle({original: `base/blue/${reqMode}/9`, alias: `alert-info-highlight`});
    createThemeStyle({original: `base/blue/${reqMode}/12`, alias: `alert-info-primary-text`});
    createThemeStyle({original: `base/blue/${reqMode}/11`, alias: `alert-info-secondary-text`});
    createThemeStyle({original: `base/blue/${reqMode}/10`, alias: `alert-info-tertiary-text`});
    // danger
    createThemeStyle({original: `base/red/${reqMode}/3`, alias: `alert-danger-background`});
    createThemeStyle({original: `base/red/${reqMode}/7`, alias: `alert-danger-border`});
    createThemeStyle({original: `base/red/${reqMode}/9`, alias: `alert-danger-highlight`});
    createThemeStyle({original: `base/red/${reqMode}/12`, alias: `alert-danger-primary-text`});
    createThemeStyle({original: `base/red/${reqMode}/11`, alias: `alert-danger-secondary-text`});
    createThemeStyle({original: `base/red/${reqMode}/10`, alias: `alert-danger-tertiary-text`});
    // warning
    createThemeStyle({original: `base/amber/${reqMode}/3`, alias: `alert-warning-background`});
    createThemeStyle({original: `base/amber/${reqMode}/7`, alias: `alert-warning-border`});
    createThemeStyle({original: `base/amber/${reqMode}/9`, alias: `alert-warning-highlight`});
    createThemeStyle({original: `base/amber/${reqMode}/12`, alias: `alert-warning-primary-text`});
    createThemeStyle({original: `base/amber/${reqMode}/11`, alias: `alert-warning-secondary-text`});
    createThemeStyle({original: `base/amber/${reqMode}/10`, alias: `alert-warning-tertiary-text`});
    // success
    createThemeStyle({original: `base/grass/${reqMode}/3`, alias: `alert-success-background`});
    createThemeStyle({original: `base/grass/${reqMode}/7`, alias: `alert-success-border`});
    createThemeStyle({original: `base/grass/${reqMode}/9`, alias: `alert-success-highlight`});
    createThemeStyle({original: `base/grass/${reqMode}/12`, alias: `alert-success-primary-text`});
    createThemeStyle({original: `base/grass/${reqMode}/11`, alias: `alert-success-secondary-text`});
    createThemeStyle({original: `base/grass/${reqMode}/10`, alias: `alert-success-tertiary-text`});

    // Avatar
    // -----------------
    createThemeStyle({original: `${primary}/${reqMode}/4`, alias: `avatar-background`});
    createThemeStyle({original: `${primary}/${reqMode}/4`, alias: `avatar-border`});
    createThemeStyle({original: `${primary}/${reqMode}/9`, alias: `avatar-text`});

    // Filters
    // -----------------
    createThemeStyle({original: `base/indigo/${reqMode}/8`, alias: `filter-block-background`});
    createThemeStyle({original: `base/indigo/${reqMode}/1`, alias: `filter-block-text-primary`});
    createThemeStyle({original: `base/indigo/${reqMode}/3`, alias: `filter-block-text-secondary`});
    createThemeStyle({original: `base/indigo/${reqMode}/6`, alias: `filter-block-text-tertiary`});
    createThemeStyle({original: `base/indigo/${reqMode}/1`, alias: `filter-block-tag-background`});
    createThemeStyle({original: `base/indigo/${reqMode}/12`, alias: `filter-block-tag-label`});
    createThemeStyle({original: `base/indigo/${reqMode}/8`, alias: `filter-tag-background`});
    createThemeStyle({original: `base/indigo/${reqMode}/1`, alias: `filter-tag-label`});
    createThemeStyle({original: `base/indigo/${reqMode}/6`, alias: `filter-tag-icon`});
    createThemeStyle({original: `base/indigo/${reqMode}/9`, alias: `filter-indication-active`});
    createThemeStyle({original: `base/indigo/${reqMode}/5`, alias: `filter-indication-inactive`});

    // Deprecated
    // ------------------
    // createThemeStyle(theme, { original: `${base}/${reqMode}/10`, alias: `application-placeholder-text` })
    // createThemeStyle(theme, { original: `${primary}/${reqMode}/9`, alias: `application-primary` })
    // createThemeStyle(theme, { original: `${primary}/${reqMode}/10`, alias: `application-primary-hover` })

    return output;
};

figma.ui.onmessage = (msg) => {
    if (msg.type === 'request-tokens') {
        figma.ui.postMessage({
            type: 'styles-generated',
            message: generateStyleAliases(msg.product, msg.mode).join('\r\n'),
        });
    }
};

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
// figma.notify('Done!')
// figma.closePlugin();
