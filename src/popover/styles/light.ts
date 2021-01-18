import { commonLight } from '../../_styles/new-common'
import type { ThemeCommonVars } from '../../_styles/new-common'
import type { Theme } from '../../_mixins/use-theme'
import commonVariables from './_common'

const self = (vars: ThemeCommonVars) => {
  const { boxShadow2, popoverColor, textColor2, borderRadius, fontSize } = vars
  return {
    ...commonVariables,
    fontSize,
    borderRadius,
    color: popoverColor,
    textColor: textColor2,
    boxShadow: boxShadow2
  }
}

export type PopoverThemeVars = ReturnType<typeof self>

const popoverLight: Theme<PopoverThemeVars> = {
  name: 'Popover',
  common: commonLight,
  self
}

export type PopoverTheme = typeof popoverLight
export default popoverLight