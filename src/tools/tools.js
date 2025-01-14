export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min // 含最大值，含最小值
}
export const formartTime = (time) => {
  // 2.得到两个时间之间的差值(秒)
  const differSecond = time
  // 3.利用相差的总秒数 / 每一天的秒数 = 相差的天数
  let day = Math.floor(differSecond / (60 * 60 * 24))
  day = day >= 10 ? day : '0' + day
  // 4.利用相差的总秒数 / 小时 % 24;
  let hour = Math.floor(differSecond / (60 * 60) % 24)
  hour = hour >= 10 ? hour : '0' + hour
  // 5.利用相差的总秒数 / 分钟 % 60;
  let minute = Math.floor(differSecond / 60 % 60)
  minute = minute >= 10 ? minute : '0' + minute
  // 6.利用相差的总秒数 % 秒数
  let second = Math.floor(differSecond % 60)
  second = second >= 10 ? second : '0' + second
  return {
    day: day,
    hour: hour,
    minute: minute,
    second: second
  }
}
export const setLocalStorage = (key, value) => {
  if (value !== undefined) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
}
export const getLocalStorage = (key) => {
  return JSON.parse(window.localStorage.getItem(key))
}
export const getFormattedNumber = (num) => {
  let res = 0
  if (num / 100000000 > 1) {
    const temp = num / 100000000 + ''
    if (temp.indexOf('.') === -1) {
      res = num / 100000000 + '亿'
    } else {
      res = (num / 100000000).toFixed(1) + '亿'
    }
  } else if (num / 10000 > 1) {
    const temp = num / 10000 + ''
    if (temp.indexOf('.') === -1) {
      res = num / 10000 + '万'
    } else {
      res = (num / 10000).toFixed(1) + '万'
    }
  } else {
    res = num
  }
  return res
}
