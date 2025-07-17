import { useState } from "react";
function CharCounter() {
    // const [Char,setChar] = useState(0);
    const [CharLen,setCharLen] = useState(0);
    const [condition,setCondition] = useState(false);
    const handlChange = (e) =>{
        // setChar(e.target.value);
        let val = e.target.value.length;
        setCharLen(val)
        setCondition(val >= 10 ? true:'')
        if(val >= 20){
            alert(`${val} + characters are typed`)
        }
    }
    return (
        <>
            <div className="card" style={{ width: '30rem', border: '2px solid black' }}>
                <div className="card-body">
                    <input
                        id="task"
                        type="text"
                        className="form-control"
                        placeholder="enter text"
                        onChange={handlChange}                        
                    />
                    <h1>{CharLen !== 0 ?`chararcter enter ${CharLen}`:`chararcter enter ${0}`}</h1>
                    <button type="submit" className="btn btn-primary" disabled ={condition}>sumbit</button>
                </div>
            </div>
        </>
    )
}

export default CharCounter;