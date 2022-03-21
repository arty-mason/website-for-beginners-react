import { Header } from './header'
import { Intro } from './intro'
import { Benefits } from './benefits'
import { Places } from './places'
import { Tours } from './tours'
import { Top } from './top'

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Intro />
        <Benefits />
        <Places />
        <Tours />
        <Top />
      </main>
    </div>
  );
}

export default App;
