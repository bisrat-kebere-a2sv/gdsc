import Age from "./Age";

export default function Name(props) {
    return (
        <div>
            My name is: {props.name} <br />
            I'm <Age age={props.age} /> years old <br />
            <button type="button" onClick={()=> props.setName("Elias")}>button</button>
        </div>
    )
}