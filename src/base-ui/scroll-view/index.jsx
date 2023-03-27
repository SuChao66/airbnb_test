import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import React, { memo, useEffect, useState } from "react";
import { useRef } from "react";
import { ViewWrapper } from "./style";

const ScrollView = memo((props) => {
  // 定义内部的状态
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  // 每一个item的下标
  const [posIndex, setPosIndex] = useState(0);
  const totalDistanceRef = useRef();

  // 组件渲染完毕的时候，判断是否显示右边的按钮
  const scrollContentRef = useRef();
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; // 一共可以滚动的距离
    const clientWidth = scrollContentRef.current.clientWidth; // 本身占据的宽度
    const totalDistance = scrollWidth - clientWidth;
    // 保留总的距离
    totalDistanceRef.current = totalDistance;
    setShowRight(totalDistance > 0);
  }, [props.children]);

  // 事件处理
  function controlClickHandle(isRight) {
    // 点击切换的时候，item的下标进行+1
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    // 获取当前item的DOM元素
    const newEl = scrollContentRef.current.children[newIndex];
    // 计算当前item距离定位父级的偏移量
    const newOffsetLeft = newEl.offsetLeft;
    // 滚动
    scrollContentRef.current.style.transform = `translateX(-${newOffsetLeft}px)`;
    // 更新索引
    setPosIndex(newIndex);
    // 是否继续显示右边的按钮
    setShowRight(totalDistanceRef.current > newOffsetLeft);
    // 是否继续显示左侧的按钮
    setShowLeft(newOffsetLeft > 0);
  }

  return (
    <ViewWrapper>
      {showLeft && (
        <div
          className="control left"
          onClick={(e) => controlClickHandle(false)}
        >
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div
          className="control right"
          onClick={(e) => controlClickHandle(true)}
        >
          <IconArrowRight />
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  );
});

export default ScrollView;
