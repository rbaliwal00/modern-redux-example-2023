import {useAppDispatch, useAppSelector} from './app/hooks';
import {increment,amountadded} from './features/counter/counterSlice';
import {useFetchBreedsQuery} from './features/dogs/dogs-api-slice';
import reactLogo from './assets/react.svg'
import './App.css'
import { useState } from 'react';

// function App() {

//   const count = useAppSelector((state) => state.counter.value);
//   const dispatch = useAppDispatch();

//   const handleClick = () =>{
//     dispatch(amountadded(5));
//   }

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={handleClick}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

function App (){
  const [numDogs, setNumDogs] = useState(10);
  const {data = [], isFetching} = useFetchBreedsQuery(numDogs);
  const dispatch = useAppDispatch(); 

  return (
    <div>
      <div>
        <p>Dogs to Fetch: </p>
        <select value={numDogs} onChange={(e) => setNumDogs(Number(e.target.value))}>
          <option  value="5">5</option>
          <option  value="10">10</option>
          <option  value="15">15</option>
          <option  value="20">20</option>
        </select>
      </div>
      <div>
        <p>Number of Dogs Fetched: {data.length}</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {data.map((breed) =>(
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img src={breed.image.url} alt={breed.name} height={250}/>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
