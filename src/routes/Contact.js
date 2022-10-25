import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/australia.jpg";

function Contact() {
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero-mid"
        heroImg={AboutImg}     
        title="Contact"
        btnClass="hide"
        />
        </>
    )
}

export default Contact;