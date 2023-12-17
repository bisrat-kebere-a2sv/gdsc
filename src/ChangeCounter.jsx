const ChangeCounter = ({setCount}) => {
  return (
    <div>
      <button onClick={()=> setCount((count)=> count + 5)}>Increase</button>
      <button onClick={()=> setCount((count)=> count - 1)}>Decrease</button>
    </div>
  );
}

export default ChangeCounter;