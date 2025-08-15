import '../portfolio.css';
 
 function Contact() {
  return (
    <section className=" py-5 space-light" id="contact">
      <div className="container">
        <div className="row align-items-start">
          
          <div className="col-lg-7 order-lg-2 mb-4 mb-lg-0">
            <form className="p-4 rounded shadow contact-form bg-white">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" name="name" className="form-control" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" name="email" className="form-control " required />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" name="message" rows="5" className="form-control " required></textarea>
              </div>

              <div className="text-end">
                <button type="submit" className="btn btn-primary ">Send Message</button>
              </div>
            </form>
          </div>

          
          <div className="col-lg-5 order-lg-1 text-lg-start text-center">
            <h2 className="mb-3">Contact Me</h2>
            <p className="lead">
              You can contact me to assist you in your web project.
            </p>
            <p>
              I'm available for freelance work, collaboration, or a friendly chat about tech.
            </p>
             <img 
    src="/contactme.jpg" 
    alt="Contact Illustration"
    className="img-fluid mt-3 contact-img"
  />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
