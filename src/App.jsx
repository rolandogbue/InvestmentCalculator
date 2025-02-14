import { useState } from "react";

import Header from "./Components/Header.jsx";
import UserInput from "./Components/UserInput.jsx";
import Results from "./Components/Results.jsx";

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1000,
		expectedReturn: 10,
		duration: "7",
	});

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
			<Results />
		</>
	);
}

export default App;
