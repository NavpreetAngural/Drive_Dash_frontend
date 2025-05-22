import React from 'react';
import men_1 from "../assets/images/men_1.jpg"
import men_2 from "../assets/images/men_2.jpg"
import men_3 from "../assets/images/men_3.jpg"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-evenly  !py-6 gap-y-6">
        {/* Left Column */}
        <div className="w-full md:w-[48%] flex flex-col gap-5">
          <div className="bg-white rounded-lg !p-6 h-[200px] text-center">
            <h1 className="text-black text-xl font-bold">Company Overview</h1>
            <p className="!mt-2 text-base !px-4">
              Founded in 2025, DriveDash is a trusted online vehicle rental platform dedicated to providing seamless and affordable rental experiences. Our mission is to make transportation accessible for everyone, whether you’re traveling for business, leisure, or adventure.
            </p>
          </div>
          <div className="bg-white rounded-lg !p-6 h-[200px] text-center">
            <h1 className="text-black text-xl font-bold">Our Mission and Vision</h1>
            <p className="!mt-2 text-base !px-4">
              Our mission is to provide affordable, reliable, and eco-friendly vehicle rental solutions. Also to become the most trusted vehicle rental platform worldwide.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-[48%] flex flex-col gap-5">
          <div className="bg-white rounded-lg !p-6 h-[200px] text-center">
            <h1 className="text-black text-xl font-bold">Our Story</h1>
            <p className="!mt-2 text-base !px-4">
              Our journey began with a simple idea: to revolutionize the way people rent vehicles. Frustrated by the lack of transparency and convenience in traditional rental services, our founders set out to create a platform that prioritizes customer satisfaction and innovation. Today, we serve thousands of happy customers across the globe.
            </p>
          </div>
          <div className="bg-white rounded-lg !p-4 h-[200px] text-center">
            <h1 className="text-black text-xl font-bold">Core Values</h1>
            <ul className="text-base !px-4 text-left">
              <li><b>Customer-Centric:</b> We put our customers first in everything we do.</li>
              <li><b>Transparency:</b> No hidden fees, no surprises.</li>
              <li><b>Sustainability:</b> We’re committed to reducing our environmental impact.</li>
              <li><b>Innovation:</b> Constantly improving to deliver the best experience.</li>
            </ul>
          </div>
        </div>

        {/* Meet the Team */}
        <div className="container flex flex-col items-center !py-4  ">
          <h1 className="text-xl font-bold !mb-4">Meet the Team</h1>
          <div className="flex flex-wrap  gap-50 justify-between ">
            <div className="divss ">
              <img src={men_1} alt="men" />
              <center>
                <h3 className='font-bold '> John </h3>
                <p>Visionary leader and entrepreneur, John brings over 10 years of experience in transportation technology. He oversees strategic planning and is the driving force our company’s growth and vision.</p>
              </center>
            </div>
            <div className="divss">
              <img src={men_2} alt="men" />
              <center>
                <h3 className='font-bold '> Michael</h3>
                <p>Michael designs seamless and user-centric interfaces for our platform. He ensures that every page is easy to navigate and visually appealing, giving users a hassle-free experience.</p>              </center>
            </div>
            <div className="divss">
              <img src={men_3} alt="men" />
              <center>
                <h3 className='font-bold '> Carlos crafts</h3>
                <p>Carlos crafts compelling campaigns and manages customer feedback to keep our community informed and engaged. His focus on customer satisfaction helps build trust and loyalty.</p>              </center>
            </div>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="w-full md:w-[50%]">
          <div className="bg-white rounded-lg  h-[200px] text-center">
            <h1 className="text-black text-xl font-bold">What Sets Us Apart</h1>
            <ul className="text-base  text-center">
              <li>Wide range of vehicles to suit every need</li>
              <li>24/7 customer support for peace of mind</li>
              <li>Affordable pricing with no hidden fees</li>
              <li>Eco-friendly options for sustainable travel</li>
            </ul>
          </div>
        </div>

        {/* Achievements and Milestones */}
        <div className="w-full md:w-[50%]">
          <div className="bg-white rounded-lg  h-[200px] text-center">
            <h1 className="text-black text-xl font-bold">Achievements and Milestones</h1>
            <ul className="text-base  text-center">
              <li><b>Number of customers served:</b> 5000+ Happy Customers</li>
              <li><b>Awards or recognitions:</b> Best Car Rental Platform 2024</li>
              <li><b>Partnerships or collaborations:</b> Collaborations with brands and insurance companies</li>
            </ul>
          </div>
        </div>

        {/* Testimonials */}
        <div className="container">
          <div style={{ width: "100%", marginTop: 20 }}>
            <center>
              <h1
                style={{
                  display: "inline",
                  boxShadow: "1px 1px 1px",
                  padding: 8,
                  backgroundImage: "radial-gradient(white , rgb(180, 215, 228))",
                  borderRadius: 10
                }}
              >
                Testimonials{" "}
              </h1>
            </center>
          </div>
          <div className="w-[200px]">
            <img src={men_1} alt="men" />
            <center>
              <h3> John </h3>
              <h3> Rating : 5/5 </h3>
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
            </center>
          </div>
          <div className="w-[200px]">
            <img src={men_2} alt="men" />
            <center>
              <h3> Michael </h3>
              <h3> Rating : 5/5 </h3>
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
            </center>
          </div>
          <div className="w-[200px]">
            <img src={men_3} alt="men" />
            <center>
              <h3> Carlos crafts </h3>
              <h3> Rating : 5/5 </h3>
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
            </center>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
