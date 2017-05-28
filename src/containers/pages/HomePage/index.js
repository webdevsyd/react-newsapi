import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Grid,Cell } from 'react-mdl/lib/Grid';

import NewsItem from '../../../components/NewsItem';
import Loading from '../../../components/Loading';

import { getAllNewsBySlug } from '../../../actions/NewsAction';

const news_sources = [
	{
		name: "ABC News (AU)",
		slug: "abc-news-au"
	},
	{
		name: "Ars Technica",
		slug: "ars-technica"
	},
	{
		name: "Al Jazeera English",
		slug: "al-jazeera-english"
	},
	{
		name: "Associated Press",
		slug: "associated-press"
	},
	{
		name: "BBC News",
		slug: "bbc-news"
	},
	{
		name: "BBC Sport",
		slug: "bbc-sport"
	},
	{
		name: "Bild",
		slug: "bild"
	},
	{
		name: "Bloomberg",
		slug: "bloomberg"
	},
	{
		name: "Breitbart News",
		slug: "breitbart-news"
	},
	{
		name: "Business Insider",
		slug: "business-insider"
	},
	{
		name: "Buzzfeed",
		slug: "buzzfeed"
	},
	{
		name: "CNBC",
		slug: "cnbc"
	},
	{
		name: "CNN",
		slug: "cnn"
	},
	{
		name: "Daily Mail",
		slug: "daily-mail"
	},
	{
		name: "Engadget",
		slug: "engadget"
	}
]

class HomePage extends Component {
	componentDidMount(){
		for(var key in news_sources){
			this.props.getAllNewsBySlug(news_sources[key].slug);
		}
	}
	_renderAllNews(){
		if(this.props.all_news_data.length > 0){
			var news_item = this.props.all_news_data.map((item,index) => {
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
				{ this._renderAllNews() }
			</Grid>
		);
	}
}

function mapStateToProps(state){
	return {
		all_news_data: state.newsReducer.all_news_data
	}
}


export default connect(mapStateToProps, { getAllNewsBySlug })(HomePage);
