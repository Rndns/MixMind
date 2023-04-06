const API_BASE_URL = "http://localhost/mixmind";

export async function musicRecommend(emotionValues) {
	const MixMindApiUrl = `${API_BASE_URL}/predict/musicRecom`;

	return fetch(MixMindApiUrl, {
		method: "post",
        body: JSON.stringify({
			emotionValues,
		}),
	}).then(resp => resp.json());
}