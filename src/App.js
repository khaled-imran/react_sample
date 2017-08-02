
import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject'

// this is comment 1
class App extends React.Component {
	constructor(){
		super();
		this.state = {
			projects: []
		}
	}

	componentWillMount(){
		this.setState({
			projects: [
				{
					title: 'biz web',
					category: 'web design'
				},
				{
					title: 'social app',
					category: 'mobile'
				}
			]
		});
	}

	handleAddProject(project){
		let projects = this.state.projects;
		projects.push(project);
		this.setState({projects: projects});
	} 

	render(){
		let txt = this.props.txt
		return (
			<div>
				<AddProject AddProject={this.handleAddProject.bind(this)} />
				<Projects projects={this.state.projects} />
			</div>	
		)	
	}
}

App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number
}

export default App;

// this is comment 2