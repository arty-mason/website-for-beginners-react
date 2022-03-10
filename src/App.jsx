import { Header } from './header'
import { Intro } from './intro'
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Intro />
      </main>
    </div>
  );
}

export default App;
