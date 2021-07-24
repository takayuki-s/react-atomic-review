// import './Reset.css';
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButon';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';

function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard />
    </div>
  );
}

export default App;
