import React, { memo,useState,useRef,useEffect } from 'react'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import {HaederWrapper ,SearchAreaPlaceholder} from './style'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { useSelector } from 'react-redux'
import { ThemeProvider } from "styled-components"
import classNames from 'classnames'

const AppHeader = memo(() => {
  const [isSearch, setIsSearch] = useState(false)
  const [isAlpha, setIsAlpha] = useState(false)
    /** redux中获取数据 */
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }))
  const { isHome,isFixed } = headerConfig
  const { scrollY } = useScrollPosition()
  if (isHome && scrollY === 0 && !isSearch) {
    setIsAlpha(true)
    setIsSearch(true)
    // console.log('scrollY:',scrollY);
  }
  if (isHome && isAlpha && scrollY > 0 && isSearch ) {
    setIsAlpha(false)
    setIsSearch(false)
    // console.log('scrollY:',scrollY);
  }
  const prevY = useRef()
  useEffect(() => { prevY.current = 0 }, [])
  if (!isSearch) prevY.current = scrollY
  if (Math.abs(prevY.current - scrollY) > 30 && isSearch) setIsSearch(false)
  // console.log('prevY.current', prevY.current);
  // console.log('isSearch', isSearch);
  // console.log('isAlpha',isAlpha);
  // console.log('isFixed',isFixed);
 /** 事件处理逻辑 */
 function searchBarClickHandle() {
  setIsSearch(true)
}
  return (
    <ThemeProvider theme={{isAlpha,isHome}}>
      <HaederWrapper className={classNames({fixed: isFixed})}>
        <div className="content">
          <div className='top'>
            <HeaderLeft></HeaderLeft>
            <HeaderCenter isSearch={isSearch} searchBarClick={searchBarClickHandle}></HeaderCenter>
            <HeaderRight></HeaderRight>
          </div>
          <SearchAreaPlaceholder isSearch={isSearch}/>
        </div>
        { isSearch && !isAlpha && <div className='cover' onClick={e => setIsSearch(false)}></div> }
        </HaederWrapper>
    </ThemeProvider>
  
  )
})

export default AppHeader