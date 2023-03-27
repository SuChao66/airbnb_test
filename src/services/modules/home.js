import hyRequest from "..";

// 获取高性价比数据
export function getHomeGoodPriceData() {
  return hyRequest.get({
    url: 'home/goodprice'
  })
}

// 高评分数据
export function getHomeHighScoreData() {
  return hyRequest.get({
    url: 'home/highscore'
  })
}

// 折扣数据
export function getHomeDisCountData() {
  return hyRequest.get({
    url: 'home/discount'
  })
}

// 推荐问句
export function getHomeHotRecommendData() {
  return hyRequest.get({
    url: 'home/hotrecommenddest'
  })
}

// 推荐问句
export function getHomeLongForData() {
  return hyRequest.get({
    url: 'home/longfor'
  })
}

// plus数据
export function getHomePlusData() {
  return hyRequest.get({
    url: 'home/plus'
  })
}