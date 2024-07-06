import useCounter from "./hooks/useCounter";

import CounterResult from "./components/CounterResult";
import CounterButton from "./components/CounterButton";

import "./App.css";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  const { count, handleIncrease, handleDecrease } = useCounter();

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
    </div>
  );
}

export default App;
