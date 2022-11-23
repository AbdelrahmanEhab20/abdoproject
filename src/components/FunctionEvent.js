function FunctionEvent() {
  const handleClick = () => {
    console.log(this);
  };
  return (
    <div>
      Functional Component
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
export default FunctionEvent;
