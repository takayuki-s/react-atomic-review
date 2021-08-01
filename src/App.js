// import './Reset.css';
import { RecoilRoot } from 'recoil';
import './App.css';
import { UserByJson } from './components/molecules/UserByJson';
import { UserProvider } from './providers/UserProvider';
import { Router } from './router/Router';

function App() {
  return (
    <>
      <RecoilRoot>
        <UserProvider>
          <Router />
        </UserProvider>
      </RecoilRoot>
      <UserByJson />
    </>
  )
}

export default App;
