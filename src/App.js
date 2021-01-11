import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import Posts from './Components/Posts';
import Messages from './Components/Messages';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className='header'>

        </div>
        <div className='bodyxon'>
          <div className='navigation'><Navigation /></div>
          <div className='content'>
            <Route path='/profile' component={Posts} />
            <Route path='/messages' component={Messages} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
