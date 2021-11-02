import './footer.css'

import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    return (
        <div className='f-wrapper'>
            <div className="f-box">
            <div className="f-copy"><CopyrightIcon /></div>
            <div className="f-copy">Copyright by Sergio Madrigal. Coded in 2021.</div>
            <div className="f-copy">Todos los derechos reservados.</div>
            </div>
            
        </div>
    )
}

export default Footer
