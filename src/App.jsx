import useCounter from "./hooks/useCounter";

import CounterResult from "./components/CounterResult";
import CounterButton from "./components/CounterButton";

import "./App.css";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";
import SearchSelect from "./components/SearchSelect";

function App() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState();

  const { count, handleIncrease, handleDecrease } = useCounter();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((resp) =>
        setOptions(
          resp.map((item) => ({ label: item.name, value: item.name, ...item }))
        )
      )
      .catch((error) => console.error(error));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
        width: "100%",
        padding: 16,
      }}
    >
      <div style={{ width: "100%" }}>
        <h3>Exercise 1</h3>
        <div className="exercise-1">
          <CounterResult count={count} />
          <CounterButton
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
          />
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <h3>Exercise 2</h3>
        <div className="exercise-2">
          <button onClick={() => setOpen(true)}>Open Modal</button>
          <Modal open={open} onClose={setOpen}>
            <Modal.Header title="Modal Title" />
            <Modal.Body>
              <h3>This is the content of the modal</h3>
            </Modal.Body>
          </Modal>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <h3>Exercise 3</h3>
        <div className="exercise-3">
          {value ? (
            <div
              style={{
                width: "200px",
                border: `2px inset light-dark(rgb(118, 118, 118), rgb(133, 133, 133))`,
                padding: "8px 12px",
                fontSize: 14,
              }}
            >
              {value}
            </div>
          ) : null}
          <SearchSelect options={options} valueChange={setValue} />
        </div>
      </div>
    </div>
  );
}

export default App;
