
import '../portfolio.css';


function Home() {
    return (

     <section className=" py-5 space-light" id="home">
           <div className="container">
        <div className="row align-items-center">
              <div className="col-md-12 col-lg-8 mb-4">
                <h2 className="mb-3">Hi, I'm Alaa </h2>
                <p>I possess strong skills in both language and technology.
                 I have an excellent command of the English language, which allows me to communicate clearly and effectively in both written and spoken forms. 
                 I’m highly proficient in using computers, including essential software and internet tools.
                 In addition, I have solid programming abilities — particularly in web development — with hands-on experience in HTML, CSS, and JavaScript. I enjoy building responsive and interactive websites, and I’m familiar with version control systems like Git and platforms such as GitHub. I’m always eager to learn new technologies and continuously improve my technical and creative skills.
                </p>
                <div className="d-flex flex-wrap  align-items-center gap-1 mt-4">
                    <a
          href="https://www.linkedin.com/in/alaa-al-ananbeh92/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-dark d-flex align-items-center gap-2">
          <i className="fab fa-linkedin"></i>
          <span>Linkedin</span>
        </a> 
         <a
          href="https://www.github.com/in/alaa-al-ananbeh92/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-dark d-flex align-items-center gap-2">
          <i className="fab fa-github"></i>
          <span>Github</span>
        </a> 
        <a
          href="mailto:alaainnab@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-dark d-flex align-items-center gap-2">
          <i className="fas fa-envelope"></i>
          <span>Email</span>
        </a>
        </div>
         </div>
           <div className="col-lg-4 text-center">
            <img src="/programmer.jpg" 
            className="img-fluid rounded about-img"
             style={{ height: "300px", width: "500px", objectFit: "cover" }}
               alt="Programming"  />
          </div>
            </div>
            </div>
            </section>
        
    )
};
export default Home;