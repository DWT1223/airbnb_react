import React, { memo } from 'react'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import {HaederWrapper} from './style'

const AppHeader = memo(() => {
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