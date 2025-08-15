import '../portfolio.css';

function Services(){
    return(
             <section className=" py-5 space-light" id="service">
  <div className="container">
    <h2 className="text-center mb-5">Services</h2>

    <div className="row">
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card h-100 text-center p-3 shadow-sm">
          <h3>Web Design</h3>
          <p>
            One way to categorize the activities is in terms of the professional's area of experience such as competitive analysis, corporate strategy.
          </p>
          <a href="#" className="btn custom-btn">Read More</a>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card h-100 text-center p-3 shadow-sm">
          <h3>Creative Design</h3>
          <p>
            One way to categorize the activities is in terms of the professional's area of experience such as competitive analysis, corporate strategy.
          </p>
          <a href="#" className="btn custom-btn ">Read More</a>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card h-100 text-center p-3 shadow-sm">
          <h3>Creative Design</h3>
          <p>
            One way to categorize the activities is in terms of the professional's area of experience such as competitive analysis, corporate strategy.
          </p>
          <a href="#" className="btn custom-btn">Read More</a>
        </div>
      </div>
    </div>
  </div>
</section>
   


    )
}

export default Services;
