function Header()
{
    return(
        <nav style={mystyle.mynav} >
            <div>
                <h1>Logo</h1>
            </div>
            <div>
                <ul style={mystyle.myul}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>server</li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;

const mystyle={
    mynav:{
        backgroundColor:"cadetblue",
        color:"white",
        display:"flex",
        justifyContent: "space-between",
        padding:"10px 20px",
        alignItems: "center",
        
    },
    myul:{
        display:"flex",
        gap:"10px",
    }
}