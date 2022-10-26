import React, { memo} from 'react'
import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import HomeBanner from './c-cpns/home-banner'
import SectionHeader from '@/components/section-header'
import { fetchHomeDataAction } from '@/store/modules/home'
import { HomeWrapper } from './style'
import { useState } from 'react'
import SectionRooms from '@/components/sectiom-rooms'


const home = memo(() => {
  const [subtitle] = useState('多住几天，省钱更省心')
  /** 从redux中获取数据 */
  const {goodPriceInfo} = useSelector((state)=>({
    goodPriceInfo:state.home.goodPriceInfo
  }),shallowEqual)

  /** 派发异步的事件: 发送网络请求 */
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchHomeDataAction())
  },[dispatch])

  return(
    <HomeWrapper>
      <HomeBanner/>
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} subtitle={subtitle}/>
          <SectionRooms roomList={goodPriceInfo.list}/>
        </div>
      </div>
    </HomeWrapper>
  )
})

export default home
