import React, { Component } from 'react';
import { Grid,Cell } from 'react-mdl/lib/Grid';
import { connect } from 'react-redux';

import { getNewsBySlug } from '../../../actions/NewsAction';
import NewsItem from '../../../components/NewsItem';
import Loading from '../../../components/Loading';

class NewsPage extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
		this.props.getNewsBySlug(this.props.match.params.sources);
	}
	_renderNewsItem(){
		
		if(this.props.news_data){
			var news_item = this.props.news_data.map((item,index) => {
				return <Cell col={3} key={index}>
					<NewsItem item={item} />
				</Cell>
			});

			return news_item;
		}
		else {
			return <Loading />
		}
	}

	render() {
		return (
			<Grid>
				{ this._renderNewsItem() }
			</Grid>
		);
	}
}

function mapStateToProps(state){
	return {
		news_data: state.newsReducer.news_data
	}
}


export default connect(mapStateToProps, { getNewsBySlug })(NewsPage);