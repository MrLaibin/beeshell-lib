import { StyleSheet } from 'react-native'
import variables from '../../common/styles/variables'

const defaultWrapper = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  paddingHorizontal: variables.mtdHSpacingM,
  paddingVertical: variables.mtdVSpacingS,

  borderWidth: StyleSheet.hairlineWidth,
  borderColor: variables.mtdGray,
  borderRadius: variables.mtdRadiusXS,

  backgroundColor: variables.mtdFillBody,
}

const defaultText = {
  fontSize: variables.mtdFontSizeS,
  color: variables.mtdGrayDarker,
}

const primaryWrapper = {
  ...defaultWrapper,
  borderColor: variables.mtdBrandPrimary,
  backgroundColor: variables.mtdBrandPrimary,
}

const primaryText = {
  ...defaultText,
  color: variables.mtdFillBase
}

const dangerWrapper = {
  ...defaultWrapper,
  borderColor: variables.mtdBrandDanger,
  backgroundColor: variables.mtdBrandDanger,
}
const dangerText = {
  ...defaultText,
  color: variables.mtdFillBase
}

const warningWrapper = {
  ...defaultWrapper,
  borderColor: variables.mtdBrandWarning,
  backgroundColor: variables.mtdBrandWarning,
}
const warningText = {
  ...defaultText,
  color: variables.mtdFillBase
}

const successWrapper = {
  ...defaultWrapper,
  borderColor: variables.mtdBrandSuccess,
  backgroundColor: variables.mtdBrandSuccess,
}
const successText = {
  ...defaultText,
  color: variables.mtdFillBase
}


const infoWrapper = {
  ...defaultWrapper,
  borderColor: variables.mtdBrandInfo,
  backgroundColor: variables.mtdBrandInfo,
}

const infoText = {
  ...defaultText,
  color: variables.mtdFillBase
}

export default StyleSheet.create({
  defaultWrapper,
  defaultText,

  primaryWrapper,
  primaryText,

  dangerWrapper,
  dangerText,

  successWrapper,
  successText,

  warningWrapper,
  warningText,

  infoWrapper,
  infoText
} as any)
