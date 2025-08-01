import React, { useEffect, useState } from 'react'
import foot_banner from "../assets/images/foot_banner.avif"
import men_1 from "../assets/images/men_1.jpg"
import men_2 from "../assets/images/men_2.jpg"
import men_3 from "../assets/images/men_3.jpg"
import banner_2 from "../assets/images/banner_2.avif"
import banner_3 from "../assets/images/banner_3.avif"
import rent_4 from "../assets/images/rent_4.avif"
import { NavLink } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css"
import { baseURL } from '../../config'
import axios from 'axios'


const Home = () => {

    const [vehicles, setVehicles] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        viewVehicles()
    }, [])
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const viewVehicles = async () => {
        try {
            const response = await axios.get(`${baseURL}/vehicle/view`)
            setVehicles(response.data)
            console.log(response.data)
        }
        catch (err) {
            console.log("failed to display vehicles");
        }
    }

    return (

        <>
            <Navbar />
            <div >
                <main >
                    <one-section >
                        <div className="w-full mx-0 px-0 flex flex-col items-center justify-center top-0">
                            <div className="w-[100%]" >
                                <Slider {...settings}>
                                    <div>
                                        <a href={banner_3}>
                                            <img src={banner_3} alt="Slide 1" className="w-full h-full sm:h-[300px] md:h-[400px] lg:h-[600px]  rounded-lg"
                                            />
                                        </a>
                                    </div>
                                    <div>
                                        <a href={rent_4}>
                                            <img src={rent_4} alt="Slide 2" className="w-full h-full sm:h-[300px] md:h-[400px] lg:h-[600px] rounded-lg"
                                            />
                                        </a>
                                    </div>

                                    <div>
                                        <a href={banner_2}>
                                            <img src={banner_2} alt="Slide 4" className="w-full h-full sm:h-[300px] md:h-[400px] lg:h-[600px] rounded-lg"
                                            />
                                        </a>
                                    </div>

                                </Slider>
                            </div>
                        </div>
                    </one-section>

                    <section>
                        <div className="w-full mt-5 mb-5 flex justify-evenly">
                            <div style={{ width: "100%", paddingTop: 25, marginBottom: 30 }}>
                                <center>
                                    <h1
                                        style={{
                                            display: "inline",
                                            boxShadow: "1px 1px 1px",
                                            padding: 8,
                                            backgroundImage: "radial-gradient(white , rgb(180, 215, 228))",
                                            borderRadius: 10,
                                        }}
                                    >
                                        Featured Vehicles
                                    </h1>
                                </center>
                            </div>
                        </div>

                        <div className="flex rounded-lg justify-around   mx-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-16 w-[90%]">
                                {vehicles.map((vehicle, index) => (
                                    <div key={index} className="divs flex flex-col items-center border-white">
                                        <a href={vehicle.url} target="_blank" rel="noopener noreferrer">
                                            <img
                                                src={vehicle.url}
                                                alt="Vehicle"
                                                className="w-full h-[200px] rounded-lg object-cover"
                                            />
                                        </a>
                                        <h3 className="text-lg font-semibold mt-2">{vehicle.vehicleName}</h3>
                                        <h3 className="text-lg">{vehicle.rentPerDay} rs.</h3>
                                        <button className="bg-gray-300 w-[100px] h-[30px] text-black rounded-lg mt-2 hover:bg-gray-400 transition-all">
                                            <NavLink to="/addbooking">Add Booking</NavLink>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>


                    <third-section>
                        <div

                            className="container-2"
                        >
                            <div style={{ width: "100%", padding: 25 }}>
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
                                        Why Choose Us ?
                                    </h1>
                                </center>
                            </div>
                            <div className="left-section">
                                <ul>
                                    <li>
                                        <h2>
                                            {" "}
                                            <i className="fa-solid fa-car"> </i> Wide Range of Vehicles
                                        </h2>
                                    </li>
                                    <p>
                                        Choose from a diverse fleet of vehicles, including cars, bikes,
                                        scooters, SUVs.
                                    </p>
                                    <br />
                                    <li>
                                        <h2>
                                            <i className="fa-solid fa-mobile-retro"> </i> Easy Online
                                            Booking
                                        </h2>
                                    </li>
                                    <p>
                                        Book your vehicle in just a few clicks with our user-friendly
                                        platform."
                                    </p>
                                    <br />
                                    <li>
                                        <h2>
                                            <i className="fa-solid fa-seedling" /> Environmentally Friendly
                                            Options
                                        </h2>
                                    </li>
                                    <p>
                                        Choose from our range of eco-friendly vehicles, including electric
                                        and hybrid cars.
                                    </p>
                                    <br />
                                    <li>
                                        <h2>
                                            <i className="fa-solid fa-wallet" /> Fast and Secure Payments
                                        </h2>
                                    </li>
                                    <p>
                                        Secure payment options with instant confirmation for hassle-free
                                        bookings.
                                    </p>
                                    <br />
                                </ul>
                            </div>
                            <div className="right-section">
                                <ul>
                                    <li>
                                        <h2>
                                            <i className="fa fa-star " /> Positive Customer Reviews
                                        </h2>
                                    </li>
                                    <p>Rated 4.8/5 by thousands of satisfied customers.</p>
                                    <br />
                                    <li>
                                        <h2>
                                            <i className="fa-solid fa-money-bill-transfer" /> No Deposit
                                            Required
                                        </h2>
                                    </li>
                                    <p>Enjoy zero deposit requirements on most vehicles</p>
                                    <br />
                                    <li>
                                        <h2>
                                            <i className="fa-solid fa-xmark" /> Free Cancellation
                                        </h2>
                                    </li>
                                    <p>
                                        Cancel or modify your booking for free up to 24 hours before
                                        pickup.
                                    </p>
                                    <br />
                                    <li>
                                        <h2>
                                            <i className="fa-solid fa-gear" /> Get Your Own Modified Vehicle
                                        </h2>
                                    </li>
                                    <p>
                                        You can tell us which type of vehicle you wants any type of
                                        customization vehcile
                                    </p>
                                    <br />
                                </ul>
                            </div>
                        </div>
                    </third-section>
                    <forth-section>
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
                            <div className="divss">
                                <a href={men_1}>
                                    <img src={men_1} alt="men" />
                                </a>
                                <center>
                                    <h3 className='font-bold '> John </h3>
                                    <h3> Rating : 5/5 </h3>
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                </center>
                            </div>
                            <div className="divss">
                                <a href={men_2} target='blank'>
                                    <img src={men_2} alt="men" />
                                </a>
                                <center>
                                    <h3 className='font-bold '> Micheal </h3>
                                    <h3> Rating : 5/5 </h3>
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                </center>
                            </div>
                            <div className="divss">
                                <a href={men_3} target='blank'>
                                    <img src={men_3} alt="men" />
                                </a>
                                <center>
                                    <h3 className='font-bold '>  Carlos Crafts </h3>
                                    <h3> Rating : 5/5 </h3>
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                </center>
                            </div>
                        </div>
                    </forth-section>
                    <fifth-section>
                        <div className="container-3">
                            <div style={{ width: "100%" }}>
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
                                        Offers{" "}
                                    </h1>
                                </center>
                            </div>
                            <div style={{ width: "75%", alignItems: "center" }}>
                                <a href={foot_banner} target='blank'>
                                    <img src={foot_banner} className="w-full h-auto rounded-2xl shadow-xl object-cover max-h-[500px]" />
                                </a>
                            </div>
                            <div style={{ width: "100%" }}>
                                <center>
                                    <NavLink to="/">
                                        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
                                            Sign Up
                                        </button>
                                    </NavLink>
                                    <br />
                                    <br />
                                    <h2 style={{ marginLeft: 15 }}> To get this offer...</h2>
                                </center>
                            </div>
                        </div>
                    </fifth-section>
                </main>
            </div>
            <Footer />
        </>

    )
}

export default Home
