import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import Post from './Components/Post';

function App() {
  return (
    <div className="app">
      <Navigation />
      <div>
        <Post name='Dima' body='Hi, there' likeCount='25' />
        <Post name='Anton' body='How are you doing?' likeCount='14' />
      </div>
    </div>
  );
}

export default App;
