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
          <span className="about-profession">Web Developer</span>
          <p className="about-text">I am a passionate frontend developer dedicated to building modern, fast, and responsive web applications that enhance user experience. My journey began with a deep curiosity about how the combination of design and functionality can improve the way users interact with digital products.</p>
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

