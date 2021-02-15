import './App.css';
import NavBar from './components/NavBar/NavBar';
import Sidebar from './components/Sidebar';
import Banner from './components/Body/Banner';
import TagBar from './components/Body/TagBar';
import Stories from './components/Body/stories';
import Album from './components/Body/Album';
import Trending from './components/Body/trending';
import Reels from './components/Body/Reels';


function App() {
  return (
    <div className="App">
      <NavBar/>
    <div className="body-banner">
      <Sidebar/>
      <Banner/>
    </div>
      <TagBar/>
      <div className="aside">
        <div className="trending_videos">
            <Stories/>
            <Album/>
            <Trending/>
        </div>
        <div className="beside_videos">
          <Reels/>
        </div>
      </div>


    </div>
  );
}

export default App;
