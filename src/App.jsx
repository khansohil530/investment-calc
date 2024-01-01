import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

const INITIAL_USER_INPUT = {
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
};

function App() {
    const [userInput, setUserInput] = useState(INITIAL_USER_INPUT);
    const handleInputChange = (key, value) => {
        setUserInput((prevUserInput) => ({
            ...prevUserInput,
            [key]: +value,
        }));
    };

    const isValidInput = userInput.duration > 0;

    return (
        <>
            <Header />
            <UserInput
                initialInvestment={userInput.initialInvestment}
                annualInvestment={userInput.annualInvestment}
                expectedReturn={userInput.expectedReturn}
                duration={userInput.duration}
                handleInputChange={handleInputChange}
            />
            {isValidInput ? (
                <Results userInput={userInput} />
            ) : (
                <p className="center">
                    Please enter duration greater than zero.
                </p>
            )}
        </>
    );
}

export default App;
