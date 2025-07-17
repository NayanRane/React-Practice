import { useState } from "react";
function TogglePassword() {
    const [passType, setPassType] = useState('password');

    const handlClick = () => {
        setPassType('text')
    }

    return (
        <>
            <div className="card" style={{ width: '30rem', border: '2px solid black' }}>
                <div className="card-body">
                <input
                        id="task"
                        type={passType}
                        className="form-control"
                        placeholder="enter text"
                                                
                    />
                <button type="button" className="btn btn-primary mt-1" onClick={handlClick} >show</button>    
                </div>
            </div>
        </>
    )

}

export default TogglePassword;