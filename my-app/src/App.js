
import './App.css';
import ArgField from "./components/FunctionSelector"
import bruteforce from "./bruteforce"

function App() {
  function optimize(funcName, args) {
    console.log("hi")
    bruteforce(funcName, args)
  }

  return (
    <div>
      <ArgField handleSubmit={optimize}/>

    </div>
  );
}

export default App;
