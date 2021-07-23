import logo from './logo.svg';
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';

function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <PrimaryButton>検索</PrimaryButton>
    </div>
  );
}

export default App;
