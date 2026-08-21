function Header()
{
    return(
        <nav style={mystyle.mynav} >
            <div style={mystyle.myimg}>
                <img src="https://png.pngtree.com/png-vector/20240804/ourmid/pngtree-car-for-logo-design-png-image_13376174.png" alt="Logo"  style={mystyle.logo}/>
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

const mystyle = {
    mynav: {
        background: "linear-gradient(135deg, #0f766e, #155e75)",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 30px",
        alignItems: "center",
        fontFamily: "Verdana, sans-serif",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    },

    myul: {
        display: "flex",
        gap: "25px",
        listStyle: "none",
        margin: "0",
        padding: "0",
        alignItems: "center",
    },

    myli: {
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
        transition: "0.3s",
    },
myimg: {
    height: "80px",
    width: "140px",
    display: "flex",
    alignItems: "center",
},
logo: {
    width: "130px",
    height: "75px",
    objectFit: "contain",
},
};