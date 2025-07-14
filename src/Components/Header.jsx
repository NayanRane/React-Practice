function Header ({username,isLoggedIn,tooglebtn}){
    return (
        <>
        <h1>{isLoggedIn ? `Welcome,${username}`:`Please Login`}</h1>
        <button onClick={tooglebtn} className="btn btn-dark">{isLoggedIn ? `Logout`:`Login`}</button>
        </>
    );
}

export default Header;
