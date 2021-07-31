import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Vision from './Components/Vision';
import Sector from './Components/Sector';
import Client from './Components/Client';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';
import News from './Components/News';
import Customer from './Components/Customer';
import StayInTouch from './Components/StayInTouch';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Vision />
      <Sector />
      <Client />
      <Services />
      <Testimonials />
      <News />
      <Customer />
      <StayInTouch />
      <Footer />
    </div>
  );
}

export default App;
