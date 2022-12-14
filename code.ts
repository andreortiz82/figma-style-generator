// This script assumes you have the Radix Color Set in your local styles.

// Query all local styles
const localPaintStyles = figma.getLocalPaintStyles()

// Create themes array for the products you want to theme
const themes = [
  { product: 'Product A', mode: 'light', base: 'Accessible/olive', primary: 'Accessible/green' },
  { product: 'Product A', mode: 'dark', base: 'Accessible/olive', primary: 'Accessible/green' },
  { product: 'Product B', mode: 'light', base: 'Accessible/sage', primary: 'Accessible/teal' },
  { product: 'Product B', mode: 'dark', base: 'Accessible/sage', primary: 'Accessible/teal' },
  { product: 'Product C', mode: 'light', base: 'Accessible/slate', primary: 'Accessible/cyan' },
  { product: 'Product C', mode: 'dark', base: 'Accessible/slate', primary: 'Accessible/cyan' }
]

// Creates common styles for all themes:
// Links are blue, Danger is red, Success is green, etc...
// The end result will be:
// -----
// Themes/shared/light/link
// Themes/shared/light/danger
// Themes/shared/dark/link
// Themes/shared/dark/danger
// etc...
const createCommonStyle = (arg: any) => {
  const { original, alias, path } = arg
  // In the localPaintStyles array, find the matching color by name
  const officalStyle = localPaintStyles.filter(item => (item.name === `Accessible/${original}`))

  // Create a new style, name it, and apply the color from `officalStyle`
  // You've just aliased your color!
  // #FF0099 = magenta
  // magenta = tag-background
  const newStyle = figma.createPaintStyle()
  newStyle.name = `Themes/${path}/${alias}`
  newStyle.paints = officalStyle[0].paints
}

// Creates theme styles for all themes - very similar to `createCommonStyle`.
// TODO: refactor
// The end result will be:
// -----
// Themes/Product A/light/application-background-base
// Themes/Product B/light/application-background-base
// Themes/Product A/dark/component-border
// Themes/Product B/dark/component-border
// etc...
const createThemeStyle = (theme: any, { original, alias }: any) => {
  const { product, mode, base, primary } = theme
  const officalStyle = localPaintStyles.filter(item => (item.name === original))
  const newStyle = figma.createPaintStyle()
  newStyle.name = `Themes/${product}/${mode}/${alias}`
  newStyle.paints = officalStyle[0].paints
  console.log(`${newStyle.name} =`, original)
}

// Creates common styles for light and dark themes
['light', 'dark'].map(mode => {
  createCommonStyle({ original: `blue/${mode}/9`, alias: 'link', path: `shared/${mode}` })
  createCommonStyle({ original: `blue/${mode}/10`, alias: 'link-hover', path: `shared/${mode}` })
  createCommonStyle({ original: `indigo/${mode}/9`, alias: 'filter', path: `shared/${mode}` })
  createCommonStyle({ original: `indigo/${mode}/10`, alias: 'filter-hover', path: `shared/${mode}` })
  createCommonStyle({ original: `red/${mode}/9`, alias: 'danger', path: `shared/${mode}` })
  createCommonStyle({ original: `amber/${mode}/9`, alias: 'warning', path: `shared/${mode}` })
  createCommonStyle({ original: `green/${mode}/9`, alias: 'success', path: `shared/${mode}` })
})

// Creates semantic styles for light and dark themes
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

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.notify('Done!')
figma.closePlugin();
