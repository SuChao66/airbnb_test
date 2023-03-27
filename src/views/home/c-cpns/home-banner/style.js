import styled from "styled-components";
// 第一种引入图片的方式
import coverImg from '@/assets/img/cover_01.jpeg'

export const BannerWrapper = styled.div`
  height: 529px;
  /* background: url(${coverImg}) center/cover; */
  /* 第二种引入图片的方式 */
  background: url(${require('@/assets/img/cover_01.jpeg')}) center/cover;
`