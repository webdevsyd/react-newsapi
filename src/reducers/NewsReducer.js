const INITIAL_STATE = {
	news_data: null,
	all_news_data: []
};

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case 'CLEAR_NEWS_ON_SLUG': {
			return Object.assign({}, state, {
				news_data: null
			});
		}
		case 'CLEAR_ALL_NEWS': {
			return Object.assign({}, state, {
				all_news_data: []
			});
		}
		case 'GET_ALL_NEWS_BY_SLUG_SUCCESS': {
			return Object.assign({},state, {
				all_news_data: state.all_news_data.concat(action.payload.results)
			});
			
		}
		case 'GET_NEWS_BY_SLUG_SUCCESS': {
			return Object.assign({}, state, {
				news_data: action.payload.results
			});
		}
		default: {
			return state;
		}
	}
}
