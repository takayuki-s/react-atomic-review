// import './Reset.css';
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButon';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';

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
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user}/>
    </div>
  );
}

export default App;
