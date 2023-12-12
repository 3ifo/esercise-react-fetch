/* 1. Crea un componente CountryCard che accetta come props countryName, flagUrl, population, capital. 
Il componente crea un elemento che rappresenta la card di un paese, 
con titolo countryName, immagine con flagUrl per la bandiera, e le caratteristiche Popolazione e Capitale del paese.

2. Crea uno state [countries, setCountries], che rappresenta un array di oggetti, ciascuno dei quali viene 
utilizzato per rappresentare una CountryCard. 

3. Crea un effetto (useEffect) che al componentDidUpdate effettua una fetch a 'https://restcountries.com/v3.1/all' 
e aggiorna il valore di[countries, setCountries].

4. Crea uno state [searchValue, setSearchValue] legato ad un componente SearchBar che accetta come props value, onChange, onSearch. 
Il componente rappresenta un contenitore con dentro:

- un input text per il campo di ricerca: Il prop 'value' rappresenta il valore corrente da passare all'input. 
All'evento onChange dell'input text, viene eseguita la funzione onChange (passata come prop), a cui viene passato il valore corrente dell'input. 

- un bottone 'Cerca': Al click del bottone cerca, viene eseguita la funzione onSearch (passata come prop). 

All'onChange di SearchBar, modifica lo state 'searchValue' con il valore corrente passato ad onChange dal componente.

5. Allo scaternarsi di onSearch, effettua una nuova fetch a https://restcountries.com/v3.1/name/{searchValue} e 
aggiorna il contenuto dello state [countries, setCountries], con il risultato della ricerca. */

import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import CountryCard from "./components/CountryCard";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const doFetch = async (stringa) => {
    const response = await fetch(stringa);
    const objArray = await response.json();
    setCountries(objArray);
  };
  useEffect(() => {
    doFetch("https://restcountries.com/v3.1/all");
  }, []);

  return (
    <>
      <SearchBar
        value={searchValue}
        onChange={(newValue) => setSearchValue(newValue)}
        onSearch={() => {
          doFetch(`https://restcountries.com/v3.1/name/${searchValue}`);
        }}
      />
      {countries.map((country, index) => {
        return (
          <CountryCard
            key={index}
            countryName={country.name.official}
            population={country.population}
            capital={country.capital}
            flagUrl={country.flags.png}
          />
        );
      })}
    </>
  );
}

export default App;
