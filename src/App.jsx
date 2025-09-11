import { useState } from "react"; 
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
/* Siblings Jsx Element are not allowed as the main value being returned or stored in variable or used as a value in general
    we must have only one Root Jsx element which may contain many Siblings Elments as needed
*/
function App() {
  const[userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 7,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <ol>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      <Results userInput={userInput}/>
    </ol>
  );
}

export default App;
