import { Header } from './header'
import { Intro } from './intro'
import { Benefits } from './benefits'

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Intro />
        <Benefits />
      </main>
    </div>
  );
}

export default App;
