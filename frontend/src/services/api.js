const API_URL = "http://localhost:5000";



export const apiRequest = async (endpoint, options = {}) => {


    const response = await fetch(`${API_URL}${endpoint}`, {


        headers: {

            "Content-Type": "application/json"

        },


        ...options


    });



    const data = await response.json();



    if(!response.ok){

        throw new Error(data.message || "API Error");

    }



    return data;


};