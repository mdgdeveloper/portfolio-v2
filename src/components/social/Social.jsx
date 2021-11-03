import "./social.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

const Social = () => {
  return (
    <div className="s-wrapper">
      <div className="s-box">
        <div className="s-list">
            <a href="https://twitter.com/sergiomadrigal" target="_blank" className="s-item">
          <div className="s-item-in">
              <div className="s-twitter">
                <TwitterIcon />
              </div>
              <div className="s-item-content">
                <h3 className="s-item-title">Twitter</h3>
                <p className="s-item-info">@sergiomadrigal</p>
              </div>
          </div>
            </a>
            <a href="https://www.linkedin.com/in/sergio-madrigal-muelas-04551a16/" target="_blank" className="s-item">
          <div className="s-item-in">
            <div className="s-linkedin">
              <LinkedInIcon />
            </div>

            <div className="s-item-content">
              <h3 className="s-item-title">LinkedIn</h3>
              <p className="s-item-info">Sergio Madrigal</p>
            </div>
          </div>

          </a>
            <a href="https://www.sergiomadrigal.com" target="_blank" className="s-item">
          <div className="s-item-in">
            <div className="s-blog">
              <LibraryBooksIcon />
            </div>
            <div className="s-item-content">
              <h3 className="s-item-title">Blog</h3>
              <p className="s-item-info">sergiomadrigal.com</p>
            </div>
          </div>
          </a>
            <a href="#" className="s-item">
          <div className="s-item-in">
            <div className="s-podcast">
              <LibraryMusicIcon />
            </div>
            <div className="s-item-content">
              <h3 className="s-item-title">Podcast</h3>
              <p className="s-item-info">En progreso</p>
            </div>
          </div>
          </a>
      </div>
      </div>
    </div>
  );
};

export default Social;
