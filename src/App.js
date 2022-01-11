import './App.css';

const dishes =[
  'Rice & dal','Paneer tikka','Chicken tikka','Salmon'
];
// dishes.map((dish) => console.log(dish));
const dishObjects = dishes.map((dish,i) => ({id:i,title:dish}));
console.log("dishObjects",dishObjects);

function Header(props) {
  return (
    <header>
     <p>This is the header, {props.name}</p>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>This is main,{props.adjective}</p>

      <ul style={{textAlign:"left"}}>
        {props.dishes.map((dish) =>(
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>

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
     <Header name="Athira" />
      <Main  adjective="amazing" dishes={dishObjects}/>
     <Footer year={new Date().getFullYear()}/> 
    </div>
  );
}

export default App;
