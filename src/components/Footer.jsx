function Footer() {
  return (
    <footer className="footer section">
      <div className="footer-container bd-grid">
        <div className="footer-data">
          <h2 className="footer-title">Rivojiddin komiljanov</h2>
          <p className="footer-text">I'm Rivojiddin komiljanov and this is my personal website</p>
        </div>
        <div className="footer-data">
          <h2 className="footer-title">Rivojiddin komiljanov</h2>
          <ul>
            <li><a href="#home" className="footer-link">Home</a></li>
            <li><a href="#about" className="footer-link">About</a></li>
            <li><a href="#skills" className="footer-link">Skills</a></li>
            <li><a href="#projects" className="footer-link">projects</a></li>
            <li><a href="#contact" className="footer-link">Contact</a></li>
          </ul>
        </div>
        <div className="footer-data">
          <h2 className="footer-title">FOLLOW</h2>
          <a href="#" className="footer-social"><i className='bx bxl-instagram'></i> https://www.instagram.com/theblenn/</a>
          <a href="#" className="footer-social"><i className='bx bxl-facebook'></i></a>
          <a href="#" className="footer-social"><i className='bx bxl-twitter'></i></a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
