import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home'
import {Provider} from 'react-redux'
import { store } from './store';
import TaskView from './pages/TaskView/TaskView';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Home/>
      <TaskView/>
      </div>
    </Provider>
    
  );
}

export default App;
