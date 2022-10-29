import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomsWrapper } from './style'
import RoomItem from '@/components/room-item'

const SectionRooms = memo((props) => {
  const {roomList=[],gridNum = 4} = props

  return (
    <RoomsWrapper gridNum = {gridNum}>
      <div className="gridContainer">
        {
          roomList?.slice(0,8).map(item => {
            return <RoomItem itemData={item} key={item.id}/>
          })
        }
      </div>
    </RoomsWrapper>
    
  )
})

SectionRooms.propTypes = {
  roomList:PropTypes.array
}

export default SectionRooms