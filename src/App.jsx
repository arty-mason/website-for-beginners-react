import { Header } from './header'
import { Intro } from './intro'
import { Benefits } from './benefits'
import { Places } from './places'
import { Tours } from './tours'
import { Top } from './top'
import { Videos } from './videos'
import { Footer } from './footer'

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
        <Footer />
      </main>
    </div>
  );
}

export default App;
