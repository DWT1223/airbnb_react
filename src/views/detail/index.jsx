import { changeHeaderConfigAction } from '@/store/modules/main'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import DetailPictures from './c-cpns/detail-pictures'
import { DetailWrapper } from './style'

const Detail = memo((props) => {
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detial.detailInfo
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: true, isHome: false }))
  }, [dispatch])

  return (
    <DetailWrapper>
      <DetailPictures pictureUrls={detailInfo.picture_urls}/>
    </DetailWrapper>
  )
})

Detail.propTypes = {}

export default Detail