import axios from "axios";

export default {
    getLunches: function() {
        return axios.get("/api/lunches");
    },

    saveLunch: function(lunch) {
        console.log("lunch");
        return axios.post("/api/lunches", lunch);
    },

    getYelpApi: function(restaurant) {
        return axios.get("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=pizza",{
        
            headers: {
                'Authorization':'Bearer B_U07YO8mxkLhKI8Tw-fStaN_VWDuqOPTOemMg0dIjsv-Cza1-ODOYMOfKc9s7LEBd9ntaC8ZlujDY7SNEgl763dHgfxinZIRA7FZTLADYJVdfMXNhy0XUTQ0LplXnYx'
            },
            // params: {
            //     restaurant: "pizza",
            // }
           
    }
        )}
};