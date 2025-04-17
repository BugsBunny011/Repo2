import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import CompanyOverview from './components/pages/CompanyOverview';
import OurStory from './components/pages/OurStory';
import ScrollToTop from './components/ScrollToTop';
import MissionAndVision from './components/pages/MissionAndVision';
import ContactUs from './components/pages/ContactUs';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/company-overview' exact Component={CompanyOverview} />
        <Route path='/our-story' exact Component={OurStory} />
        <Route path='/mission-vision' exact Component={MissionAndVision} />
        <Route path='/sign-up' exact Component={ContactUs} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;