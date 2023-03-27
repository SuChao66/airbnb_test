import useScrollPosition from "@/hooks/useScrollPosition";
import classNames from "classnames";
import React, { memo, useState, useRef } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
// 导入组件
import HeaderCenter from "./c-cpns/header-center";
import HeaderLeft from "./c-cpns/header-left";
import HeaderRight from "./c-cpns/header-right";
// 导入样式
import { HeaderWrapper, SearchAreaWrapper } from "./style";

const AppHeader = memo(() => {
  // 定义组件内部的状态
  const [isSearch, setIsSearch] = useState(false);

  // 从redux中获取数据
  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );
  const { isFixed, topAlpha } = headerConfig;

  // 监听滚动
  const { scrollY } = useScrollPosition();
  // 记录前一个滚动的位置
  const prevY = useRef(0);
  // 正常情况下，时刻记录滚动的距离
  if (!isSearch) prevY.current = scrollY;
  // 弹出搜索功能的情况下，滚动的距离大于之前记录的距离的30，就设置搜索框为false
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) {
    setIsSearch(false);
  }

  // 透明度的逻辑
  const isAlpha = topAlpha && scrollY === 0;

  return (
    // isAlpha需要传递到子组件中去，所以需要借助ThemeProvider
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderCenter
              isSearch={isAlpha || isSearch}
              searchBarClick={(e) => setIsSearch(true)}
            />
            <HeaderRight />
          </div>
          <SearchAreaWrapper isSearch={isAlpha || isSearch} />
        </div>
        {/* 蒙版 */}
        {isSearch && (
          <div className="cover" onClick={(e) => setIsSearch(false)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default AppHeader;
