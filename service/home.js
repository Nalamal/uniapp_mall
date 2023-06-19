import MyRequest from './index.js'

export function getHomeMultidata() {
	return MyRequest.get("/home/multidata")
}

// export function getHomeData(type, page) {
// 	return MyRequest.get("/home/data", {
// 		type,
// 		page
// 	})
// }