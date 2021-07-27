// import './Reset.css';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { UserProvider } from './providers/UserProvider';
import { Router } from './router/Router';

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  )
}

export default App;
