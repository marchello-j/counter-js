import { Component } from "react";
import "./App.css";

class useCounter extends Component {
	render() {
		return (
			<div className='app'>
				<div className='counter'></div>
				<div className='controls'>
					<button>INC</button>
					<button>DEC</button>
					<button>RND</button>
					<button>RESET</button>
				</div>
			</div>
		);
	}
}

export default useCounter;
