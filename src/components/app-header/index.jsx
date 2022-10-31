import React, { memo } from 'react'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import {HaederWrapper} from './style'
import { useScrollPosition } from '@/hooks/useScrollPosition'

const AppHeader = memo(() => {
  const { scrollY } = useScrollPosition()
  if (scrollY === 0 ) {
    console.log('scrollY:',scrollY);
  }
  if (scrollY > 0) {
    console.log('scrollY:',scrollY);
  }

  return (
    <div>
      <HaederWrapper>
        <HeaderLeft></HeaderLeft>
        <HeaderCenter></HeaderCenter>
        <HeaderRight></HeaderRight>
      </HaederWrapper>
    </div>
  )
})

export default AppHeader