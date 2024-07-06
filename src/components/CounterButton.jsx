function CounterButton({ handleIncrease, handleDecrease }) {
  return (
    <>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </>
  );
}

export default CounterButton;
