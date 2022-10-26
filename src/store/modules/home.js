import { getHomeGoodPriceData } from '@/services/modules/home'
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk("fetchdata",async (payload)=>{
  const res =await getHomeGoodPriceData()
  console.log('HomeRes:',res)
  return res
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo:{}
  },
  reducers: {
     changeGoodPriceInfoAction(state,{payload}){
       state.goodPriceInfo = payload
     }
  },
  extraReducers:{
    [fetchHomeDataAction.fulfilled](state,{payload}){
      state.goodPriceInfo=payload
    }
  }
})

export const{changeGoodPriceInfoAction} = homeSlice.actions

export default homeSlice.reducer
