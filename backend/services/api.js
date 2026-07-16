const API_URL = "http://localhost:5000/api";



export const apiRequest = async(
    endpoint,
    method="GET",
    body=null
)=>{


    const token =
    localStorage.getItem("token");



    const options={

        method,

        headers:{

            "Content-Type":"application/json",

            Authorization:
            `Bearer ${token}`

        }

    };



    if(body){

        options.body =
        JSON.stringify(body);

    }



    const response =
    await fetch(

        `${API_URL}${endpoint}`,

        options

    );



    return await response.json();


};