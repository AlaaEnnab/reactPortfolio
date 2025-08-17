import '../portfolio.css';

function Skills(){
    return(
        <section id="skills" className="space-light skills-section py-5">
  <div className="container">
    <h2 className="text-center mb-4">Skills</h2>
    
    <div className="text mb-4 text-center">
      I have solid programming abilities particularly in web development with experience in HTML, CSS, JavaScript and React.
      I enjoy building responsive and interactive websites, and I’m familiar with version control systems like Git and platforms such as GitHub.
      I’m always eager to learn new technologies and continuously improve my technical and creative skills.
    </div>

    <div className="row text-center">
      <div className="col-6 col-md-3 mb-4">
        <img src={process.env.PUBLIC_URL + '/html.png'} alt="html logo" className="img-fluid mb-2" />
        <span className="d-block">HTML</span>
      </div>
      <div className="col-6 col-md-3 mb-4">
        <img src={process.env.PUBLIC_URL + '/scc.png} alt="css logo" className="img-fluid mb-2" />
        <span className="d-block">CSS</span>
      </div>
      <div className="col-6 col-md-3 mb-4">
        <img src={process.env.PUBLIC_URL + '/js.png'} alt="javascript logo" className="img-fluid mb-2" />
        <span className="d-block">JavaScript</span>
      </div>
      <div className="col-6 col-md-3 mb-4">
        <img src={process.env.PUBLIC_URL + '/react3.jpg'} alt="react logo" className="img-fluid mb-2" />
        <span className="d-block">React</span>
      </div>
    </div>
  </div>
</section>

    )
}
export default Skills;
