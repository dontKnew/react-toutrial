import Footer from "./Footer";
import Header from "./Header";
function Contact() {
  return (
    <>
    <Header />
    <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="image.jpg" class="d-block w-100" height={400} alt="..." />
      </div>
      
      <div class="carousel-item">
        <img src="image2.jpg" class="d-block w-100" alt="..." height={400} />
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
    <Footer />
  </>
  );
}

export default Contact;
