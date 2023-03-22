
import './App.css';
import Countries from './component/Countries/Countries';


function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}




// function Loadcountries(){
//   const [countries,setCountreis]=useState([]);

//   useEffect(()=>{
//      fetch('https://restcountries.com/v3.1/all')
//      .then(res => res.json())
//      .then(data => setCountreis(data))
//   },[])
//   return(
//     <div>
//       <h1>Countries Loaded Api</h1>
//       <h2>Available Countries:{countries.length}</h2>

//       {
//         countries.map(country=><Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return(
//     <div>
//       <h1>Name:{props.name}</h1>
//       <h3>Population:{props.population}</h3>
//     </div>
//   )
// }

export default App;
