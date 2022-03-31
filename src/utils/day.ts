import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

type dateType = number | string | Date

export function dateFormat (date: dateType = new Date(), template = 'YYYY-MM-DD HH:mm:ss'): string {
  return dayjs(date).format(template)
}

// 获取年份
export function getYear (date: dateType = new Date()): number {
  return dayjs(date).year()
}

// 获取月份
export function getMonth (date: dateType = new Date()): number {
  return dayjs(date).month() + 1
}

// 获取日期
export function getDate (date: dateType = new Date()): number {
  return dayjs(date).date()
}

// 获取中文周
export function getWeek (date: dateType = new Date()): string {
  return dayjs(date).format('ddd')
}

/**
 * 返回 Unix 时间戳 (毫秒)
 * @param date
 */
export function dataValueOf (date: string | Date = new Date()): number {
  return dayjs(date).valueOf()
}
