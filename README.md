### Welcome to LunchBuddy
#### Have a try of our app: https://mysterious-dusk-16372.herokuapp.com/
#### Why LunchBuddy?
##### The idea behind this application is to encourage people within the same company to go out and have lunch together. This can pose as a team-building construct for the company as a whole.

![gif](client/public/2.gif)

#### User Stories: ideas that we want
##### For this application, we want the user to be able to sign-up/ login and then create and/or join a group for lunch.
##### Once the group is created, we want other users to be able to click on that group and be able to join. The group will be created via a card and on that card and it will show what kind of food that group is going to go for for lunch.

### Backend Side:
### Models we have:
##### lunchesschema: we have lunchname, restaurant name, host person's name, lunchtype, lunch time, image about the restaurant and the restaurant link:
``` javascript
const lunchSchema = new Schema({
    lunchName: { type: String, required: true },
    restaurant: {type: String, required: true },
    host: {type: String, required: true },
    lunchType: {type: String, required: false },
    lunchTime: {type: String, required: true },
    image: {type: String, required: false},
    restaurantLink: {type: String, required: true },
    attendees: {type: Number}
});
```
``` javascript
userSchema: we have username and password
const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
});
```
#### Frontend Side:
##### Components: we use react build the frontend of this project. We have total 11 components
- Card
- DeleteBtn
- Footer
- Grid
- GroupButton
- Header
- JoinBtn
- LoginForm
- Nav
- Signup Form
- Wrapper
#### We have a util folder with API.js file to make all the HTTP request
``` javascript
    getLunches: function() {
        return axios.get("/api/lunches");
    },

    saveLunch: function(lunch) {
        return axios.post("/api/lunches", lunch);
    },
    
    deleteLunch: function(id) {
        return axios.delete("/api/lunches/" + id)
    },

    updateLunch: function(id, attendeeCount){
        return axios.put("/api/lunches/" + id,{$inc: {attendees:+1}});
    },

    getYelpApi: function(restaurant) {

        return axios.get("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term="+ restaurant + "&location=94111",{
        
            headers: {
            Authorization: 'Your_Yelp_API_Key'
            }
    })
},


getUserName: function() {
    return axios.get("/api/users/");
},

saveUsers: function(user) {
    return axios.post("/api/users", user);
}
```

#### Technologies we use in this project
- Bootstrap
- API’s(Yelp API)
- AJAX
- JSON
- Node.js
- React.js
- MongoDB
- Mongoose
- Axios(to make http request)
- Body Parser


#### Hope you are enjoying using our Lunchbuddy app and know more people at your company.