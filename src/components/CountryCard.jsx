const CountryCard = ({ countryName, flagUrl, population, capital }) => {
  return (
    <>
      <figure>
        <h3>{countryName}</h3>
        <div>
          <img src={flagUrl} alt={`flagName${countryName}`} />
          <p>{`Population: ${population}`}</p>
          <p>{`Capital: ${capital}`}</p>
        </div>
      </figure>
    </>
  );
};

export default CountryCard;
