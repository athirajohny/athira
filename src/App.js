import './App.css';
import demoImage from './image.jpeg';

function Header(props) {
  return (
    <header>
    <h2>Test Page</h2>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <img src={demoImage} height={400} alt='demoImage'/>
      <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" width={200} alt='google '/>
    </section>
  );
}
function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App" >
     <Header  />
      <Main  />
     <Footer year={new Date().getFullYear()}/> 
    </div>
  );
}

export default App;
