

export const themeList = {
    breakPoints: {
        mobile: "481px",
        tablet: "758px",
        desktop: "1281px",
    },
    colors: {

    }
}

export const mobile = `screen and (max-width: ${themeList.breakPoints.mobile})`

export const tablet = `screen and (max-width: ${themeList.breakPoints.tablet})`

export const desktop = `screen and (max-width: ${themeList.breakPoints.desktop})`

export const colors = (select) => {
  return themeList.colors[select];
};