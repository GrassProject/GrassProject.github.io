import {useState} from "react";
import Navigation from "./component/Navigation.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Products from "./pages/Products.tsx";


function App() {
    const [page, setPage] = useState('Home');

    return (
        <>
            { page === 'Home' && <Home/> }
            { page === 'About' && <About/> }
            { page === 'Products' && <Products/> }
            {}
            <Navigation setPage={setPage} />
        </>
    )
}

export default App;