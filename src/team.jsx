import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11)
    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }

    const handle = () =>{
        setTeam(team + 1)
    }

    const handle2 = () =>{
        setTeam(team - 1)
    }
    return (
    <div style={teamStyle}>
        <h3>Players:{team}</h3>
        <button onClick={handle}>Add</button>
        <button onClick={handle2}>Reduce</button>
    </div>

    )
}
