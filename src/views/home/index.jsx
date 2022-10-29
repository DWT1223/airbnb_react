import React, { memo ,useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import { HomeWrapper } from './style'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeLongfor from './c-cpns/home-longfor'
import { isEmptyO } from '@/utils'
import HomeSectionV3 from './c-cpns/home-section-v3'


const home = memo(() => {
    /** 派发异步的事件: 发送网络请求 */
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(fetchHomeDataAction())
    },[dispatch])
  /** 从redux中获取数据 */
  const {goodPriceInfo,highScoreInfo,discountInfo,recommendInfo,longforInfo,plusInfo} = useSelector((state)=>({
    goodPriceInfo:state.home.goodPriceInfo,
    highScoreInfo:state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }),shallowEqual)

  return(
    <HomeWrapper>
      <HomeBanner/>
      <div className="content">
        { isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo}/>}
        { isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo}/>}
        { isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo} /> }
        { isEmptyO(discountInfo) && <HomeSectionV1 infoData={goodPriceInfo}/>}
        { isEmptyO(discountInfo) && <HomeSectionV1 infoData={highScoreInfo}/>}
        { isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo} /> }
      </div>
    </HomeWrapper>
  )
})

export default home
