import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

type dateType = number | string | Date

export function dateFormat (date: dateType = new Date(), template = 'YYYY-MM-DD HH:mm:ss'): string {
  return dayjs(date).format(template)
}

/**
 * 返回 Unix 时间戳 (毫秒)
 * @param date
 */
export function dataValueOf (date: string): number {
  return dayjs(date).valueOf()
}
