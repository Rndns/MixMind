const API_BASE_URL = "http://127.0.0.1:8000/mixmind";

export async function musicRecommend(emotionValues) {
	const MixMindApiUrl = `${API_BASE_URL}/musicRecom/`;

	return fetch(MixMindApiUrl, {
		method: "post",
        body: JSON.stringify({
			emotionValues,
		}),
	}).then(resp => resp.json());
}