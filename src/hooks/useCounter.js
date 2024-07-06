import useLocalStorage from "./useLocalStorage";

const useCounter = () => {
  const [count, setCount] = useLocalStorage("counter", 0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return { count, handleIncrease, handleDecrease };
};

export default useCounter;
