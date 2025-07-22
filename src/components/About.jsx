function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      <div className="about-container bd-grid">
        <div className="about-img">
        <img src="https://i.postimg.cc/PfppB024/i-1-removebg-preview.png" alt="Rivojiddin Komiljanov" />
        </div>
        <div>
          <h2 className="about-subtitle">I'm Rivojiddin komiljanov</h2>
          <span className="about-profession">Web Designer</span>
          <p className="about-text">As a passionate web designer, I thrive on creating visually appealing and user-friendly websites. My journey in web design began with a fascination for how design can enhance user experience</p>
          <div className="about-social">
            <a href="#" className="about-social-icon"><i className='bx bxl-linkedin'></i></a>
            <a href="#" className="about-social-icon"><i className='bx bxl-github'></i></a>
            <a href="#" className="about-social-icon"><i className='bx bxl-instagram'></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;

