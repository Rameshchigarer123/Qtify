import Navbar from './components/navbar';
import Section from './components/section';
import Hero from './components/hero';
import Songs from './components/Songs';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Section title="Top Albums" apiUrl="https://qtify-backend.labs.crio.do/albums/top"/>
      <Section title="New Albums" apiUrl="https://qtify-backend.labs.crio.do/albums/new" />
      <Hero/>
      <Songs/>
    </div>
  );
}

export default App;
