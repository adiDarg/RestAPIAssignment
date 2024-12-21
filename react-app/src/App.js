import MapJson from './components/MapJson';
import { useEffect, useState } from 'react';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const url = 'https://randomuser.me/api/?results=100';
    const options = {
      method: 'GET',
      headers: {
      }
    };

    const fetchTask = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setList(result.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchTask();
  }, [])


  return (
    <MapJson list={list}></MapJson>
  );
}

export default App;
