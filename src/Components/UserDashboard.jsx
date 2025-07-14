function UserDashboard() {
    return (    
        <>
            <div className="d-flex justify-content-center align-content-center">
                <div className="card" style={{ width: '18rem',border:'2px solid red'}}>
                    <div className="card-body">
                        <input type="text" className="form-control" id="user" placeholder="name@example.com" />
                    </div>
                </div>
            </div>
        </>
    )

}

export default UserDashboard;
