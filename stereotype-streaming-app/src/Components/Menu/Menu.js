import './Menu.css';
export const Menu = (props) => {
    return (
        <div>
            <div className="navbar">
            <div className="navbar-container">
                <div className="logo-container"><h1 className="logo">Stereotype Streaming</h1></div>
                <div className="menu-container">
                    <ul className="menu-list">
                        <li className="menu-list item">Home</li>
                        <li className="menu-list item">Movies</li>
                        <li className="menu-list item">Series</li>
                        <li className="menu-list item">Popular</li>
                    </ul>
                </div>
                </div>
            </div>
    <div className="sidebar">
        <i className="left-menu-icon fa-solid fa-magnifying-glass"></i>
        <i className="left-menu-icon fa-solid fa-tv"></i>
        <i className="left-menu-icon fa-solid fa-home"></i>
        <i className="left-menu-icon fa-solid fa-user"></i>
        <i className="left-menu-icon fa-solid fa-bookmark"></i>
    </div>
    {props.children}
    </div>
    )
}
