import './App.css';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import StartsWith from './components/startswith/StartsWith';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Search/>
      <StartsWith/>
    </div>
  );
}

export default App;
