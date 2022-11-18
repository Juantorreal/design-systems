import { colors, fonts, fontSizes, fontWeights, lineHeights, radii, space } from "@juan-ui/tokens";
import { createStitches } from "@stitches/react";


export const {styled, css, globalCss,keyframes, getCssText,theme, createTheme,config} = createStitches({
    themeMap:{
        ...defaultThemeMap,
        height: 'space',
        width: 'space',

    },
    theme: {
        colors: colors,
        fontSizes: fontSizes,
        fontWeights: fontWeights,
        fonts: fonts,
        lineHeights: lineHeights,
        radii: radii,
        space: space,
    }
})