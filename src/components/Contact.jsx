function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact-container bd-grid">
        <div className="contact-info">
          <h3 className="contact-subtitle">EMAIL</h3>
          <span className="contact-text">rivojiddin66@gmail.com</span>
          <h3 className="contact-subtitle">PHONE</h3>
          <span className="contact-text">+998 91 344 41 08</span>
          <h3 className="contact-subtitle">ADDRESS</h3>
          <span className="contact-text">Uzbekistan, Namangan</span>
        </div>
        <form action="#" className="contact-form">
          <div className="contact-inputs">
            <input type="text" placeholder="Name" className="contact-input" />
            <input type="email" placeholder="Email" className="contact-input" />
          </div>
          <textarea cols="0" rows="10" className="contact-input"></textarea>
          <input type="submit" value="Send" className="contact-button" />
        </form>
      </div>
    </section>
  );
}
export default Contact;
