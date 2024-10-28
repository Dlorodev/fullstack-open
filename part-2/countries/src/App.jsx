import './App.css';
import { useEffect, useState } from 'react';
import FilterCountrie from './components/FilterCountrie';
import Countries from './components/Countries';
import countrieService from './services/countrieService';

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    countrieService.getAll().then((initialResponse) => {
      setCountries(initialResponse);
      console.log('Effect!!');
    });
  }, []);

  const handleFilter = (event) => {
    const value = event.target.value;
    setFilter(value);

    const result = countries.filter((c) => {
      return c.name.common.toLowerCase().includes(value.toLowerCase());
    });

    setFilteredCountries(result);
  };

  return (
    <>
      <FilterCountrie value={filter} countrieOnChange={handleFilter} />
      <Countries countries={filteredCountries} />
    </>
  );
}

export default App;
