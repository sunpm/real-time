import axios from 'axios'
import { dateFormat } from '@/utils/day'

interface Time {
  sysTime2: string;
}

export async function getTime (): Promise<Time> {
  let data
  try {
    data = await axios.get('https://quan.suning.com/getSysTime.do')
  } catch (e) {
    data = {
      data: {
        sysTime2: dateFormat()
      }
    }
  }
  return data.data
}
