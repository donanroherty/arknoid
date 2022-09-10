export type BlockColor = {
  light: string
  default: string
  dark: string
  highlight: string
}

interface Colors {
  green: BlockColor
  blue: BlockColor
  yellow: BlockColor
  orange: BlockColor
  red: BlockColor
  purple: BlockColor
  black: BlockColor
  white: BlockColor
  pink: BlockColor
  gold: BlockColor
  silver: BlockColor
  bronze: BlockColor
  skin: BlockColor
}

const colors: Colors = {
  green: {
    light: "#78EF7D",
    default: "#0FA315",
    dark: "#014E03",
    highlight: "#C2FECA",
  },
  blue: {
    light: "#82B0EB",
    default: "#3586F4",
    dark: "#000D74",
    highlight: "#9BE4FC",
  },
  yellow: {
    light: "#FFF76A",
    default: "#FBE50F",
    dark: "#815807",
    highlight: "#FFFAC7",
  },
  orange: {
    light: "#FFC750",
    default: "#F07A01",
    dark: "#A94C03",
    highlight: "#FBE898",
  },
  red: {
    light: "#FF766A",
    default: "#F42402",
    dark: "#750A03",
    highlight: "#FCC3C8",
  },
  purple: {
    light: "#D99BE6",
    default: "#9141B2",
    dark: "#5B1270",
    highlight: "#EFC6F2",
  },
  black: {
    light: "#B0BEC6",
    default: "#455155",
    dark: "#2C363A",
    highlight: "#C2CDD3",
  },
  white: {
    light: "#CFD8EF",
    default: "#A9AAC6",
    dark: "#7375A0",
    highlight: "#E5E8FA",
  },
  pink: {
    light: "#FD86BF",
    default: "#FF1F97",
    dark: "#971049",
    highlight: "#FFDFF3",
  },
  gold: {
    light: "#EAC602",
    default: "#F2E939",
    dark: "#824100",
    highlight: "#F2F6BF",
  },
  silver: {
    light: "#999BB5",
    default: "#B6BAC3",
    dark: "#59597F",
    highlight: "#FFFFF8",
  },
  bronze: {
    light: "#FEF1A1",
    default: "#FFB87C",
    dark: "#CF7745",
    highlight: "#B2612C",
  },
  skin: {
    light: "#F0A36D",
    default: "#A45014",
    dark: "#662200",
    highlight: "#EFD9CA",
  },
}

export { colors }
