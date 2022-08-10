import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/Todos";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  return (
    <div className="App">
      <Todos />
      <NewTodoForm />
    </div>
  );
}

export default App;
