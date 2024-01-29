"use client"
import About from "../components/About/About";
import Achivemnets from "../components/Achivements/Achivemnets";
import Hero from "../components/HeroSection/Hero";
import Service from "../components/Service/Service";
import Testimonials from "../components/Testimonials/Testimonials";
import Work from "../components/Work/work";

const Home = () => {

    return (
        <section className="w-full h-screen relative ">
            <div>
                {/* Hero section */}
                <Hero />
                {/* about section */}
                <About />
                {/* services */}
                <Service />
                {/* achivenments */}
                <Achivemnets />
                {/* testimonials */}
                <Testimonials />
                <Work />
            </div>
        </section>
    )
}

export default Home;
