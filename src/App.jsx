import { Header } from './header'
import { Intro } from './intro'
import { Benefits } from './benefits'
import { Places } from './places'

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Intro />
        <Benefits />
        <Places />
      </main>
    </div>
  );
}

export default App;
