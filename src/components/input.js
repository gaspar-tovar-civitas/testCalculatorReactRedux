import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { number1, number2 } from '../actions/index';


class InputFields extends Component{

	constructor(props) {
		super(props);

		this.state = {
			a: 1,
			b: 2
		};
		this.onInputChangeA = this.onInputChangeA.bind(this);
		this.onInputChangeB = this.onInputChangeB.bind(this);
	}

	onInputChangeA() {
		this.setState({a: event.target.value});
		this.props.number1(event.target.value)
	}

	onInputChangeB() {
		this.setState({b: event.target.value});
		this.props.number2(event.target.value);
	}

	render() {
		return (
			<div>
				<input
					placeholder="Enter a number"
				  className="form-control"
				  value={this.state.a}
				  onchange={this.onInputChangeA}
				/>

				<input
					placeholder="Enter a number"
					className="form-control"
					value={this.state.b}
					onchange={this.onInputChangeB}
				/>
			</div>
		);
	}
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ number1, number2 }, dispatch );
}

function mapStateToProps(state) {
	return {
		a: state.a,
		b: state.b
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(InputFields);
