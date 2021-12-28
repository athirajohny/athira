import './App.css';
import Menu from './Menu'

function Header() {
  return (
    <header>
     <p>This is the header</p>
    </header>
  );
}

function Main() {
  return (
    <section>
      <p>This is main</p>
    </section>
  );
}
function Footer() {
  return (
    <footer>
      <p>This is the footer</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
     <Header />
      <Main />
     <Footer />
      {/* <Menu /> */}
    </div>
  );
}

export default App;
