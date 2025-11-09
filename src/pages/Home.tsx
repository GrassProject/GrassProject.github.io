import '../styles/index.css'
import logo from '../assets/grassProject.png'
import {useState} from "react";

function Home() {
    const [hover, setHover] = useState(false);

    return (
        <>
            <div className='home-container'>
                <div className='box-container'>
                    <img src={logo} alt='Logo' id="logo"></img>
                    <h1 id="name">GrassProject</h1>
                </div>
                <div
                    className='slogan-container'
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <h2 className='slogan'>
                        <b >{!hover ? 'Developing Minecraft' : 'Developing Minecraft, Better'}</b>
                    </h2>
                </div>
            </div>
        </>
    )
}

export default Home