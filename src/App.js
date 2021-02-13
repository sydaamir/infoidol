import './App.css';
import NavBar from './components/NavBar/NavBar';
import Sidebar from './components/Sidebar';
import Banner from './components/Body/Banner';
import TagBar from './components/Body/TagBar';
import Stories from './components/Body/stories';
import Album from './components/Body/Album';


function App() {
  return (
    <div className="App">
      <NavBar/>
    <div className="body-banner">
      <Sidebar/>
      <Banner/>
    </div>
      <TagBar/>
      <Stories/>
      <Album/>
    </div>
  );
}

export default App;
