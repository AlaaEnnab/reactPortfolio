import "../portfolio.css"


function Project(){
    return(
        <section className=" space-light py-5" id="project">
               <h2 className="text-center mb-4">Projects</h2>
    <div className="card-group">
  <div className="card">
    <img src="\food7.jpg" className=" card-img-top" height="280" alt="project"/>
    <div className="card-body">
      <h5 className="card-title">Food Store</h5>
      <p className="card-text">Lorem ipsum</p>
      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src="/clothes.jpg" className="card-img-top" alt="project"/>
    <div className="card-body">
      <h5 className="card-title">Clothes Store</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src="/pharmcy.jpg" className="card-img-top" alt="project"/>
    <div className="card-body">
      <h5 className="card-title">Pharmcy</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</section>
)}

export default Project;