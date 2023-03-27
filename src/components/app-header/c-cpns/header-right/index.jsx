import IconAvatar from '@/assets/svg/icon_avatar'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import React, { memo, useState, useEffect } from 'react'
import { RightWrapper } from './style'

const HeaderRight = memo(() => {
  // 定义组件的内部状态
  const [ isShow, setIsShow ] = useState(false)

  // 事件处理函数
  function profileClickHandler() {
    setIsShow(true);
  }

  // 副作用代码
  useEffect(() => {
    function windowClickHandler() {
      setIsShow(false);
    }
    // 第二个参数表示使用冒泡还是捕获，为true表示捕获
    window.addEventListener('click', windowClickHandler, true)
    // 取消事件
    return () => {
      window.removeEventListener('click', windowClickHandler, true)
    }
  }, []);

  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal/>
        </span>
      </div>
      <div className="profile" onClick={profileClickHandler}>
        <IconMenu/>
        <IconAvatar/>

        { isShow && 
          <div className="panel">
            <div className='top'>
              <div className='item register'>注册</div>
              <div className='item login'>登录</div>
            </div>
            <div className='bottom'>
              <div className='item'>出租房源</div>
              <div className='item'>开展体验</div>
              <div className='item'>帮助</div>
            </div>
          </div>
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight