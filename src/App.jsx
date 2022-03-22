import { Header } from './header'
import { Intro } from './intro'
import { Benefits } from './benefits'
import { Places } from './places'
import { Tours } from './tours'
import { Top } from './top'
import { Videos } from './videos'

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
        <Videos />
      </main>
    </div>
  );
}

export default App;
