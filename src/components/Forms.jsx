import { useState } from "react"
export default function Form () {
    const [firstName, setFirstName] = useState()
    const [lastName, setLAstName] = useState()
    const [color, setColor] = useState()
    const [dateLocal, setDateLocal] = useState()
    const [comment, setComment] = useState()

    const handleUpdate = (e) => {
        const newValue = e.target.value
        console.log(newValue)
    }

    return (
        <form>
            <label>First Name:
            <input 
            type="text" 
            value={firstName}
            placeholder="First Name"
            onChange={(handleUpdate)}/>
            </label>

            <br />

            <label>Last Name
                <input 
                type= "text"
                value={lastName}
                placeholder="Last Name"
                onChange={(handleUpdate)} />
            </label>

            <br />

            <label>Color:
                <input 
                type="Color"
                value={(color)}
                onChange={handleUpdate} />
            </label>

            <br/>

            <label>Date
                <input 
                type="dateLocal"
                value= {dateLocal}
                onChange={(handleUpdate)} />
            </label>

            <br/>

            <label>Message
                <textarea
                col="5"
                row="25"
                onChange={(handleUpdate)}>{Comment} </textarea>
            </label>

            <br/>
        </form>
    )
}