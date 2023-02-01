// This plugin can only be used on the Web Foundations 2.0 file.
figma.showUI(__html__, {width: 600, height: 500});

// const localPaintStyles = figma.getLocalPaintStyles();
let localPaintStyles = [];

const generateCSSVars = (arg: any) => {
    const {original, alias} = arg;
    const reformat = original.replace('base/', '').replace(/[/]/g, '-');
    return `--${alias}: var(--${reformat});`;
};

const generateListVars = (arg: any) => {
    const {original, alias} = arg;
    return `${alias}: ${original};`;
};

const generateJSONVars = (arg: any) => {
    const {original, alias} = arg;
    return `{${alias}: ${original}},`;
};

const generateLocalStyles = (original, alias, product, mode) => {
    const officalStyle = localPaintStyles.filter((paint) => paint.name == original);
    const newStyle = figma.createPaintStyle();
    // newStyle.name = `REMOVE-ME-${product}-${mode}/${alias}`;
    newStyle.name = alias;
    newStyle.paints = officalStyle[0].paints;
};

const generateLocalBaseColors = (name, color, description) => {
    const newStyle = figma.createPaintStyle();
    newStyle.name = name;
    newStyle.paints = color;
    newStyle.description = description;
};

const generateStyleAliases = (reqProduct, reqMode, createLocalStyles, format) => {
    let baseColor = '';
    let primaryColor = '';
    let output = [];

    const createSemanticToken = ({original, alias}) => {
        if (createLocalStyles) {
            generateLocalStyles(original, alias, reqProduct, reqMode);
        }
        if (format === 'css') {
            output.push(generateCSSVars({original: original, alias: alias}));
        }
        if (format === 'list') {
            output.push(generateListVars({original: original, alias: alias}));
        }
        if (format === 'json') {
            output.push(generateJSONVars({original: original, alias: alias}));
        }
    };

    switch (reqProduct) {
        case 'ost-site':
            baseColor = 'base/olive';
            primaryColor = 'base/grass';
            break;
        case 'ost-sponsor':
            baseColor = 'base/sage';
            primaryColor = 'base/teal';
            break;
        case 'ost-admin':
            baseColor = 'base/slate';
            primaryColor = 'base/cyan';
            break;
        case 'wire-boi':
            baseColor = 'base/gray';
            primaryColor = 'base/gray';
            break;
        default:
            baseColor = 'base/gray';
            primaryColor = 'base/gray';
            break;
    }

    // Alerts
    // -----------------
    // neutral
    createSemanticToken({original: `${baseColor}/${reqMode}/3`, alias: `alert-info-background`});
    createSemanticToken({original: `${baseColor}/${reqMode}/7`, alias: `alert-info-border`});
    createSemanticToken({original: `${baseColor}/${reqMode}/9`, alias: `alert-info-highlight`});
    createSemanticToken({original: `${baseColor}/${reqMode}/12`, alias: `alert-info-primary-text`});
    createSemanticToken({original: `${baseColor}/${reqMode}/11`, alias: `alert-info-secondary-text`});
    createSemanticToken({original: `${baseColor}/${reqMode}/10`, alias: `alert-info-tertiary-text`});

    // info
    createSemanticToken({original: `base/blue/${reqMode}/3`, alias: `alert-info-background`});
    createSemanticToken({original: `base/blue/${reqMode}/7`, alias: `alert-info-border`});
    createSemanticToken({original: `base/blue/${reqMode}/9`, alias: `alert-info-highlight`});
    createSemanticToken({original: `base/blue/${reqMode}/12`, alias: `alert-info-primary-text`});
    createSemanticToken({original: `base/blue/${reqMode}/11`, alias: `alert-info-secondary-text`});
    createSemanticToken({original: `base/blue/${reqMode}/10`, alias: `alert-info-tertiary-text`});
    // danger
    createSemanticToken({original: `base/red/${reqMode}/3`, alias: `alert-danger-background`});
    createSemanticToken({original: `base/red/${reqMode}/7`, alias: `alert-danger-border`});
    createSemanticToken({original: `base/red/${reqMode}/9`, alias: `alert-danger-highlight`});
    createSemanticToken({original: `base/red/${reqMode}/12`, alias: `alert-danger-primary-text`});
    createSemanticToken({original: `base/red/${reqMode}/11`, alias: `alert-danger-secondary-text`});
    createSemanticToken({original: `base/red/${reqMode}/10`, alias: `alert-danger-tertiary-text`});
    // warning
    createSemanticToken({original: `base/amber/${reqMode}/3`, alias: `alert-warning-background`});
    createSemanticToken({original: `base/amber/${reqMode}/7`, alias: `alert-warning-border`});
    createSemanticToken({original: `base/amber/${reqMode}/9`, alias: `alert-warning-highlight`});
    createSemanticToken({original: `base/amber/${reqMode}/12`, alias: `alert-warning-primary-text`});
    createSemanticToken({original: `base/amber/${reqMode}/11`, alias: `alert-warning-secondary-text`});
    createSemanticToken({original: `base/amber/${reqMode}/10`, alias: `alert-warning-tertiary-text`});
    // success
    createSemanticToken({original: `base/grass/${reqMode}/3`, alias: `alert-success-background`});
    createSemanticToken({original: `base/grass/${reqMode}/7`, alias: `alert-success-border`});
    createSemanticToken({original: `base/grass/${reqMode}/9`, alias: `alert-success-highlight`});
    createSemanticToken({original: `base/grass/${reqMode}/12`, alias: `alert-success-primary-text`});
    createSemanticToken({original: `base/grass/${reqMode}/11`, alias: `alert-success-secondary-text`});
    createSemanticToken({original: `base/grass/${reqMode}/10`, alias: `alert-success-tertiary-text`});

    // Application
    // -----------------
    createSemanticToken({original: `${baseColor}/${reqMode}/1`, alias: `application-background-base`});
    createSemanticToken({original: `${baseColor}/${reqMode}/2`, alias: `application-background-subtle`});
    createSemanticToken({original: `${baseColor}/${reqMode}/12`, alias: `application-primary-text`});
    createSemanticToken({original: `${baseColor}/${reqMode}/11`, alias: `application-secondary-text`});
    createSemanticToken({original: `${baseColor}/${reqMode}/10`, alias: `application-tertiary-text`});
    createSemanticToken({original: `${baseColor}/${reqMode}/1`, alias: `application-primary-text-inverse`});
    createSemanticToken({original: `${baseColor}/${reqMode}/3`, alias: `application-secondary-text-inverse`});
    createSemanticToken({original: `${baseColor}/${reqMode}/6`, alias: `application-tertiary-text-inverse`});
    createSemanticToken({original: `${primaryColor}/${reqMode}/9`, alias: `application-brand-primary`});
    createSemanticToken({original: `${primaryColor}/${reqMode}/6`, alias: `application-brand-secondary`});
    createSemanticToken({original: `${primaryColor}/${reqMode}/3`, alias: `application-brand-tertiary`});

    // Avatar
    // -----------------
    createSemanticToken({original: `${primaryColor}/${reqMode}/4`, alias: `avatar-background`});
    createSemanticToken({original: `${primaryColor}/${reqMode}/4`, alias: `avatar-border`});
    createSemanticToken({original: `${primaryColor}/${reqMode}/9`, alias: `avatar-text`});

    // Button Default
    // -----------------
    createSemanticToken({original: `${baseColor}/${reqMode}/1`, alias: `button-default-background`});
    createSemanticToken({original: `${baseColor}/${reqMode}/7`, alias: `button-default-border`});
    createSemanticToken({original: `${baseColor}/${reqMode}/12`, alias: `button-default-text`});
    // hover
    createSemanticToken({original: `${baseColor}/${reqMode}/1`, alias: `button-default-hover-background`});
    createSemanticToken({original: `${baseColor}/${reqMode}/8`, alias: `button-default-hover-border`});
    createSemanticToken({original: `${baseColor}/${reqMode}/12`, alias: `button-default-hover-text`});
    // focus
    createSemanticToken({original: `${baseColor}/${reqMode}/2`, alias: `button-default-focus-background`});
    createSemanticToken({original: `${baseColor}/${reqMode}/7`, alias: `button-default-focus-border`});
    createSemanticToken({original: `${baseColor}/${reqMode}/11`, alias: `button-default-focus-text`});

    // Button Primary
    // -----------------
    createSemanticToken({original: `${primaryColor}/${reqMode}/9`, alias: `button-primary-background`});
    createSemanticToken({original: `${primaryColor}/${reqMode}/9`, alias: `button-primary-border`});
    createSemanticToken({original: `${primaryColor}/${reqMode}/1`, alias: `button-primary-text`});
    // hover
    createSemanticToken({original: `${primaryColor}/${reqMode}/10`, alias: `button-primary-hover-background`});
    createSemanticToken({original: `${primaryColor}/${reqMode}/10`, alias: `button-primary-hover-border`});
    createSemanticToken({original: `${primaryColor}/${reqMode}/1`, alias: `button-primary-hover-text`});
    // focus
    createSemanticToken({original: `${primaryColor}/${reqMode}/8`, alias: `button-primary-focus-background`});
    createSemanticToken({original: `${primaryColor}/${reqMode}/8`, alias: `button-primary-focus-border`});
    createSemanticToken({original: `${primaryColor}/${reqMode}/1`, alias: `button-primary-focus-text`});

    // Button Danger
    // -----------------
    createSemanticToken({original: `base/red/${reqMode}/9`, alias: `button-danger-background`});
    createSemanticToken({original: `base/red/${reqMode}/9`, alias: `button-danger-border`});
    createSemanticToken({original: `base/red/${reqMode}/1`, alias: `button-danger-text`});
    // hover
    createSemanticToken({original: `base/red/${reqMode}/10`, alias: `button-danger-hover-background`});
    createSemanticToken({original: `base/red/${reqMode}/10`, alias: `button-danger-hover-border`});
    createSemanticToken({original: `base/red/${reqMode}/1`, alias: `button-danger-hover-text`});
    // focus
    createSemanticToken({original: `base/red/${reqMode}/8`, alias: `button-danger-focus-background`});
    createSemanticToken({original: `base/red/${reqMode}/8`, alias: `button-danger-focus-border`});
    createSemanticToken({original: `base/red/${reqMode}/1`, alias: `button-danger-focus-text`});

    // Button Warning
    // -----------------
    createSemanticToken({original: `base/amber/${reqMode}/9`, alias: `button-warning-background`});
    createSemanticToken({original: `base/amber/${reqMode}/9`, alias: `button-warning-border`});
    createSemanticToken({original: `base/amber/${reqMode}/1`, alias: `button-warning-text`});
    // hover
    createSemanticToken({original: `base/amber/${reqMode}/10`, alias: `button-warning-hover-background`});
    createSemanticToken({original: `base/amber/${reqMode}/10`, alias: `button-warning-hover-border`});
    createSemanticToken({original: `base/amber/${reqMode}/1`, alias: `button-warning-hover-text`});
    // focus
    createSemanticToken({original: `base/amber/${reqMode}/8`, alias: `button-warning-focus-background`});
    createSemanticToken({original: `base/amber/${reqMode}/8`, alias: `button-warning-focus-border`});
    createSemanticToken({original: `base/amber/${reqMode}/1`, alias: `button-warning-focus-text`});

    // Button Disabled
    // Same for every variation of button
    createSemanticToken({original: `${baseColor}/${reqMode}/3`, alias: `button-disabled-background`});
    createSemanticToken({original: `${baseColor}/${reqMode}/6`, alias: `button-disabled-border`});
    createSemanticToken({original: `${baseColor}/${reqMode}/10`, alias: `button-disabled-text`});

    // Common Component
    // -----------------
    createSemanticToken({original: `${baseColor}/${reqMode}/6`, alias: `component-highlight`});
    createSemanticToken({original: `${baseColor}/${reqMode}/9`, alias: `component-toggle-on`});
    createSemanticToken({original: `${baseColor}/${reqMode}/5`, alias: `component-toggle-off`});
    createSemanticToken({original: `${baseColor}/${reqMode}/7`, alias: `component-border`});
    if (reqMode == 'light') {
        createSemanticToken({original: `base/white`, alias: `component-background`});
    }
    if (reqMode == 'dark') {
        createSemanticToken({original: `${baseColor}/dark/1`, alias: `component-background`});
    }
    // Text
    createSemanticToken({original: `${baseColor}/${reqMode}/12`, alias: `component-text`});
    createSemanticToken({original: `${baseColor}/${reqMode}/11`, alias: `component-hover-text`});
    createSemanticToken({original: `${baseColor}/${reqMode}/9`, alias: `component-placeholder-text`});
    createSemanticToken({original: `${baseColor}/${reqMode}/9`, alias: `component-disabled-text`});
    createSemanticToken({original: `${baseColor}/${reqMode}/12`, alias: `component-focus-text`});
    createSemanticToken({original: `${baseColor}/${reqMode}/1`, alias: `component-text-inverse`});
    // hover
    createSemanticToken({original: `${baseColor}/${reqMode}/2`, alias: `component-hover-background`});
    createSemanticToken({original: `${baseColor}/${reqMode}/8`, alias: `component-hover-border`});
    createSemanticToken({original: `${baseColor}/${reqMode}/5`, alias: `component-hover-highlight`});
    // focus
    createSemanticToken({original: `${baseColor}/${reqMode}/1`, alias: `component-focus-background`});
    createSemanticToken({original: `base/blue/${reqMode}/7`, alias: `component-focus-border`});
    createSemanticToken({original: `${baseColor}/${reqMode}/6`, alias: `component-focus-highlight`});
    // disabled
    createSemanticToken({original: `${baseColor}/${reqMode}/3`, alias: `component-disabled-background`});
    createSemanticToken({original: `${baseColor}/${reqMode}/6`, alias: `component-disabled-border`});
    createSemanticToken({original: `${baseColor}/${reqMode}/5`, alias: `component-disabled-highlight`});

    // Filters
    // -----------------
    createSemanticToken({original: `base/indigo/${reqMode}/8`, alias: `filter-block-background`});
    createSemanticToken({original: `base/indigo/${reqMode}/1`, alias: `filter-block-text-primary`});
    createSemanticToken({original: `base/indigo/${reqMode}/3`, alias: `filter-block-text-secondary`});
    createSemanticToken({original: `base/indigo/${reqMode}/6`, alias: `filter-block-text-tertiary`});
    createSemanticToken({original: `base/indigo/${reqMode}/1`, alias: `filter-block-tag-background`});
    createSemanticToken({original: `base/indigo/${reqMode}/12`, alias: `filter-block-tag-label`});
    createSemanticToken({original: `base/indigo/${reqMode}/8`, alias: `filter-tag-background`});
    createSemanticToken({original: `base/indigo/${reqMode}/1`, alias: `filter-tag-label`});
    createSemanticToken({original: `base/indigo/${reqMode}/6`, alias: `filter-tag-icon`});
    createSemanticToken({original: `base/indigo/${reqMode}/9`, alias: `filter-indication-active`});
    createSemanticToken({original: `base/indigo/${reqMode}/5`, alias: `filter-indication-inactive`});
    createSemanticToken({original: `base/indigo/${reqMode}/5`, alias: `filter-indication-background`});

    // Shared
    // -----------------
    createSemanticToken({original: `base/blue/${reqMode}/9`, alias: 'shared-info'});
    createSemanticToken({original: `base/blue/${reqMode}/9`, alias: 'shared-link'});
    createSemanticToken({original: `base/blue/${reqMode}/10`, alias: 'shared-link-hover'});
    createSemanticToken({original: `base/indigo/${reqMode}/8`, alias: 'shared-filter'});
    createSemanticToken({original: `base/indigo/${reqMode}/9`, alias: 'shared-filter-hover'});
    createSemanticToken({original: `base/red/${reqMode}/9`, alias: 'shared-danger'});
    createSemanticToken({original: `base/amber/${reqMode}/9`, alias: 'shared-warning'});
    createSemanticToken({original: `base/green/${reqMode}/9`, alias: 'shared-success'});

    return output;
};

figma.ui.onmessage = (msg) => {
    if (msg.type === 'request-tokens') {
        figma.ui.postMessage({
            type: 'styles-generated',
            message: generateStyleAliases(msg.product, msg.mode, msg.createLocalStyles, msg.format).join('\r\n'),
        });
    }

    if (msg.type === 'load-base-colors') {
        console.log('😃 Picasso has loaded...');
        msg.colors.map((color) => {
            localPaintStyles.push(color);
            // generateLocalBaseColors(color.name, color.color, color.description)
        });
    }
};

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
// figma.notify('Done!')
// figma.closePlugin();
