import { useMemo, useState } from "react";

function SearchSelect({ searchBy = "label", options = [], valueChange }) {
  const [inputValue, setInputValue] = useState();

  const optionsFilter = useMemo(() => {
    if (inputValue) {
      return options.filter((option) =>
        option?.[searchBy]
          ?.toLowerCase()
          ?.includes(inputValue?.trim()?.toLowerCase())
      );
    }

    return [];
  }, [searchBy, options, inputValue]);

  const handleSelectItem = (item) => {
    setInputValue("");
    valueChange(item);
  };

  return (
    <div className="search-select">
      <input
        className="search-select__input"
        placeholder="Enter your state"
        value={inputValue}
        onChange={(e) => setInputValue(e?.target?.value)}
      />
      {optionsFilter.length ? (
        <div className="search-select__dropdown">
          <ul className="search-select__dropdown-list">
            {optionsFilter?.map((option) => {
              return (
                <li
                  key={option.id}
                  className="search-select__dropdown-item"
                  onClick={() => handleSelectItem(option.value)}
                >
                  {option.label}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default SearchSelect;
