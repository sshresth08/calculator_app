import Header from "./components/Header";
import UserInput from "./components/UserInput";
/* Siblings Jsx Element are not allowed as the main value being returned or stored in variable or used as a value in general
    we must have only one Root Jsx element which may contain many Siblings Elments as needed
*/
function App() {
  return (
    <ol>
      <Header />
      <UserInput />
    </ol>
  );
}

export default App;
