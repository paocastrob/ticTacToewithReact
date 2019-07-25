import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	tablero = {
		a1: "",
		a2: "",
		a3: "",
		b1: "",
		b2: "",
		b3: "",
		c1: "",
		c2: "",
		c3: ""
	};
	player = "0";
	enElClick(e) {
		e.target.innerHTML = this.player;
		if (this.player === "0") {
			this.player = "x";
			// block of code to be executed if the condition is true
		} else {
			this.player = "0";
			// block of code to be executed if the condition is false
		}
	}
	render() {
		return (
			<div className="outerbox">
				<div className="row">
					<div
						id="a1"
						className="col border border border-dark border-left-0 border-top-0 text-center pt-5"
						onClick={e => this.enElClick(e)}
					/>
					<div
						id="a2"
						className="col border border border-dark border-top-0 text-center pt-5"
						onClick={e => this.enElClick(e)}
					/>
					<div
						id="a3"
						className="col border border border-dark border-right-0 border-top-0 text-center pt-5"
						onClick={e => this.enElClick(e)}
					/>
				</div>
				<div className="row">
					<div
						id="b1"
						className="col border border border-dark border-left-0 text-center pt-5"
						onClick={e => this.enElClick(e)}
					/>
					<div
						id="b2"
						className="col border border border-dark text-center pt-5"
						onClick={e => this.enElClick(e)}
					/>
					<div
						id="b3"
						className="col border border border-dark border-right-0 text-center pt-5"
						onClick={e => this.enElClick(e)}
					/>
				</div>
				<div className="row">
					<div
						id="c1"
						className="col border border border-dark border-left-0 border-bottom-0 text-center pt-5"
						onClick={e => this.enElClick(e)}
					/>
					<div
						id="c2"
						className="col border border border-dark border-bottom-0 text-center pt-5"
						onClick={e => this.enElClick(e)}
					/>
					<div
						id="c3"
						className="col border border border-dark border-right-0 border-bottom-0 text-center pt-5"
						onClick={e => this.enElClick(e)}
					/>
				</div>
			</div>
		);
	}
}
