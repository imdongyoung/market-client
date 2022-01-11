import logo from './logo.svg';
import './App.css';
import MainPageComponent from './main/index.js';

function App() {
  const text = '안녕';
  const sayHello = () => {
    alert('난영');
  };
  return <MainPageComponent />;
}

export default App;
