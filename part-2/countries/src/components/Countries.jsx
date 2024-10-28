/* eslint-disable react/prop-types */

const Countries = ({ countries }) => {
  const countrieList = () => {
    if (countries.length > 10) {
      return <p>Too many matches, specify another filter.</p>;
    } else if (countries.length >= 2 && countries.length <= 10) {
      return (
        <ul>
          {countries.map((c) => (
            <li key={c.cca2}>{c.name.common}</li>
          ))}
        </ul>
      );
    } else if (countries.length === 1) {
      return (
        <div>
          <h2>{countries[0].name.common}</h2>
          <p>Capital: {countries[0].capital}</p>
          <p>Area: {countries[0].area}</p>
          <h3>Languages</h3>
          <ul>
            {Object.entries(countries[0].languages).map(([key, value]) => (
              <li key={key}>{JSON.stringify(value)}</li>
            ))}
          </ul>
          <img src={countries[0].flags.png} />
        </div>
      );
    } else {
      return <p>No countries found.</p>;
    }
  };

  return <div>{countrieList()}</div>;
};

export default Countries;
