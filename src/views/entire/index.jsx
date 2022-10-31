import React, { memo ,useEffect } from 'react'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import { EntireWrapper } from './style'
import { useDispatch } from 'react-redux'
import { fetchEntireDataAction } from '@/store/modules/entire/actionCreators'
// import { changeHeaderConfigAction } from '@/store/features/main'

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEntireDataAction())
    // dispatch(changeHeaderConfigAction({ isFixed: true, isHome: false }))
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter/>
      <EntireRooms/>
      <EntirePagination/>
    </EntireWrapper>
    
  )
})

export default Entire