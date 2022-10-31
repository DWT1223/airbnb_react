import { createSlice } from "@reduxjs/toolkit"

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    detailInfo: {
     
    }
  },
  reducers: {
    changeDetailInfoActon(state, { payload }) {
      state.detailInfo = payload
    }
  }
})

export const { changeDetailInfoActon } = detailSlice.actions
export default detailSlice.reducer
