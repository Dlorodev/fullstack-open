/* eslint-disable react/prop-types */

const Countries = ({ countries, onShowCountry, selectedCountry }) => {
  const renderCountryDetail = (country) => {
    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <h3>Languages</h3>
        <ul>
          {Object.entries(country.languages).map(([key, value]) => (
            <li key={key}>{JSON.stringify(value)}</li>
          ))}
        </ul>
        <img src={country.flags.png} />
      </div>
    );
  };

  const countrieList = () => {
    if (countries.length > 10) {
      return <p>Too many matches, specify another filter.</p>;
    } else if (countries.length >= 2 && countries.length <= 10) {
      return (
        <ul>
          {countries.map((c) => (
            <div className="liContainer" key={c.cca2}>
              <li>{c.name.common}</li>
              <button onClick={() => onShowCountry(c)}>show</button>
              {selectedCountry &&
                selectedCountry.cca2 === c.cca2 &&
                renderCountryDetail(selectedCountry)}
            </div>
          ))}
        </ul>
      );
    } else if (countries.length === 1) {
      return renderCountryDetail(countries[0]);
    } else {
      return <p>No countries found.</p>;
    }
  };

  return (
    <div>
      {selectedCountry ? renderCountryDetail(selectedCountry) : countrieList()}
    </div>
  );
};

export default Countries;
