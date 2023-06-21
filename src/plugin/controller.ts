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

const generateLocalStyles = (original, alias, description) => {
    const officalStyle = localPaintStyles.filter((paint) => paint.name == original);
    const newStyle = figma.createPaintStyle();
    newStyle.name = alias;
    newStyle.description = description;
    newStyle.paints = officalStyle[0].paints;
};

const generateLocalBaseColors = (name, color, description) => {
    const newStyle = figma.createPaintStyle();
    newStyle.name = name;
    newStyle.paints = color;
    newStyle.description = description;
};

const generateStyleAliases = (reqMode, createLocalStyles, format) => {
    let baseColor = 'base/slate';
    let siteColor = 'base/grass';
    let sponsorColor = 'base/teal';
    let adminColor = 'base/blue';

    let output = [];

    const createSemanticToken = ({original, alias, description}) => {
        if (createLocalStyles) {
            generateLocalStyles(original, alias, description);
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

    // Alerts
    // -----------------
    // neutral
    createSemanticToken({
        original: `${baseColor}/${reqMode}/3`,
        alias: `alert-neutral-background`,
        description: 'Background color for neutral Alert Component',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/6`,
        alias: `alert-neutral-border`,
        description: 'Border color for neutral Alert Component',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/9`,
        alias: `alert-neutral-highlight`,
        description: 'Icon color for neutral Alert Component',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/12`,
        alias: `alert-neutral-primary-text`,
        description: 'Primary text color for neutral Alert Component',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/11`,
        alias: `alert-neutral-secondary-text`,
        description: 'Secondary text color for neutral Alert Component',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/10`,
        alias: `alert-neutral-tertiary-text`,
        description: 'Tertiary text color for neutral Alert Component',
    });

    // info
    createSemanticToken({
        original: `base/cyan/${reqMode}/3`,
        alias: `alert-info-background`,
        description: 'Background color for info Alert Component',
    });
    createSemanticToken({
        original: `base/cyan/${reqMode}/6`,
        alias: `alert-info-border`,
        description: 'Border color for info Alert Component',
    });
    createSemanticToken({
        original: `base/cyan/${reqMode}/9`,
        alias: `alert-info-highlight`,
        description: 'Icon color for info Alert Component',
    });
    createSemanticToken({
        original: `base/cyan/${reqMode}/12`,
        alias: `alert-info-primary-text`,
        description: 'Primary text color for info Alert Component',
    });
    createSemanticToken({
        original: `base/cyan/${reqMode}/11`,
        alias: `alert-info-secondary-text`,
        description: 'Secondary text color for info Alert Component',
    });
    createSemanticToken({
        original: `base/cyan/${reqMode}/10`,
        alias: `alert-info-tertiary-text`,
        description: 'Tertiary text color for info Alert Component',
    });
    // danger
    createSemanticToken({
        original: `base/red/${reqMode}/3`,
        alias: `alert-danger-background`,
        description: 'Background color for danger Alert Component',
    });
    createSemanticToken({
        original: `base/red/${reqMode}/6`,
        alias: `alert-danger-border`,
        description: 'Border color for danger Alert Component',
    });
    createSemanticToken({
        original: `base/red/${reqMode}/9`,
        alias: `alert-danger-highlight`,
        description: 'Icon color for danger Alert Component',
    });
    createSemanticToken({
        original: `base/red/${reqMode}/12`,
        alias: `alert-danger-primary-text`,
        description: 'Primary text color for danger Alert Component',
    });
    createSemanticToken({
        original: `base/red/${reqMode}/11`,
        alias: `alert-danger-secondary-text`,
        description: 'Secondary text color for danger Alert Component',
    });
    createSemanticToken({
        original: `base/red/${reqMode}/10`,
        alias: `alert-danger-tertiary-text`,
        description: 'Tertiary text color for danger Alert Component',
    });
    // warning
    createSemanticToken({
        original: `base/amber/${reqMode}/3`,
        alias: `alert-warning-background`,
        description: 'Background color for warning Alert Component',
    });
    createSemanticToken({
        original: `base/amber/${reqMode}/6`,
        alias: `alert-warning-border`,
        description: 'Border color for warning Alert Component',
    });
    createSemanticToken({
        original: `base/amber/${reqMode}/9`,
        alias: `alert-warning-highlight`,
        description: 'Icon color for warning Alert Component',
    });
    createSemanticToken({
        original: `base/amber/${reqMode}/12`,
        alias: `alert-warning-primary-text`,
        description: 'Primary text color for warning Alert Component',
    });
    createSemanticToken({
        original: `base/amber/${reqMode}/11`,
        alias: `alert-warning-secondary-text`,
        description: 'Secondary text color for warning Alert Component',
    });
    createSemanticToken({
        original: `base/amber/${reqMode}/10`,
        alias: `alert-warning-tertiary-text`,
        description: 'Tertiary text color for warning Alert Component',
    });
    // success
    createSemanticToken({
        original: `base/green/${reqMode}/3`,
        alias: `alert-success-background`,
        description: 'Background color for success Alert Component',
    });
    createSemanticToken({
        original: `base/green/${reqMode}/6`,
        alias: `alert-success-border`,
        description: 'Border color for success Alert Component',
    });
    createSemanticToken({
        original: `base/green/${reqMode}/9`,
        alias: `alert-success-highlight`,
        description: 'Icon color for success Alert Component',
    });
    createSemanticToken({
        original: `base/green/${reqMode}/12`,
        alias: `alert-success-primary-text`,
        description: 'Primary text color for success Alert Component',
    });
    createSemanticToken({
        original: `base/green/${reqMode}/11`,
        alias: `alert-success-secondary-text`,
        description: 'Secondary text color for success Alert Component',
    });
    createSemanticToken({
        original: `base/green/${reqMode}/10`,
        alias: `alert-success-tertiary-text`,
        description: 'Tertiary text color for success Alert Component',
    });

    // Application
    // -----------------

    createSemanticToken({
        original: `${baseColor}/${reqMode}/1`,
        alias: `application-background-base`,
        description: 'Background color for application',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/2`,
        alias: `application-background-subtle`,
        description: 'Secondary background color for application',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/12`,
        alias: `application-primary-text`,
        description: 'Primary text color application',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/11`,
        alias: `application-secondary-text`,
        description: 'Secondary text color application',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/10`,
        alias: `application-tertiary-text`,
        description: 'Tertiary text color application',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/1`,
        alias: `application-primary-text-inverse`,
        description: 'Inverse Primary text color application',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/3`,
        alias: `application-secondary-text-inverse`,
        description: 'Inverse Secondary text color application',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/6`,
        alias: `application-tertiary-text-inverse`,
        description: 'Inverse Tertiary text color application',
    });

    // Deprecated
    createSemanticToken({
        original: `${baseColor}/${reqMode}/9`,
        alias: `application-brand-primary`,
        description: 'Primary application product color',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/6`,
        alias: `application-brand-secondary`,
        description: 'Secondary application product color',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/3`,
        alias: `application-brand-tertiary`,
        description: 'Tertiary application product color',
    });

    // Avatar
    // -----------------
    createSemanticToken({
        original: `${baseColor}/${reqMode}/3`,
        alias: `avatar-background`,
        description: 'Background color for avatar component',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/6`,
        alias: `avatar-border`,
        description: 'Border color for avatar component',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/11`,
        alias: `avatar-text`,
        description: 'Text and Icon color for avatar component',
    });

    // Button Default
    // -----------------
    if (reqMode == 'light') {
        createSemanticToken({
            original: `base/white`,
            alias: `button-default-background`,
            description: 'Background color for default button',
        });
    }
    if (reqMode == 'dark') {
        createSemanticToken({
            original: `${baseColor}/${reqMode}/1`,
            alias: `button-default-background`,
            description: 'Background color for default button',
        });
    }

    createSemanticToken({
        original: `${baseColor}/${reqMode}/7`,
        alias: `button-default-border`,
        description: 'Border color for default button',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/11`,
        alias: `button-default-text`,
        description: 'Label color for default button',
    });
    // hover
    createSemanticToken({
        original: `${baseColor}/${reqMode}/1`,
        alias: `button-default-hover-background`,
        description: 'Hover background color for default button',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/8`,
        alias: `button-default-hover-border`,
        description: 'Hover border color for default button',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/12`,
        alias: `button-default-hover-text`,
        description: 'Hover label color for default button',
    });
    // focus
    createSemanticToken({
        original: `${baseColor}/${reqMode}/2`,
        alias: `button-default-focus-background`,
        description: 'Focus background color for default button',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/8`,
        alias: `button-default-focus-border`,
        description: 'Focus border color for default button',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/12`,
        alias: `button-default-focus-text`,
        description: 'Focus text color for default button',
    });
    // active
    createSemanticToken({
        original: `${baseColor}/${reqMode}/2`,
        alias: `button-default-active-background`,
        description: 'Active background color for default button',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/8`,
        alias: `button-default-active-border`,
        description: 'Active border color for default button',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/12`,
        alias: `button-default-active-text`,
        description: 'Active label color for default button',
    });

    // Button Primary
    // -----------------
    createSemanticToken({
        original: `${baseColor}/${reqMode}/9`,
        alias: `button-primary-background`,
        description: 'Background color for primary button',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/9`,
        alias: `button-primary-border`,
        description: 'Border color for primary button',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/1`,
        alias: `button-primary-text`,
        description: 'Label color for primary button',
    });
    // hover
    createSemanticToken({
        original: `${baseColor}/${reqMode}/10`,
        alias: `button-primary-hover-background`,
        description: 'Hover background color for primary button',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/10`,
        alias: `button-primary-hover-border`,
        description: 'Hover border color for primary button',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/1`,
        alias: `button-primary-hover-text`,
        description: 'Hover label color for primary button',
    });
    // focus
    createSemanticToken({
        original: `${baseColor}/${reqMode}/10`,
        alias: `button-primary-focus-background`,
        description: 'Focus background color for primary button',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/10`,
        alias: `button-primary-focus-border`,
        description: 'Focus border color for primary button',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/1`,
        alias: `button-primary-focus-text`,
        description: 'Focus label color for primary button',
    });

    // Button Danger
    // -----------------
    createSemanticToken({
        original: `base/red/${reqMode}/9`,
        alias: `button-danger-background`,
        description: 'Background color for danger button',
    });
    createSemanticToken({
        original: `base/red/${reqMode}/9`,
        alias: `button-danger-border`,
        description: 'Border color for danger button',
    });
    createSemanticToken({
        original: `base/red/${reqMode}/1`,
        alias: `button-danger-text`,
        description: 'Label color for danger button',
    });
    // hover
    createSemanticToken({
        original: `base/red/${reqMode}/10`,
        alias: `button-danger-hover-background`,
        description: 'Hover background color for danger button',
    });
    createSemanticToken({
        original: `base/red/${reqMode}/10`,
        alias: `button-danger-hover-border`,
        description: 'Hover border color for danger button',
    });
    createSemanticToken({
        original: `base/red/${reqMode}/1`,
        alias: `button-danger-hover-text`,
        description: 'Hover label color for danger button',
    });
    // focus
    createSemanticToken({
        original: `base/red/${reqMode}/10`,
        alias: `button-danger-focus-background`,
        description: 'Focus background color for danger button',
    });
    createSemanticToken({
        original: `base/red/${reqMode}/10`,
        alias: `button-danger-focus-border`,
        description: 'Focus border color for danger button',
    });
    createSemanticToken({
        original: `base/red/${reqMode}/1`,
        alias: `button-danger-focus-text`,
        description: 'Focus label color for danger button',
    });

    // Button Warning
    // -----------------
    createSemanticToken({
        original: `base/amber/${reqMode}/9`,
        alias: `button-warning-background`,
        description: 'Background color for warning button',
    });
    createSemanticToken({
        original: `base/amber/${reqMode}/9`,
        alias: `button-warning-border`,
        description: 'Border color for warning button',
    });
    createSemanticToken({
        original: `base/amber/${reqMode}/1`,
        alias: `button-warning-text`,
        description: 'Label color for warning button',
    });
    // hover
    createSemanticToken({
        original: `base/amber/${reqMode}/10`,
        alias: `button-warning-hover-background`,
        description: 'Hover background color for warning button',
    });
    createSemanticToken({
        original: `base/amber/${reqMode}/10`,
        alias: `button-warning-hover-border`,
        description: 'Hover border color for warning button',
    });
    createSemanticToken({
        original: `base/amber/${reqMode}/1`,
        alias: `button-warning-hover-text`,
        description: 'Hover label color for warning button',
    });
    // focus
    createSemanticToken({
        original: `base/amber/${reqMode}/10`,
        alias: `button-warning-focus-background`,
        description: 'Focus background color for warning button',
    });
    createSemanticToken({
        original: `base/amber/${reqMode}/10`,
        alias: `button-warning-focus-border`,
        description: 'Focus border color for warning button',
    });
    createSemanticToken({
        original: `base/amber/${reqMode}/1`,
        alias: `button-warning-focus-text`,
        description: 'Focus label color for warning button',
    });

    // Button Disabled
    // Same for every variation of button
    createSemanticToken({
        original: `${baseColor}/${reqMode}/4`,
        alias: `button-disabled-background`,
        description: 'Background color for disabled button',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/4`,
        alias: `button-disabled-border`,
        description: 'Border color for disabled button',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/8`,
        alias: `button-disabled-text`,
        description: 'Label color for disabled button',
    });

    // Common Component
    // -----------------
    if (reqMode == 'light') {
        createSemanticToken({
            original: `brand/spruce`,
            alias: `application-logo-secondary-color`,
            description: 'Used for the application logo. Usually paired with the `application-brand-primary` color',
        });
        createSemanticToken({
            original: `base/white`,
            alias: `component-background`,
            description: 'Base background color for the majority of components',
        });
        createSemanticToken({
            original: `base/gray/light/2`,
            alias: `component-background-subtle`,
            description: 'Secondary component background color',
        });
    }
    if (reqMode == 'dark') {
        createSemanticToken({
            original: `base/white`,
            alias: `application-logo-secondary-color`,
            description: 'Used for the application logo. Usually paired with the `application-brand-primary` color',
        });
        createSemanticToken({
            original: `${baseColor}/dark/1`,
            alias: `component-background`,
            description: 'Base background color for the majority of components',
        });
        createSemanticToken({
            original: `${baseColor}/dark/2`,
            alias: `component-background-subtle`,
            description: 'Secondary component background color',
        });
    }
    createSemanticToken({
        original: `${baseColor}/${reqMode}/6`,
        alias: `component-highlight`,
        description: 'Used for component icons',
    });
    createSemanticToken({
        original: `base/blue/${reqMode}/9`,
        alias: `component-toggle-on`,
        description: 'Used for the active states of Checkboxes, Radios, and Switches',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/1`,
        alias: `component-toggle-off`,
        description: 'Used for the inactive states of Checkboxes, Radios, and Switches',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/7`,
        alias: `component-border`,
        description: 'Base border color for the majority of components',
    });

    // Text
    createSemanticToken({
        original: `${baseColor}/${reqMode}/12`,
        alias: `component-primary-text`,
        description: 'Default text color for components or application copy',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/11`,
        alias: `component-secondary-text`,
        description: 'Secondary text color for components or application copy',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/10`,
        alias: `component-tertiary-text`,
        description: 'Tertiary text color for components or application copy',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/12`,
        alias: `component-text`,
        description: 'Use `component-primary-text` instead',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/8`,
        alias: `component-placeholder-text`,
        description: 'Placeholder text color for inputs',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/1`,
        alias: `component-text-inverse`,
        description: 'Used with components with dark backgrounds',
    });

    // hover
    createSemanticToken({
        original: `${baseColor}/${reqMode}/4`,
        alias: `component-hover-background`,
        description: 'Hover background color for most components',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/11`,
        alias: `component-hover-text`,
        description: 'Hover label color for most components',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/8`,
        alias: `component-hover-border`,
        description: 'Hover border color for most components',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/11`,
        alias: `component-hover-highlight`,
        description: 'Hover icon color for most components',
    });
    // focus
    createSemanticToken({
        original: `${baseColor}/${reqMode}/4`,
        alias: `component-focus-background`,
        description: 'Focus background color for most components',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/12`,
        alias: `component-focus-text`,
        description: 'Focus label color for most components',
    });
    createSemanticToken({
        original: `base/blue/${reqMode}/8`,
        alias: `component-focus-border`,
        description: 'Focus border color for most components',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/12`,
        alias: `component-focus-highlight`,
        description: 'Focus icon color for most components',
    });
    // active
    createSemanticToken({
        original: `${baseColor}/${reqMode}/4`,
        alias: `component-active-background`,
        description: 'Active background color for most components',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/12`,
        alias: `component-active-text`,
        description: 'Active label color for most components',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/8`,
        alias: `component-active-border`,
        description: 'Active border color for most components',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/12`,
        alias: `component-active-highlight`,
        description: 'Active icon color for most components',
    });

    // disabled
    createSemanticToken({
        original: `${baseColor}/${reqMode}/4`,
        alias: `component-disabled-background`,
        description: 'Disabled background color for most components',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/8`,
        alias: `component-disabled-text`,
        description: 'Disabled label color for most components',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/4`,
        alias: `component-disabled-border`,
        description: 'Disabled border color for most components',
    });
    createSemanticToken({
        original: `${baseColor}/${reqMode}/8`,
        alias: `component-disabled-highlight`,
        description: 'Disabled icon color for most components',
    });

    // Filters
    // -----------------
    createSemanticToken({
        original: `base/indigo/${reqMode}/9`,
        alias: `filter-block-background`,
        description: 'Background color for the Filter banner',
    });
    createSemanticToken({
        original: `base/indigo/${reqMode}/1`,
        alias: `filter-block-text-primary`,
        description: 'Primary color for the Filter banner',
    });
    createSemanticToken({
        original: `base/indigo/${reqMode}/3`,
        alias: `filter-block-text-secondary`,
        description: 'Secondary color for the Filter banner',
    });
    createSemanticToken({
        original: `base/indigo/${reqMode}/6`,
        alias: `filter-block-text-tertiary`,
        description: 'Tertiary color for the Filter banner',
    });
    createSemanticToken({
        original: `base/indigo/${reqMode}/1`,
        alias: `filter-block-tag-background`,
        description: 'Filter tag background color (light)',
    });
    createSemanticToken({
        original: `base/indigo/${reqMode}/12`,
        alias: `filter-block-tag-label`,
        description: 'Filter tag label color',
    });
    createSemanticToken({
        original: `base/indigo/${reqMode}/9`,
        alias: `filter-tag-background`,
        description: 'Filter tag background color (dark)',
    });
    createSemanticToken({
        original: `base/indigo/${reqMode}/1`,
        alias: `filter-tag-label`,
        description: 'Filter tag label color',
    });
    createSemanticToken({
        original: `base/indigo/${reqMode}/6`,
        alias: `filter-tag-icon`,
        description: 'Filter tag icon color',
    });
    createSemanticToken({
        original: `base/indigo/${reqMode}/9`,
        alias: `filter-indication-active`,
        description: 'Active tag background color',
    });
    createSemanticToken({
        original: `base/indigo/${reqMode}/5`,
        alias: `filter-indication-inactive`,
        description: 'Inactive tag background color',
    });
    createSemanticToken({
        original: `base/indigo/${reqMode}/5`,
        alias: `filter-indication-background`,
        description: 'Filter tag background color',
    });

    // Shared
    // -----------------
    createSemanticToken({
        original: `base/blue/${reqMode}/9`,
        alias: 'shared-info',
        description: 'Used to indicate important information',
    });
    createSemanticToken({
        original: `base/blue/${reqMode}/9`,
        alias: 'shared-link',
        description: 'Used to indicate links',
    });
    createSemanticToken({
        original: `base/blue/${reqMode}/10`,
        alias: 'shared-link-hover',
        description: 'Used to indicate links hover',
    });
    createSemanticToken({
        original: `base/indigo/${reqMode}/9`,
        alias: 'shared-filter',
        description: 'Used to indicate filters',
    });
    createSemanticToken({
        original: `base/indigo/${reqMode}/10`,
        alias: 'shared-filter-hover',
        description: 'Used to indicate filters hover',
    });
    createSemanticToken({
        original: `base/red/${reqMode}/9`,
        alias: 'shared-danger',
        description: 'Used to indicate danger',
    });
    createSemanticToken({
        original: `base/amber/${reqMode}/9`,
        alias: 'shared-warning',
        description: 'Used to indicate warnings',
    });
    createSemanticToken({original: `base/green/${reqMode}/9`, alias: 'shared-success', description: 'Used to success'});

    // Type
    createSemanticToken({
        original: `base/yellow/${reqMode}/3`,
        alias: 'input-edit-background',
        description: 'Input background color when editing',
    });
    createSemanticToken({
        original: `base/yellow/${reqMode}/6`,
        alias: 'typography-highlight',
        description: 'Highlights text to indicate importance',
    });

    [
        {segment: 'site', color: siteColor},
        {segment: 'sponsor', color: sponsorColor},
        {segment: 'admin', color: adminColor},
    ].map(({segment, color}) => {
        createSemanticToken({
            original: `${color}/${reqMode}/9`,
            alias: `application-${segment}-brand-primary`,
            description: `${segment} primary application color`,
        });
        createSemanticToken({
            original: `${color}/${reqMode}/6`,
            alias: `application-${segment}-brand-secondary`,
            description: `${segment} secondary application color`,
        });
        createSemanticToken({
            original: `${color}/${reqMode}/3`,
            alias: `application-${segment}-brand-tertiary`,
            description: `${segment} tertiary application color`,
        });
        createSemanticToken({
            original: `${color}/${reqMode}/3`,
            alias: `avatar-background-${segment}`,
            description: `${segment} avatar background`,
        });
        createSemanticToken({
            original: `${color}/${reqMode}/6`,
            alias: `avatar-border-${segment}`,
            description: `${segment} avatar border`,
        });
        createSemanticToken({
            original: `${color}/${reqMode}/10`,
            alias: `avatar-text-${segment}`,
            description: `${segment} avatar text / icon`,
        });
        createSemanticToken({
            original: `${color}/${reqMode}/9`,
            alias: `button-primary-${segment}-background`,
            description: `${segment} primary button background`,
        });
        createSemanticToken({
            original: `${color}/${reqMode}/9`,
            alias: `button-primary-${segment}-border`,
            description: `${segment} primary button border`,
        });
        createSemanticToken({
            original: `${color}/${reqMode}/1`,
            alias: `button-primary-${segment}-text`,
            description: `${segment} primary button label`,
        });
        createSemanticToken({
            original: `${color}/${reqMode}/10`,
            alias: `button-primary-hover-${segment}-background`,
            description: `${segment} primary button hover background`,
        });
        createSemanticToken({
            original: `${color}/${reqMode}/10`,
            alias: `button-primary-hover-${segment}-border`,
            description: `${segment} primary button hover border`,
        });
        createSemanticToken({
            original: `${color}/${reqMode}/1`,
            alias: `button-primary-hover-${segment}-text`,
            description: `${segment} primary button hover label`,
        });
        createSemanticToken({
            original: `${color}/${reqMode}/8`,
            alias: `button-primary-focus-${segment}-background`,
            description: `${segment} primary button focus background`,
        });
        createSemanticToken({
            original: `${color}/${reqMode}/8`,
            alias: `button-primary-focus-${segment}-border`,
            description: `${segment} primary button focus border`,
        });
        createSemanticToken({
            original: `${color}/${reqMode}/1`,
            alias: `button-primary-focus-${segment}-text`,
            description: `${segment} primary button focus label`,
        });
    });

    return output;
};

figma.ui.onmessage = (msg) => {
    if (msg.type === 'request-tokens') {
        figma.ui.postMessage({
            type: 'styles-generated',
            message: generateStyleAliases(msg.mode, msg.createLocalStyles, msg.format).join('\r\n'),
        });
    }

    if (msg.type === 'load-base-colors') {
        console.log('😃 Picasso has loaded...');
        msg.colors.map((color) => {
            localPaintStyles.push(color);
        });
    }
};

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
// figma.notify('Done!')
// figma.closePlugin();
