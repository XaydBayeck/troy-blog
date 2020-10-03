import * as React from 'react'
import MainNav from '../mainNav/mainNav'
import './home.css'

export default class Home extends React.Component{
	render(){
		return(
			<div className="home">
				<div className="title"><i className="icon fa fa-rocket"/>Sid's Blog</div>
				<MainNav />
			</div>
		)
	}
}
