import { useState } from 'react';
import './announce.css';
import { HighlightOffRounded } from "@mui/icons-material";


const Announce = () => {
    const [showPanel, setShowPanel] = useState(true);

    const closePanel = () => {
        setShowPanel(false);
    }
    return (
        <div className={showPanel ? "a-display" : "a-noDisplay"}>
        <div className="a-wrapper">
            <div className="a-left"></div>
            <div className="a-center">
                <div className="a-text">Nuevo capitulo del podcast disponible: S01E01 El síndrome del impostor.</div>
            </div>
            <div className="a-right"><div className="a-close" onClick={closePanel}>
                <HighlightOffRounded />
                </div></div>
        </div>
        </div>
        
    )
}

export default Announce
