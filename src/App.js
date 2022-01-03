// import logo from './logo.svg';
import './scss/main.scss';

//components
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import Team from './components/theteam/Team';
import Roadmap from './components/roadmap/Roadmap';

//routes
// import Main from './routes/main';
// import Contactus from './routes/contact-us';

//utils
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header/>

      {/* main components */}
      <About />
      <Gallery />
      <Team/>
      <Roadmap />

      <Footer/>
    </div>
  );
}

export default App;
