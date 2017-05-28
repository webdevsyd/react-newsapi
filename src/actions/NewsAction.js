import newsApi from '../api/NewsApi.js';

export function getAllNewsBySlug(slug){
	return function(dispatch){
		dispatch({ type: "CLEAR_ALL_NEWS"});
		newsApi.getNewsBySlugApi(slug).then(results => {
			dispatch({ type: 'GET_ALL_NEWS_BY_SLUG_SUCCESS', payload: { results: results.data.articles } })
		}).catch(error => {
			throw(error);
		});
	}
}
export function getNewsBySlug(slug){
	return function(dispatch){
		dispatch({ type: "CLEAR_NEWS_ON_SLUG"});
		newsApi.getNewsBySlugApi(slug).then(results => {
			dispatch({ type: 'GET_NEWS_BY_SLUG_SUCCESS', payload: { results: results.data.articles } })
		}).catch(error => {
			throw(error);
		});
	}
}