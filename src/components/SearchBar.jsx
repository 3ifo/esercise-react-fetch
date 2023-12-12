const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <>
      <input
        onChange={(e) => onChange(e.target.value)}
        value={value}
        type="text"
      />
      <button
        onClick={() => {
          onSearch();
        }}
      >
        Cerca
      </button>
    </>
  );
};

export default SearchBar;
