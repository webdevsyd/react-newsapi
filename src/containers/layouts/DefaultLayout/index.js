import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout,Content,Drawer,Navigation } from 'react-mdl/lib/Layout';

import { getNewsBySlug,getAllNewsBySlug } from '../../../actions/NewsAction';
import NavBar from '../../../components/NavBar';

import news_sources from '../../../data/NewsSourcesData';

class DefaultLayout extends Component {
	constructor(props){
		super(props);
		this.state = {
			title: "All News Sources"
		};
	}
	onClickNewsSources(e,index){
		this.setState({
			title: news_sources[index].name
		});
		this.props.getNewsBySlug(news_sources[index].slug);
	}
	onClickAllNewsSources(){
		this.setState({title: "All News Sources"});
		for(var key in news_sources){
			this.props.getAllNewsBySlug(news_sources[key].slug);
		}
	}
	render() {
		return (
			<div>
				<Layout fixedHeader fixedDrawer>
					<NavBar title={this.state.title }/>
					<Drawer title="News Sources">
						<Navigation>
							<Link to="/" onClick={ (e) => this.onClickAllNewsSources(e) }>All News</Link>
							{news_sources.map((sources,index) => (
								<Link onClick={ (e) => this.onClickNewsSources(e,index) } key={index} to={'/news/'+ sources.slug }>{ sources.name }</Link>
							))}
						</Navigation>
					</Drawer>
					<Content>
						{ this.props.children }
					</Content>
				</Layout>
			</div>
		);
	}
}


function mapStateToProps(state){
	return {
		news_data: state.newsReducer.news_data
	}
}


export default connect(mapStateToProps, { getNewsBySlug,getAllNewsBySlug })(DefaultLayout);