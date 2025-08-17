import '../portfolio.css'

function Testimonials(){
    return(
        <section className=" py-5 space-light" id="testimonials">
  <div className="container">
    <h2 className="text-center mb-5">Testimonials</h2>

    <div className="row justify-content-center gx-5">

    
      <div className="col-md-6 mb-4">
        <div className="card h-100 text-center p-4 shadow-lg">
          <p className="fs-5">
        "I was impressed with Alaa’s dedication and ability to quickly adapt to new technologies.
         Her portfolio truly reflects her passion for web development."
— Eng. Ahmed H., Lecturer at XYZ Academy
          </p>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="card h-100 text-center p-4 shadow-lg">
          <img
            src={process.env.PUBLIC_URL + '/images.jpg'}
            alt="Programming"
            className="img-fluid rounded"
            style={{ maxHeight: "300px", objectFit: "cover" }}
          />
        </div>
      </div>

    </div>
  </div>
</section>

    )

}

export default Testimonials;
