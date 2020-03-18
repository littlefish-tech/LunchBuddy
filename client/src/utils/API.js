import axios from "axios";

export default {
    getLunches: function() {
        return axios.get("/api/lunches");
    },

    saveLunch: function(lunch) {
        console.log("lunch");
        return axios.post("/api/lunches", lunch);
    },
    
    deleteLunch: function(id) {
        console.log("You are deleting group" + id)
        return axios.delete("/api/lunches/" + id)
    },
    updateLunch: function(id, attendeeCount){
        return axios.put("/api/lunches/" + id,{$inc: {attendees:+1}});
    },

    getYelpApi: function(restaurant) {

        return axios.get("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term="+ restaurant + "&location=94111",{
        
            headers: {
            Authorization: 'Bearer EGAEY_VMQ-b52IDl7iItiMgpKvRRphqB-cZRV4eRnlZIZ6fED9UV1WksLFEgUhVvwmNzlY_txJXVnHHPDSqjIUQ70KDTY_Ey6H5hQ6wNO6Gx6xZHh77oGU3fW3kuXnYx'
            }
            // params: {
            //     restaurant: restaurant,
            // }
           
    })
},


getUserName: function() {
    return axios.get("/api/users");
},

saveUsers: function(user) {
    console.log("You have successfully save the user!!!!!!!!!!!!!!!!!")
    return axios.post("/api/users", user);
},

};