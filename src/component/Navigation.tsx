import '../styles/nav.css'

function Navigation({setPage}: {setPage: (page: string) => void}) {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li><a onClick={()=> setPage("Home")} className="nav-link">Home</a></li>
          <li><a onClick={()=> setPage("About")} className="nav-link">About</a></li>
          <li><a onClick={()=> setPage("Products")} className="nav-link">Products</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation;