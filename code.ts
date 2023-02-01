// This script plugin can only be used on the Web Foundations 2.0 file.
// Query all local styles
const localPaintStyles = figma.getLocalPaintStyles()

const nukeDesscriptions = () => {
  localPaintStyles.map(color => {
    color.description = ''
  })
}


const generateStyleAliases = () => {
  const output = []

  const extractDescription = (style, newAlias) => {
    let aliases = style.description.split(/[\n,]/)
    aliases.push(newAlias)
    let uniqueAliases = [...new Set(aliases.filter(x => x))]
    // style.description = uniqueAliases.toString();
    // console.log(uniqueAliases)
    // `${newAlias}:`
    let newObject = []
    // let newObject = {}
    // newObject[`--${newAlias}`] = `var(--${style.name.replace('Accessible/', '').replace('/', '-').replace('/', '-')})`
    // newObject[`--${newAlias}`] = `$${newAlias}`
    output.push(newAlias)
  }

  // Creates common styles for light and dark themes
  const createCommonStyle = (arg: any) => {
    const { original, alias } = arg
    const officalStyle = localPaintStyles.filter(item => (item.name === original))
    // extractDescription(officalStyle[0], `shared-${alias}`)
  }

  ['light', 'dark'].map(mode => {
    createCommonStyle({ original: `Accessible/blue/${mode}/9`, alias: 'link' })
    createCommonStyle({ original: `Accessible/blue/${mode}/10`, alias: 'link-hover' })
    createCommonStyle({ original: `Accessible/indigo/${mode}/8`, alias: 'filter' })
    createCommonStyle({ original: `Accessible/indigo/${mode}/9`, alias: 'filter-hover' })
    createCommonStyle({ original: `Accessible/red/${mode}/9`, alias: 'danger' })
    createCommonStyle({ original: `Accessible/amber/${mode}/9`, alias: 'warning' })
    createCommonStyle({ original: `Accessible/green/${mode}/9`, alias: 'success' })
  })

  // Create themes array for the products you want to theme
  const themes = [
    // { product: 'site', mode: 'light', base: 'Accessible/olive', primary: 'Accessible/green' },
    { product: 'site', mode: 'dark', base: 'Accessible/olive', primary: 'Accessible/green' },
    // { product: 'sponsor', mode: 'light', base: 'Accessible/sage', primary: 'Accessible/teal' },
    // { product: 'sponsor', mode: 'dark', base: 'Accessible/sage', primary: 'Accessible/teal' },
    // { product: 'admin', mode: 'light', base: 'Accessible/slate', primary: 'Accessible/cyan' },
    // { product: 'admin', mode: 'dark', base: 'Accessible/slate', primary: 'Accessible/cyan' }
  ]

  const createThemeStyle = (theme: any, { original, alias }: any) => {
    const { product, mode, base, primary } = theme
    const officalStyle = localPaintStyles.filter(item => (item.name === original))
    // officalStyle[0].description = `ost-${product}-${mode}-${alias}`
    // extractDescription(officalStyle[0], `${alias}`)
  }

  themes.map(theme => {
    const { product, mode, base, primary } = theme

    // Application (Global)
    // -----------------
    createThemeStyle(theme, { original: `${base}/${mode}/1`, alias: `application-background-base` })
    createThemeStyle(theme, { original: `${base}/${mode}/2`, alias: `application-background-subtle` })
    createThemeStyle(theme, { original: `${base}/${mode}/12`, alias: `application-primary-text` })
    createThemeStyle(theme, { original: `${base}/${mode}/11`, alias: `application-secondary-text` })
    createThemeStyle(theme, { original: `${base}/${mode}/10`, alias: `application-placeholder-text` })
    createThemeStyle(theme, { original: `${primary}/${mode}/9`, alias: `application-primary` })
    createThemeStyle(theme, { original: `${primary}/${mode}/10`, alias: `application-primary-hover` })

    // Common Component
    // -----------------
    createThemeStyle(theme, { original: `${base}/${mode}/1`, alias: `component-background` })
    createThemeStyle(theme, { original: `${base}/${mode}/7`, alias: `component-border` })
    createThemeStyle(theme, { original: `${base}/${mode}/12`, alias: `component-text` })
    createThemeStyle(theme, { original: `${base}/${mode}/5`, alias: `component-highlight` })
    // hover
    createThemeStyle(theme, { original: `${base}/${mode}/2`, alias: `component-hover-background` })
    createThemeStyle(theme, { original: `${base}/${mode}/8`, alias: `component-hover-border` })
    createThemeStyle(theme, { original: `${base}/${mode}/12`, alias: `component-hover-text` })
    createThemeStyle(theme, { original: `${base}/${mode}/5`, alias: `component-hover-highlight` })
    // focus
    createThemeStyle(theme, { original: `${base}/${mode}/1`, alias: `component-focus-background` })
    createThemeStyle(theme, { original: `Accessible/blue/${mode}/7`, alias: `component-focus-border` })
    createThemeStyle(theme, { original: `${base}/${mode}/12`, alias: `component-focus-text` })
    createThemeStyle(theme, { original: `${base}/${mode}/6`, alias: `component-focus-highlight` })
    // disabled
    createThemeStyle(theme, { original: `${base}/${mode}/3`, alias: `component-disabled-background` })
    createThemeStyle(theme, { original: `${base}/${mode}/6`, alias: `component-disabled-border` })
    createThemeStyle(theme, { original: `${base}/${mode}/10`, alias: `component-disabled-text` })
    createThemeStyle(theme, { original: `${base}/${mode}/5`, alias: `component-disabled-highlight` })

    // Button Default
    // -----------------
    createThemeStyle(theme, { original: `${base}/${mode}/1`, alias: `button-default-background` })
    createThemeStyle(theme, { original: `${base}/${mode}/7`, alias: `button-default-border` })
    createThemeStyle(theme, { original: `${base}/${mode}/12`, alias: `button-default-text` })
    // hover
    createThemeStyle(theme, { original: `${base}/${mode}/1`, alias: `button-default-hover-background` })
    createThemeStyle(theme, { original: `${base}/${mode}/8`, alias: `button-default-hover-border` })
    createThemeStyle(theme, { original: `${base}/${mode}/12`, alias: `button-default-hover-text` })
    // focus
    createThemeStyle(theme, { original: `${base}/${mode}/2`, alias: `button-default-focus-background` })
    createThemeStyle(theme, { original: `${base}/${mode}/7`, alias: `button-default-focus-border` })
    createThemeStyle(theme, { original: `${base}/${mode}/11`, alias: `button-default-focus-text` })

    // Button Primary
    // -----------------
    createThemeStyle(theme, { original: `${primary}/${mode}/9`, alias: `button-primary-background` })
    createThemeStyle(theme, { original: `${primary}/${mode}/9`, alias: `button-primary-border` })
    createThemeStyle(theme, { original: `${primary}/${mode}/1`, alias: `button-primary-text` })
    // hover
    createThemeStyle(theme, { original: `${primary}/${mode}/10`, alias: `button-primary-hover-background` })
    createThemeStyle(theme, { original: `${primary}/${mode}/10`, alias: `button-primary-hover-border` })
    createThemeStyle(theme, { original: `${primary}/${mode}/1`, alias: `button-primary-hover-text` })
    // focus
    createThemeStyle(theme, { original: `${primary}/${mode}/8`, alias: `button-primary-focus-background` })
    createThemeStyle(theme, { original: `${primary}/${mode}/8`, alias: `button-primary-focus-border` })
    createThemeStyle(theme, { original: `${primary}/${mode}/1`, alias: `button-primary-focus-text` })

    // Button Danger
    // -----------------
    createThemeStyle(theme, { original: `Accessible/red/${mode}/9`, alias: `button-danger-background` })
    createThemeStyle(theme, { original: `Accessible/red/${mode}/9`, alias: `button-danger-border` })
    createThemeStyle(theme, { original: `Accessible/red/${mode}/1`, alias: `button-danger-text` })
    // hover
    createThemeStyle(theme, { original: `Accessible/red/${mode}/10`, alias: `button-danger-hover-background` })
    createThemeStyle(theme, { original: `Accessible/red/${mode}/10`, alias: `button-danger-hover-border` })
    createThemeStyle(theme, { original: `Accessible/red/${mode}/1`, alias: `button-danger-hover-text` })
    // focus
    createThemeStyle(theme, { original: `Accessible/red/${mode}/8`, alias: `button-danger-focus-background` })
    createThemeStyle(theme, { original: `Accessible/red/${mode}/8`, alias: `button-danger-focus-border` })
    createThemeStyle(theme, { original: `Accessible/red/${mode}/1`, alias: `button-danger-focus-text` })

    // -----------------
    // disabled (Same for every variation of button)
    createThemeStyle(theme, { original: `${base}/${mode}/3`, alias: `button-disabled-background` })
    createThemeStyle(theme, { original: `${base}/${mode}/6`, alias: `button-disabled-border` })
    createThemeStyle(theme, { original: `${base}/${mode}/10`, alias: `button-disabled-text` })

    // Alerts
    // -----------------
    // info
    createThemeStyle(theme, { original: `Accessible/blue/${mode}/3`, alias: `alert-info-background` })
    createThemeStyle(theme, { original: `Accessible/blue/${mode}/7`, alias: `alert-info-border` })
    createThemeStyle(theme, { original: `Accessible/blue/${mode}/9`, alias: `alert-info-highlight` })
    createThemeStyle(theme, { original: `Accessible/blue/${mode}/12`, alias: `alert-info-primary-text` })
    createThemeStyle(theme, { original: `Accessible/blue/${mode}/11`, alias: `alert-info-secondary-text` })
    createThemeStyle(theme, { original: `Accessible/blue/${mode}/10`, alias: `alert-info-placeholder-text` })
    // danger
    createThemeStyle(theme, { original: `Accessible/red/${mode}/3`, alias: `alert-danger-background` })
    createThemeStyle(theme, { original: `Accessible/red/${mode}/7`, alias: `alert-danger-border` })
    createThemeStyle(theme, { original: `Accessible/red/${mode}/9`, alias: `alert-danger-highlight` })
    createThemeStyle(theme, { original: `Accessible/red/${mode}/12`, alias: `alert-danger-primary-text` })
    createThemeStyle(theme, { original: `Accessible/red/${mode}/11`, alias: `alert-danger-secondary-text` })
    createThemeStyle(theme, { original: `Accessible/red/${mode}/10`, alias: `alert-danger-placeholder-text` })
    // warning
    createThemeStyle(theme, { original: `Accessible/amber/${mode}/3`, alias: `alert-warning-background` })
    createThemeStyle(theme, { original: `Accessible/amber/${mode}/7`, alias: `alert-warning-border` })
    createThemeStyle(theme, { original: `Accessible/amber/${mode}/9`, alias: `alert-warning-highlight` })
    createThemeStyle(theme, { original: `Accessible/amber/${mode}/12`, alias: `alert-warning-primary-text` })
    createThemeStyle(theme, { original: `Accessible/amber/${mode}/11`, alias: `alert-warning-secondary-text` })
    createThemeStyle(theme, { original: `Accessible/amber/${mode}/10`, alias: `alert-warning-placeholder-text` })
    // success
    createThemeStyle(theme, { original: `Accessible/grass/${mode}/3`, alias: `alert-success-background` })
    createThemeStyle(theme, { original: `Accessible/grass/${mode}/7`, alias: `alert-success-border` })
    createThemeStyle(theme, { original: `Accessible/grass/${mode}/9`, alias: `alert-success-highlight` })
    createThemeStyle(theme, { original: `Accessible/grass/${mode}/12`, alias: `alert-success-primary-text` })
    createThemeStyle(theme, { original: `Accessible/grass/${mode}/11`, alias: `alert-success-secondary-text` })
    createThemeStyle(theme, { original: `Accessible/grass/${mode}/10`, alias: `alert-success-placeholder-text` })

    // Avatar
    // -----------------
    createThemeStyle(theme, { original: `${primary}/${mode}/4`, alias: `avatar-background` })
    createThemeStyle(theme, { original: `${primary}/${mode}/4`, alias: `avatar-border` })
    createThemeStyle(theme, { original: `${primary}/${mode}/9`, alias: `avatar-text` })

  })

  return output
}

// nukeDesscriptions()
console.log(JSON.stringify(generateStyleAliases(), null, 2))

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.notify('Done!')
figma.closePlugin();
