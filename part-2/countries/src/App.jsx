import './App.css';
import { useEffect, useState } from 'react';
import FilterCountrie from './components/FilterCountrie';
import Countries from './components/Countries';
import countrieService from './services/countrieService';

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    countrieService.getAll().then((initialResponse) => {
      setCountries(initialResponse);
      console.log('Effect!!');
    });

    //countrieService.getWeather(15.5, -90.25).then((res) => console.log(res.data.main ));
  }, []);

  const handleFilter = (event) => {
    const value = event.target.value;
    setFilter(value);

    const result = countries.filter((c) => {
      return c.name.common.toLowerCase().includes(value.toLowerCase());
    });

    setFilteredCountries(result);
  };

  const handleShowCountry = (country) => {
    setSelectedCountry(country);
    console.log(country);
  };

  const handleReset = () => {
    setSelectedCountry(null);
  };

  return (
    <>
      <FilterCountrie
        value={filter}
        countrieOnChange={handleFilter}
        reset={handleReset}
      />
      <Countries
        countries={filteredCountries}
        selectedCountry={selectedCountry}
        onShowCountry={handleShowCountry}
      />
    </>
  );
}

export default App;
