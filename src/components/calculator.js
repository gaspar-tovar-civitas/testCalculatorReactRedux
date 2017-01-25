import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sumValue, divValue, cleanResult } from '../actions/index';


class InputFields extends Component{

	constructor(props) {
		super(props);

		this.state = {
			a: 1,
			b: 2
		};
		this.onInputChangeA = this.onInputChangeA.bind(this);
		this.onInputChangeB = this.onInputChangeB.bind(this);
		this.calculateSum = this.calculateSum.bind(this);
		this.calculateDiv = this.calculateDiv.bind(this);
	}

	onInputChangeA(event) {
		this.setState({a: event.target.value});
	}

	onInputChangeB(event) {
		this.setState({b: event.target.value});
	}

	calculateSum() {
		this.props.cleanResult();
		this.props.sumValue(this.state.a, this.state.b);
	}

	calculateDiv() {
		this.props.cleanResult();
		this.props.divValue(this.state.a, this.state.b);
	}

	render() {
		return (
			<div>
				<input
					placeholder="Enter a number"
					className="form-control"
					value={this.state.a}
					onChange={this.onInputChangeA}
				/>
				<input
					placeholder="Enter a number"
					className="form-control"
					value={this.state.b}
					onChange={this.onInputChangeB}
				/>
				<button onClick={this.calculateSum}> Sum </button>
				<button onClick={this.calculateDiv}>Divide</button>
				<p>
					{this.props.result}
				</p>
	</div>
	);
	}
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ sumValue, divValue, cleanResult }, dispatch );
}

function mapStateToProps({a, b, result}) {
	return {
		a,
		b,
		result
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(InputFields);
