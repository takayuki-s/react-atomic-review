// import './Reset.css';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Router } from './router/Router';

const user = {
  name: "てけ",
  image: "https://source.unsplash.com/phIFdC6lA4E",
  email: "teke@test.com",
  phone: "090-1234-5678",
  company: {
    name: "てけ株式会社"
  },
  website: "https://google.com"
};

function App() {
  return (
    <Router />
  )
}

export default App;
