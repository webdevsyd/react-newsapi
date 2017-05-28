import React, { Component } from 'react';
import { Header } from 'react-mdl/lib/Layout';


class NavBar extends Component {
	render() {
		return (
			<Header title = {this.props.title}>
				{/*<Navigation>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
				</Navigation>*/}
			</Header>
		);
	}
}

export default NavBar;
