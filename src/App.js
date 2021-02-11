import './App.css';
import NavBar from './components/NavBar/NavBar';
import Sidebar from './components/Sidebar';
import Banner from './components/Body/Banner';
import TagBar from './components/Body/TagBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
    <div className="body-banner">
      <Sidebar/>
      <Banner/>
    </div>
      <TagBar/>
    </div>
  );
}

export default App;
