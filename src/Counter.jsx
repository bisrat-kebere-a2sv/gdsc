import ChangeCounter from "./ChangeCounter"

export default function Counter(){
    const [count, setCount] = useState(1)
    return <div>
      <p>Count: {count}</p>
      {/* <ChangeCounter setCount={setCount} count={count}/> */}
    </div>
}

