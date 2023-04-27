<<<<<<< HEAD
const API_BASE_URL = "http://127.0.0.1:8081/mixmind";
=======
const API_BASE_URL = "http://127.0.0.1:8000/mixmind";
>>>>>>> a1755b5bd7e3a64a8173c056a0baa82a9ff60404

export async function musicRecommend(emotions) {
	const MixMindApiUrl = `${API_BASE_URL}/musicRecom/`;

	return fetch(MixMindApiUrl, {
		method: "post",
		headers:{
			'Content-Type': "application/json"
		},
        body: JSON.stringify({
			emotions,
		}),
	}).then(resp => resp.json());
}

export async function musicInfoList() {
	const MixMindApiUrl = `${API_BASE_URL}/musicList/`;
	
	return fetch(MixMindApiUrl, {
		method: "get",
		headers:{
			'Content-Type': "application/json"
		}
	}).then(resp => resp.json());
} 

export async function genreList() {
	const MixMindApiUrl = `${API_BASE_URL}/genreList/`;

	return fetch(MixMindApiUrl, {
		method: "get",
		headers:{
			'Content-Type': "application/json"
		}
	}).then(resp => resp.json())
}

export async function genreSelect() {
	const MixMindApiUrl = `${API_BASE_URL}/genreSelect/`;
	
	return fetch(MixMindApiUrl, {
		method: "get",
		headers:{
			'Content-Type': "application/json"
		}
	}).then(resp => resp.json())
}

export async function genreSelectInfo({genre}) {
	console.log(3);
	console.log(genre);
	// const MixMindApiUrl = `${API_BASE_URL}/genreSelectInfo/?=${genre}`; 
	// const MixMindApiUrl = `${API_BASE_URL}/genreSelectInfo/?genre=${genre}`; 
	// const MixMindApiUrl = `${API_BASE_URL}/genreSelectInfo/?genre=${genre}`;
	const MixMindApiUrl = `${API_BASE_URL}/genreSelectInfo/search/?genre=${genre}`;

	return fetch(MixMindApiUrl, {
		method: "get",
        // body: JSON.stringify({
		// 	genre,
		// }),
		headers:{
			'Content-Type': "application/json"
		}
	}).then(resp => resp.json());
}

export async function login(username, password) {
	const MixMindApiUrl = `${API_BASE_URL}/login/`;

	return fetch(MixMindApiUrl, {
		method: "post",
		headers:{
			'Content-Type': "application/json"
		},
		body:{
			username,
			password,
		},
	}).then(resp => {
		try {
			document.cookie = `token=${resp.data.token}`;
			resp.json();
		} catch (error) {
			// alert
		}
	})
}

// export async function 