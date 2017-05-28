import axios from 'axios';

class NewsApi {
	static getNewsBySlugApi(slug){
		return axios.get('https://newsapi.org/v1/articles?source='+slug+'&sortBy=top&apiKey=be48206f175c4d4085fa99c78f3e9056')
		.then(response => {
			return response;
		})
		.catch(error => {
			return error;
		});
	}
}

export default NewsApi;