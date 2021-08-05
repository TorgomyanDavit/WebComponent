import './App.css';
import "./features/aplication/style.css"
import Header from './features/aplication/header';
import Section1 from './features/aplication/section1';
import Section2 from './features/aplication/section2';
import Footer from './features/aplication/footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <Section1/>
        <Section2/>
        <Footer/>
    </div>
  );
}

export default App;
