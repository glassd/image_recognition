import './App.css';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';

const particlesParams = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

function App() {
  return (
    <div className="App">
      <Particles params={particlesParams} className='particles' />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <ImageRegonition /> */}

    </div>
  );
}

export default App;
