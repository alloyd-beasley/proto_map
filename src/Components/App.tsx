import * as React from "react";
import { Document } from 'react-pdf';
import { ETH_WHITEPAPER, MAKER_WHITEPAPER } from "../../Util/constants";



import "./Styles/StyleMain.css";

const App = () => {
    return (
        <div className="app" id="app">
            <div>protomap</div>
            <iframe
                className="ether-whitepaper whitepaper"
                src={ETH_WHITEPAPER}
                frameBorder="0">
            </iframe>
            <iframe
                className="maker-whitepaper whitepaper"
                src={MAKER_WHITEPAPER}
                frameBorder="0">
            </iframe>

            <Document file={ETH_WHITEPAPER}></Document>
        </div>
    );
};

export default App;