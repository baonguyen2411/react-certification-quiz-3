import { useMemo, useState } from "react";

function highlight(text) {
  var inputText = document.getElementById("inputText");
  var innerHTML = inputText.innerHTML;
  var index = innerHTML.indexOf(text);
  if (index >= 0) {
    innerHTML =
      innerHTML.substring(0, index) +
      "<span class='highlight'>" +
      innerHTML.substring(index, index + text.length) +
      "</span>" +
      innerHTML.substring(index + text.length);
    inputText.innerHTML = innerHTML;
  }
}

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

  const highlightText = (keyword, text) => {
    const idx = text.indexOf(keyword);

    let newText = null;
    if (idx >= 0) {
      newText = (
        <>
          <span>{text.substring(0, idx)}</span>
          <span className="highlight">
            {text.substring(idx, idx + keyword.length)}
          </span>
          <span>{text.substring(idx + keyword.length)}</span>
        </>
      );
    }

    return newText;
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
                  {highlightText(inputValue, option.label)}
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
