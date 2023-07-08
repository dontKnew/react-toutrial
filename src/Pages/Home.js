import SeoTags from "./Element/SeoTag";
import Footer from "./Footer";
import Header from "./Header";
function Contact() {
  return (
    <>
    <SeoTags title="Home" metaDescription="Home Page Description" metaKeywords="Keywords Render" />
    <Header />
    <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="image.jpg" className="d-block w-100" height={400} alt="..." />
      </div>
      <div className="carousel-item">
        <img src="image2.jpg" className="d-block w-100" alt="..." height={400} />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    <Footer />
  </>
  );
}

export default Contact;
