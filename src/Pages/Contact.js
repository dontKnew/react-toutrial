import Footer from "./Footer";
import Header from "./Header";
import SeoTags  from "./SeoTags";
function Contact() {
  const title = "Conact Page";
  const description = "Contact Page Description";
  const keywords = "Contact Page Keywords";
  const registrationForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    console.warn(formData);
    console.warn(formData.entries());
    const data = {};
    for (let [name, value] of formData.entries()) {
      data[name] = value;
    }
  };
  return (
    <>
      <SeoTags title={title} description={description} keywords={keywords}  />
      <Header activeClass={"contact"} />
      <section className='container mt-4'>
        <div className="container">
          <h2>Fillup The Form:</h2>
          <form className="row g-2 shadow mt-4 p-2" onSubmit={registrationForm}>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail4" name="email" required/>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">Password</label>
              <input type="password" className="form-control" id="inputPassword4" name="password" autoComplete="" required/>
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">Address</label>
              <input type="text" className="form-control" id="inputAddress" name="address" placeholder="1234 Main St" required/>
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">Address 2</label>
              <input type="text" className="form-control" id="inputAddress2" name="address2" placeholder="Apartment, studio, or floor" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">City</label>
              <input type="text" className="form-control" id="inputCity" name="city" required />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">State</label>
              <select id="inputState" className="form-select" name="state" required>
                <option defaultValue>Choose...</option>
                <option>Delhi</option>
                <option>Mumbai</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="inputZip" name="zip" required />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" name="gridCheck" required />
                <label className="form-check-label" htmlFor="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-success btn-gl">Submit</button>
            </div>
         </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
