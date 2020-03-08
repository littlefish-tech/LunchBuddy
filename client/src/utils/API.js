import axios from "axios";

// export default {
    // getLunches: function() {
    //     return axios.get("/api/lunches");
    // },

//     saveLunch: function(lunch) {
//         console.log("lunch");
//         return axios.post("/api/lunches", lunch);
//     }
// };

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRestaurant: function() {
    return axios.get("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + post.restaurant + "&location=94111");
  },
  getGroupDetail: function(id) {
    return axios.get("/api/lunches" + id);
  },

  getGroupList: function() {
    return axios.get("/api/lunches");
  }
};
