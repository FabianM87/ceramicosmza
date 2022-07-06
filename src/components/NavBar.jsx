const NavBar = ({name}) => {
    const displayName = name.toUpperCase();
    return (<nav> 
        <p>{displayName}</p>
        <p>Home</p>
        <p>shop</p>
        <p>the brand</p>
       
    </nav>  );
}
 
export default NavBar;
