import { use } from 'react'

import apiTmdb from '@/config/apiTmdb'

export const getData = async (url: string, option?: object) => {
  try {
    const endPoint = apiTmdb.baseUrl + url + apiTmdb.apiKey

    const response = option
      ? await fetch(endPoint, option)
      : await fetch(endPoint)

    return response.json()
  } catch (err) {
    console.log('fetching Erorrrrrrr gais')
    console.log(url)
  }
}

const fetchData = (url: string, type: string, revalidate = 10) => {
  switch (type) {
    case 'ssg':
      return use(getData(url, { cache: 'force-cache' }))
    case 'ssr':
      return use(getData(url, { cache: 'no-store' }))
    case 'isr':
      return use(
        getData(url, {
          next: { revalidate },
        })
      )
    default:
      return getData(url)
  }
}

export default fetchData
