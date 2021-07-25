// import './Reset.css';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButon';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import { DefaultLayout } from './components/templates/DefaultLayout';
import { HeaderOnly } from './components/templates/HeaderOnly';

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
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user}/>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
