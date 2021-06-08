import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
// import { Image } from "tailwind-react-ui";
// import { Box } from "tailwind-react-ui";

function Cards() {
  const [appointment, setAppointment] = useState([]);
  const [date, setDate] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // console.log(localStorage.getItem("token"));
      let mytoken = localStorage.getItem("token");
      let drId = localStorage.getItem("drId");
      const headers = {
        Authorization: `Bearer ${mytoken}`,
        "My-Custom-Header": "foobar",
      };
      const req = await axios.get(
        `https://capstone-health.herokuapp.com/appointment/appointments/${drId}`,
        { headers }
      );

      setAppointment(req.data.data);
      setDate(req.data.data[0].date);
    }

    fetchData();
  }, []);

  console.log(appointment);
  console.log(date);

  return (
    <div>
      <Dashboard />
      <div className=" justify-center text-center space-x-4">
        <h1> Today : {date} </h1>
      </div>
      <div className="flex justify-center space-x-4">
        {appointment.map((data) => (
          <div className="box-border  h-32 w-33% p-4 mt-12 border-4 ...">
            <div> Email : {data.email}</div>
            <div> Name : {data.name}</div>
            <div> Token No : {data.aptoken}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
