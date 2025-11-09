import { useEffect } from 'react';
import { animate } from '@motionone/dom';
import '../styles/index.css';
import '../styles/about.css';
import apo from '../assets/86117029.png';
import jimin from '../assets/201346155.png';
import way from '../assets/179858849.png';

function About() {
    useEffect(() => {
        const rotateTexts: string[] = ['Plugin', 'Server'];
        let currentIndex = 0;
        const rotateTextEl = document.getElementById('rotate-text');
        if (!rotateTextEl) return;

        const updateText = (el: HTMLElement) => {
            el.textContent = rotateTexts[currentIndex];
            animate(el, { opacity: [0, 1], y: [-20, 0] }, { duration: 0.5 });
            currentIndex = (currentIndex + 1) % rotateTexts.length;
        };

        updateText(rotateTextEl);
        const intervalId = setInterval(() => updateText(rotateTextEl), 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="about-container">
            <div className="description">
                <h1>Developing Minecraft</h1>
                <div className="rotate">
                    <h1 id="rotate-text" className="rotate-text"></h1>
                </div>
            </div>

            <div className="members-des">
                <div className="avatar-item">
                    <img src={apo} alt="" className="avatar"/>
                    <h3>apo2073</h3>
                </div>

                <div className="avatar-item">
                    <img src={jimin} alt="" className="avatar"/>
                    <h3>MrJimin</h3>
                </div>

                <div className="avatar-item">
                    <img src={way} alt="" className="avatar"/>
                    <h3>wayggstar</h3>
                </div>
            </div>
        </div>
    );
}

export default About;
