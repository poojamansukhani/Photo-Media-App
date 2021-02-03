import './App.css';
import { Header } from "./components/starts/Header";
import Dashboard from "./components/starts/Dashboard";
import { Footer } from "./components/starts/Footer";

function App() {
  return (
    <div className="App">
      <Header name="React JS"></Header>
      <Dashboard></Dashboard>
      <Footer></Footer>
    </div>
  );
}

export default App;
