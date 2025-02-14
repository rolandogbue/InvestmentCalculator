import { useState } from "react";

import Header from "./Components/Header.jsx";
import UserInput from "./Components/UserInput.jsx";
import Results from "./Components/Results.jsx";

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: "10",
	});

	const isValidInput = userInput.duration >= 1;

	function handleInputChange(inputIdentifer, newValue) {
		setUserInput((prevState) => ({
			...prevState,
			[inputIdentifer]: +newValue,
		}));
	}

	return (
		<>
			<Header />
			<UserInput userInput={userInput} onChangeInput={handleInputChange} />
			{!isValidInput && (
				<p className="center">Please enter a duration greater than Zero</p>
			)}
			{isValidInput && <Results input={userInput} />}
		</>
	);
}

export default App;
