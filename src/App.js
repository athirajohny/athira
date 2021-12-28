import { Copyright } from '@mui/icons-material';
import './App.css';
import Menu from './Menu'

function Header(props) {
  console.log("header props",props);
  return (
    <header>
     <p>This is the header, {props.name}</p>
    </header>
  );
}

function Main(props) {
  console.log("main props",props);
  return (
    <section>
      <p>This is main,{props.adjective}</p>
    </section>
  );
}
function Footer(props) {
  console.log("footer props",props);
  return (
    <footer>
      <p>This is the footer</p>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
     <Header name="Athira" />
      <Main  adjective="amazing"/>
     <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
