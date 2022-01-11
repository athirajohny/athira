import './App.css';

const dishes =[
  'rice & dal','paneer tikka','chicken tikka',
];
dishes.map((dish) => console.log(dish));

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

      <ul style={{textAlign:"left"}}>
        {props.dishes.map((dish) =>(
          <li>{dish}</li>
        ))}
      </ul>

    </section>
  );
}
function Footer(props) {
  console.log("footer props",props);
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App" >
     <Header name="Athira" />
      <Main  adjective="amazing" dishes={dishes}/>
     <Footer year={new Date().getFullYear()}/> 
    </div>
  );
}

export default App;
