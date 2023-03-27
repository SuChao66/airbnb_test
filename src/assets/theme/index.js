// 白色主题
const lightTheme = {
  color: {
    primaryColor: "#FF385C",
    secondaryColor: "#00848A",
    textColor: "#484848",
    textColorSecondary: "#717171"
  },
  fontSize: {
    small: "12px",
    normal: "14px",
    large: "16px"
  },
  // 动画混入
  mixin: {
    boxShadow: `
      transition: box-shadow 0.2s ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,0.18);
      }
    `
  }
}

// 黑夜主题
const darkTheme = {}

export { lightTheme, darkTheme }
