import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Footer from "./component/BasedFooter.tsx";
import App from "./App.tsx";

const root = createRoot(document.getElementById('app')!)
root.render(
  <StrictMode>
    <App />

    <Footer/>
  </StrictMode>,
)
