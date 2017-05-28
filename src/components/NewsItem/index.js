import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextUtil from '../../utils/TextUtil';
import { Card,CardTitle,CardText } from 'react-mdl/lib/Card';
import './style.css';
class NewsItem extends Component {
	render(){
		
		return (
			<Card shadow={0} style={{ width: '100%', margin: 'auto'}}>
				<Link to={this.props.item.url} target="_blank">
					<CardTitle style={{ color: '#fff', height: '220px', background: `url(${this.props.item.urlToImage}) no-repeat center center` }}>
						{ this.props.item.title }
					</CardTitle>
					<div className="card-overlay"></div>
				</Link>
				<CardText style={{ minHeight: '50px'}}>
					{ TextUtil.limitText(this.props.item.description) }
				</CardText>
			</Card>
		)
	}
}

export default NewsItem;