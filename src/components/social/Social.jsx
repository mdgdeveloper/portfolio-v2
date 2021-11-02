import './social.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';


const Social = () => {
    return (
        <div className="s-wrapper">
            <div className="s-box">
                <div className="s-list">
                    <div className="s-item">
                    <div className="s-twitter">
                    <TwitterIcon/>
                    </div>
                    <div className="s-item-content">
                        <h3 className="s-item-title">Twitter</h3>
                        <p className="s-item-info">@sergiomadrigal</p>
                    </div>
                         </div>
                    <div className="s-item">
                        <div className="s-linkedin"><LinkedInIcon /></div>
                    
                    <div className="s-item-content">
                        <h3 className="s-item-title">LinkedIn</h3>
                        <p className="s-item-info">Sergio Madrigal</p>
                    </div>
                    </div>
                    <div className="s-item">
                        <div className="s-blog"><LibraryBooksIcon/></div>
                        <div className="s-item-content">
                            <h3 className="s-item-title">Blog</h3>
                            <p className="s-item-info">sergiomadrigal.com</p>
                        </div>
                    </div>
                    <div className="s-item">
                        <div className="s-podcast"><LibraryMusicIcon /></div>
                        <div className="s-item-content">
                            <h3 className="s-item-title">Podcast</h3>
                            <p className="s-item-info">Titulo del podcast</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Social
