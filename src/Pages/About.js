import Footer from "./Footer";
import Header from "./Header";
import SeoTags from "./SeoTags";

function About() {
  const title = "About Page";
  const description = "About Page Description";
  const keywords = "About Page Keywords";
  return (
    <>
    <SeoTags title={title} description={description} keywords={keywords}  />
    <Header />
    <section>
      <h1>About Section Here : ) </h1>
    </section>
    <Footer />
    </>
  );
}

export default About;
