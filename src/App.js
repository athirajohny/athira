import './App.css';

function SecretComponent() {
  return <h1>Super secret infotmation for authorised users only</h1>;
}

function RegularComponent() {
  return <h1>Everyone can see this component.</h1>;
}

function App(props) {
 return(
  <>
  {props.authorized ? <SecretComponent /> : <RegularComponent />}
  </>
 );


  // if(props.authorized){
  //   return <SecretComponent />
  // }
  // else{
  //   return <RegularComponent />
  // }

}

export default App;
