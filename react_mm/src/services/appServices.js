const API_BASE_URL = "http://127.0.0.1:8000/mixmind";

export async function musicRecommend(emotions) {
	const MixMindApiUrl = `${API_BASE_URL}/musicRecom/`;

	return fetch(MixMindApiUrl, {
		method: "post",
        body: JSON.stringify({
			emotions,
		}),
		headers:{
			'Content-Type': "application/json"
		}
	}).then(resp => resp.json());
}

export async function musicInfoList() {
	const MixMindListApiUrl = `${API_BASE_URL}/musicList/`;
	
	return fetch(MixMindListApiUrl, {
		method: "get",
		headers:{
			'Content-Type': "application/json"
		}
	}).then(resp => resp.json());
} 