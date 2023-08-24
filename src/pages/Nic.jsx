import React, { useState } from "react";
import $ from "jquery";

function Converter() {
  const [error, setError] = useState("");
  const [gender, setGender] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const handleFindClick = () => {
    setError("");
    setGender("");
    setYear("");
    setMonth("");
    setDay("");

    const NICNo = $("#nic").val();
    let dayText = 0;
    let birthYear = "";
    let birthMonth = "";
    let birthDay = "";
    let genderText = "";

    if (NICNo.length !== 10 && NICNo.length !== 12) {
      setError("Invalid NIC NO");
    } else if (NICNo.length === 10 && !$.isNumeric(NICNo.substr(0, 9))) {
      setError("Invalid NIC NO");
    } else {
      $(document).ready(function () {
        $("#find").click(function () {
          
          $("#error").html("");
          $("#gender").html("");
          $("#year").html("");
          $("#month").html("");
          $("#day").html("");

          var NICNo = $("#nic").val();
          var dayText = 0;
          var year = "";
          var month = "";
          var day = "";
          var gender = "";

          if (NICNo.length != 10 && NICNo.length != 12) {
            $("#error").html("Invalid NIC NO");
          } else if (NICNo.length == 10 && !$.isNumeric(NICNo.substr(0, 9))) {
            $("#error").html("Invalid NIC NO");
          } else {
            // Year
            if (NICNo.length == 10) {
              year = "19" + NICNo.substr(0, 2);
              dayText = parseInt(NICNo.substr(2, 3)); //
            } else {
              year = NICNo.substr(0, 4);
              dayText = parseInt(NICNo.substr(4, 3));
            }

            // Gender
            if (dayText > 500) {
              gender = "Female";
              dayText = dayText - 500;
            } else {
              gender = "Male";
            }

            if (dayText < 1 && dayText > 366) {
              $("#error").html("Invalid NIC NO");
            } else {
              //Month
              if (dayText > 335) {
                day = dayText - 335;
                month = "December";
              } else if (dayText > 305) {
                day = dayText - 305;
                month = "November";
              } else if (dayText > 274) {
                day = dayText - 274;
                month = "October";
              } else if (dayText > 244) {
                day = dayText - 244;
                month = "September";
              } else if (dayText > 213) {
                day = dayText - 213;
                month = "Auguest";
              } else if (dayText > 182) {
                day = dayText - 182;
                month = "July";
              } else if (dayText > 152) {
                day = dayText - 152;
                month = "June";
              } else if (dayText > 121) {
                day = dayText - 121;
                month = "May";
              } else if (dayText > 91) {
                day = dayText - 91;
                month = "April";
              } else if (dayText > 60) {
                day = dayText - 60;
                month = "March";
              } else if (dayText < 32) {
                month = "January";
                day = dayText;
              } else if (dayText > 31) {
                day = dayText - 31;
                month = "Febuary";
              }

              // Show Details
              $("#gender").html("Gender : " + gender);
              $("#year").html("Year : " + year);
              $("#month").html("Month : " + month);
              $("#day").html("Day :" + day);
            }
          }
        });
      });

      // 
      //setGender(`Gender: ${genderText}`);
      // setYear(`Year: ${birthYear}`);
      // setMonth(`Month: ${birthMonth}`);
      // setDay(`Day: ${birthDay}`);
    }
  };

  return (
    <center >
    
      <p style={{ color: "#000" }}>NIC Birth Day Finder</p>
      <p style={{ color: "#000" }}>Both New & Old Format</p>
    
   

<div className="form-container">
<input type="text" id="nic" placeholder="Nic Number"/>

<button id="find" onClick={handleFindClick} >
  Find
</button>
</div>

     
      <br />
      <br />
      <p id="error" style={{ color: "red" }}>
        {error}
      </p>
     
{/* <div className="form-container"> */}
<p id="gender" style={{ color: "#000" }} className="form-container">
        {gender}
      </p>
      <p id="year" style={{ color: "#000" }}className="form-container">
        {year}
      </p>
      <p id="month" style={{ color: "#000" }}className="form-container">
        {month}
      </p>
      <p id="day" style={{ color: "#000" }}className="form-container">
        {day}
      </p>
{/* </div> */}


    </center>
  );
}

export default Converter;
