// http 通信を行うパッケージ読み込み
import axios from 'axios'

// 他でも使えるように定義しておく
export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

// アクションを返す関数 : アクションクリエイター
// componets で使用するので export する
export const readEvents = () => async dispatch => {
	const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
	console.log(response)
	dispatch({ type: READ_EVENTS, response })
}