import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getHomeDisCountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecommendData, getHomeLongForData, getHomePlusData } from '@/services';

// 请求首页数据
export const fetchHomeDataAction = createAsyncThunk("fetchData", (payload, { dispatch, getState }) => {
  // 请求首页高性价比数据
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceAction(res))
  })
  // 请求首页高评分数据
  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreAction(res))
  })
  // 请求折扣数据
  getHomeDisCountData().then(res => {
    dispatch(changeDisCountAction(res))
  })
  // 请求热门推荐数据
  getHomeHotRecommendData().then(res => {
    dispatch(changeRecommendAction(res))
  })
  // 请求向往的数据
  getHomeLongForData().then(res => {
    dispatch(changeLongForAction(res))
  })
  // plus
  getHomePlusData().then(res => {
    dispatch(changeHomePlusAction(res))
  })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {}, // 高性价比数据
    highScoreInfo: {}, // 高评分数据
    disCountInfo: {}, // 折扣数据
    recommendInfo: {}, // 推荐数据
    longForInfo: {}, // 向往数据
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDisCountAction(state, { payload }) {
      state.disCountInfo = payload
    },
    changeRecommendAction(state, { payload }) {
      state.recommendInfo = payload
    },
    changeLongForAction(state, { payload }) {
      state.longForInfo = payload
    },
    changeHomePlusAction(state, { payload }) {
      state.plusInfo = payload
    }
  },
  extraReducers: {
    // [fetchHomeDataAction.fulfilled](state, { payload }) {
    //   state.goodPriceInfo = payload;
    // }
  }
})

export const {
  changeGoodPriceAction,
  changeHighScoreAction,
  changeDisCountAction,
  changeRecommendAction,
  changeLongForAction,
  changeHomePlusAction
} = homeSlice.actions

export default homeSlice.reducer