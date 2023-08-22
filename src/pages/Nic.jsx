import React, { useState } from "react";

const Nic = () => {
    const[nic, setNic] = useState("")
    const [gender, setGender] = useState("")
    const [year, setYear] = useState("")
    const [month, setMonth] = useState("")
    const [day, setDay] = useState("")
    const [error, setError] = useState("")

    const handleNicChange = (event) => {
        const nicValue = event.target.value
        setNic(nicValue)

        const dayText = parseInt(nicValue.substring(0, 9))
        let nicError = ""
        let nicGender = ""
        let nicYear = ""
        let nicMonth = ""
        let nicDay = ""
    
        if(nicValue.length !==10 && nicValue !==12){
            nicError = "Invalid NIC NO"
        }else if(!/^\d+$/.test(nicValue(0, 9))){
            nicError = "Invalid NIC No";
        }else{

            //Gender

            if(dayText > 500 ){
                nicGender = "Female"
                dayText = dayText - 500 
            }else{
                nicGender = "Male"
            }

            //Year 
            if(nicValue.length === 10){
                nicYear = "19" + nicValue.substring(0, 2)
            }else{
                nicYear = nicValue.substring(0, 4)
            }

            //Day & month
            if(dayText > 335){
                nicDay = dayText - 335
                nicMonth  = "December"

            }else if (dayText > 305){
                nicDay = dayText -305
                nicMonth = "November"

            }else if (dayText > 274){
                nicDay = dayText - 274
                nicMonth = "October"    

            }else if(dayText > 244){
                nicDay = dayText - 244
                nicMonth = "September"

            }else if(dayText > 213){
                nicDay = dayText - 213
                nicMonth = "Auguest"

            }else if(dayText > 182){
                nicDay = dayText - 182
                nicMonth = "July"

            }else if (dayText > 152){
                nicDay = dayText -152
                nicMonth = "June"

            }else if (dayText > 121){
                nicDay = dayText - 121
                nicMonth = "May";

            }else if (dayText > 91){
                nicDay = dayText - 91
                nicMonth = "April"

            }else if (dayText > 60){
                nicDay = dayText - 60
                nicMonth = "March"

            }else if(dayText > 31){
                nicDay = dayText - 31
                nicMonth = "Febuary";

            }else if (dayText < 32 ){
                nicMonth = "January"
                nicDay = dayText
            }

        }

        setError(nicError)
        setGender(nicGender)
        setYear(nicYear)
        setMonth(nicMonth)
        setDay(nicDay)
    }
}