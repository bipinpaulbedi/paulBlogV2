import Typography from "typography"

const typography = new Typography({
  title: "Paul Blog",
  baseFontSize: "16px",
  baseLineHeight: 1.75,
  scaleRatio: 5 / 2,
  googleFonts: [
    {
      name: "Lora",
      styles: ["900","400","700"],
    },
    {
        name: "EB Garamond",
        styles: ["900","400","700"],
      },
  ],
  headerFontFamily: ["Lora", "Georgia", "Palatino", "Helvetica"],
  bodyFontFamily: ["EB Garamond", "Georgia", "Palatino", "Helvetica"],
  bodyColor: '#333',
  headerWeight: 900,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    code: {
      color: '#bbb',
    },
    blockquote: {
      ...scale(1 / 5),
      color: "#bbb",
      fontStyle: "italic",
      paddingLeft: rhythm(13 / 16),
      marginLeft: rhythm(-1),
      borderLeft: `${rhythm(3 / 16)} solid #bbb`,
    },
    "blockquote > :last-child": {
      marginBottom: 0,
    },
    "blockquote cite": {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    "blockquote cite:before": {
      content: '"— "',
    },
    ul: {
      listStyle: "disc",
    },
    "ul,ol": {
      marginLeft: 0,
    },
    "h1,h2,h3,h4,h5,h6": {
      marginTop: rhythm(2),
    },
    h4: {
      letterSpacing: "0.140625em",
      textTransform: "uppercase",
    },
    h6: {
      fontStyle: "italic",
    },
    a: {
      color: "#bbb",
      textDecoration: "none",
    },
    "a:hover,a:active": {
      color: '#ff5252',
    },
    "hr":{
      opacity: .4,
      margin: "2em",
    },
    "mark,ins": {
      background: "#007acc",
      color: "white",
      padding: `${rhythm(1 / 16)} ${rhythm(1 / 8)}`,
      textDecoration: "none",
    },
  }),
})

export default typography
