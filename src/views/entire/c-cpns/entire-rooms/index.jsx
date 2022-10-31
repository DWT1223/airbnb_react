import React, { memo } from 'react'
import { RoomsWrapper } from './style'
import { shallowEqual, useSelector,useDispatch } from 'react-redux'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoActon } from '@/store/modules/detial'

const EntireRooms = memo(() => {

  const {roomList,totalCount,isLoading} = useSelector((state)=>({
    roomList: state.entire.roomList,
    totalCount:state.entire.totalCount,
    isLoading: state.entire.isLoading
  }),shallowEqual)
  const navitate = useNavigate()
  const dispatch = useDispatch()
  function handleItemClick(item) {
    navitate("/detail")
    dispatch(changeDetailInfoActon(item))
  }
  return (
    <RoomsWrapper>
      <h2 className="title">共{totalCount}多处住所</h2>
      <div className="list">
        {
        roomList.map(item=>{
          return(
            <RoomItem itemData={item} itemWidth="20%" key={item._id} itemClick={e => handleItemClick(item)} />
          )
        })
      }
      </div>
      { isLoading && <div className="cover"></div> }
    </RoomsWrapper>
  )
})

export default EntireRooms