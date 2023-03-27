import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  overflow: hidden;  

  .i-content {
    display: flex;
    position: relative; // 这个必须定位
    transition: transform 200ms ease;

    > * {
      flex-shrink: 0;
    }
  }
`