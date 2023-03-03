import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Karakter from './components/Karakter'



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [char, setChar] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/', {

    })
      .then(function (response) {
        console.log(response);
        setChar(response.data);

      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

  }, []);


  return (
    <div className="App">
      <div className='m-5'>
        <h1 className="display-3">Karakterler</h1>
        <Karakter char={char} />
      </div>
    </div>
  );
}

export default App;
