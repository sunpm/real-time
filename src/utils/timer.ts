interface TimeList {
  [key: string]: number;
}

const timeList: TimeList = {}

// 设置计时器
export function setTimer (key: string, callback: () => void, timeout = 1000): void {
  timeList[key] = setInterval(callback, timeout) as unknown as number
}

// 清除计时器
export function clearTimer (key: string): void {
  clearInterval(timeList[key])
}
