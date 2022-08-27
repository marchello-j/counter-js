import { useState } from "react";
import "./App.css";

const App = (props) => {
	const [counter, setCounter] = useState(props.counter);

	const incCounter = () => {
		if (counter < 50) {
			setCounter((counter) => counter + 1);
		}
	};

	const decCounter = () => {
		if (counter > -50) {
			setCounter((counter) => counter - 1);
		}
	};

	const rndCounter = () => {
		setCounter(Math.floor(Math.random() * (50 - -50) + -50));
	};

	const resCounter = () => {
		setCounter(props.counter);
	};

	return (
		<div className='app'>
			<div className='counter'>{counter}</div>
			<div className='controls'>
				<button onClick={incCounter}>INC</button>
				<button onClick={decCounter}>DEC</button>
				<button onClick={rndCounter}>RND</button>
				<button onClick={resCounter}>RESET</button>
			</div>
		</div>
	);
};

export default App;
