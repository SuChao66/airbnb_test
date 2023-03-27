import { createSlice } from '@reduxjs/toolkit'

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    headerConfig: {
      isFixed: false,  // 是否固定定位
      topAlpha: false, // 是否透明
    }
  },
  reducers: {
    changeHeaderConfigAction(state, { payload }) {
      state.headerConfig = payload
    }
  },
})

export const { changeHeaderConfigAction } = mainSlice.actions

export default mainSlice.reducer