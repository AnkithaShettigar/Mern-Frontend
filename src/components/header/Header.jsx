import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitlesSm">React & Node</span>
        <span className="headerTitlesLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/banner__1638353767876.jpeg"
        alt=""
      />
    </div>
  );
}

export default Header;
