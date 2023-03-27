import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  // 修改图标的颜色(方式一：CSS的写法)
  /* color: var(--primary-color); */
  // 修改图标的颜色(方式二：styleComponents的主题写法)
  color: ${props => props.theme.isAlpha ? '#fff' : props.theme.color.primaryColor};

  .logo {
    cursor: pointer;
    margin-left: 24px;
  }
`