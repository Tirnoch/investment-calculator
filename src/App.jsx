import { useState } from 'react';
import Header from './components/Header.jsx';
import Results from './components/Results.jsx';
import UserInput from './components/UserInput.jsx';

function App() {
  const [userInput, setuserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid =
    userInput.duration >= 0 &&
    userInput.expectedReturn >= 0 &&
    function handleChange(inputIdentifier, newValue) {
      setuserInput((prevUserInput) => {
        return {
          ...prevUserInput,
          [inputIdentifier]: +newValue,
        };
      });
    };
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {inputIsValid ? (
        <Results input={userInput} />
      ) : (
        <p className="center">Please enter positive values</p>
      )}
    </>
  );
}

export default App;
