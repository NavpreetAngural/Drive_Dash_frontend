import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router'; // Fixed import
import { CalendarCheck, Car, Gauge, Users, Edit } from 'lucide-react';
import { baseURL } from '../../config';
import axiosinstance from '../../axiosinstance';
import gsap from 'gsap';

const HirerHome = () => {
  const [total, setTotal] = useState("")
  const fullname = localStorage.getItem('fullname');
  const role = localStorage.getItem('role');
  const email = localStorage.getItem('email');
  const roleRef = useRef(null)
  const vehicleRef = useRef(null)
  const bookRef = useRef(null)
  const myBookingRef = useRef(null)
  const addVehicleRef = useRef(null)
  const manageVehicleRef = useRef(null)

  useEffect(() => {
    gsap.to(roleRef.current, {
      duration: 1,
      y: 50,
    }),
      gsap.to(vehicleRef.current, {
        duration: 1,
        x: 30,
      }),
      gsap.to(bookRef.current, {
        duration: 1,
        x: -30,
      }),
      gsap.to(myBookingRef.current, {
        duration: 1,
        opacity: 1,
      });

    gsap.to(addVehicleRef.current, {
      duration: 1,
      opacity: 1,
    });

    gsap.to(manageVehicleRef.current, {
      duration: 1,
      opacity: 1,
    })

  }, []);



  useEffect(() => {
    totalVehicles()
  })

  const totalVehicles = async () => {
    try {
      const response = await axiosinstance.get(`${baseURL}/vehicle/manage/${email}`)
      setTotal(response.data.length)
    }
    catch (err) {
      console.log("Error while fetching vehicles:", err);
    }
  }

  return (
    <div className="min-h-screen !px-8 !py-12 flex justify-center ">
      <div className="max-w-7xl w-full">
        {/* Welcome Banner */}
        <div ref={roleRef} className=" bg-white/70 backdrop-blur-md rounded-3xl !p-10 text-center  !mb-16">
          <h1 className="text-4xl font-bold text-gray-800 !mb-2">Welcome, {fullname} 👋</h1>
          <p className="text-xl text-gray-700">
            Role: <span className="text-blue-600 font-semibold">{role}</span>
          </p>
          <p className="!mt-4 text-gray-600 text-lg italic">
            "Ready to manage your fleet and drive success? Let’s get started!"
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 !gap-20 !mb-16">
          <div ref={vehicleRef} className="bg-white/70 rounded-xl !p-6 shadow text-center">
            <Gauge className="text-indigo-600 mx-auto !mb-3" size={24} />
            <h3 className="text-xl font-semibold">Total Vehicles</h3>
            <p className="text-3xl font-bold text-gray-700 !mt-2">{total}</p>
          </div>
          <div ref={bookRef} className="bg-white/70 rounded-xl !p-6 shadow text-center">
            <CalendarCheck className="text-green-600 mx-auto !mb-3" size={24} />
            <h3 className="text-xl font-semibold">Bookings</h3>
            <p className="text-3xl font-bold text-gray-700 !mt-2">7</p>
          </div>

        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 !gap-12">
          {/* My Bookings */}
          <Link ref={myBookingRef} style={{ opacity: 0 }}
            to="/hirerdashboard/viewbookings"
            className="group bg-white/60 backdrop-blur-lg border border-gray-200 !p-8 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-6 !mb-6">
              <CalendarCheck className="text-blue-600 group-hover:text-blue-800" size={36} />
              <h3 className="text-2xl font-semibold text-gray-800">My Bookings</h3>
            </div>
            <p className="text-gray-600 text-lg">
              View and manage all your bookings in one place.
            </p>
          </Link>

          {/* Add Vehicle */}
          <Link ref={addVehicleRef}
            to="/hirerdashboard/addvehicle" style={{ opacity: 0 }}
            className="group bg-white/60 backdrop-blur-lg border border-gray-200 !p-8 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-6 !mb-6">
              <Car className="text-green-600 group-hover:text-green-800" size={36} />
              <h3 className="text-2xl font-semibold text-gray-800">Add Vehicle</h3>
            </div>
            <p className="text-gray-600 text-lg">
              Easily add new vehicles to your fleet.
            </p>
          </Link>

          {/* Support */}
          <Link ref={manageVehicleRef}
            to="/hirerdashboard/managevehicle" style={{ opacity: 0 }}
            className="group bg-white/60 backdrop-blur-lg border border-gray-200 !p-8 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-6 !mb-6">
              <Edit className="text-purple-600 group-hover:text-purple-800" size={36} />
              <h3 className="text-2xl font-semibold text-gray-800">Manage Vehicles</h3>
            </div>
            <p className="text-gray-600 text-lg">
              Manage you own Added Vehicles from here
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HirerHome;
