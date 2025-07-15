import { useState } from "react";
function ToDoApp() {
    let [taskVal, setTaskval] = useState('');
    let [taskArr, setTaskArr] = useState([]);

    const handleChange = (e) => {
        setTaskval(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTaskArr([...taskArr, taskVal]);
    }
    return (
        <>
            <div className="card" style={{ width: '30rem', border: '2px solid black'}}>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="relative" data-kt-toggle-password="true" data-kt-toggle-password-initialized="true">
                            <input id="task" type="text" value={taskVal} onChange={handleChange} className="form-control" placeholder="enter task" /><button id="addBtn" type="submit" className="kt-btn kt-btn-icon kt-btn-ghost size-6 absolute end-2 top-1/2 -translate-y-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '18px', height: '18px' }} width="18" height="18" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                </svg>
                            </button>
                        </div>
                            <ul className="ps-0 card-scroll h-200px">
                                {taskArr.map((task, index) => (
                                    <li key={index + 1} className="d-flex align-items-center py-2 bg-opacity-50 bg-primary mt-1"  style={{borderRadius:'10px'}}><span className="bullet bg-dark mx-5" style={{height:'5px',width:'10px'}}></span>{task}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-trash-fill ms-auto me-5 opacity-100" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                  </svg></li>
                                ))}
                            </ul>

                    </form>
                </div>
            </div>
        </>
    )
}

export default ToDoApp;