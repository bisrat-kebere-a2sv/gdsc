export default function ToggleName({name, hidden, ToggleButton}) {
    return( <div>
        {hidden ? <p>My name is {name}</p> : <></> }
        <br />
        <button onClick={ToggleButton}>Toggle</button>
    </div>)
}