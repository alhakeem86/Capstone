import { Header, Nav, Main, Footer } from "./components";

import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";

// Make sure that dotenv.config(); is placed after all of you import statements
dotenv.config();

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `${Header(state)} ${Nav(
    store.Links
  )} ${Main(state)} ${Footer()}`;
  afterRender(state);
  router.updatePageLinks();
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
  if (state.view === "Yourstory") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const requestData = {
        story: inputList.story.value
      };

      console.log("request Body", requestData);
      axios
        .post(`${process.env.YOUR_STORY_API}/yourstories`, requestData)
        .then(response => {
          store.Yourstory.storyapi.push(response.data);
          router.navigate("/Yourstory");
        })
        // If there is an error log it to the console
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }
  if (state.view === "Activity") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      // put axios call for activities here

      axios
        .get(`${process.env.YOUR_STORY_API}/activities`)
        .then(response => {
          store.Activity.showActivity = response.data;
          router.navigate("/Activity");
        })
        // If there is an error log it to the console
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }
}

router.hooks({
  before: (done, params) => {
    // We need to know what view we are on to know what data to fetch
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      // New Case for the Home View
      case "Home":
        axios
          // Get request to retrieve the current weather data using the API key and providing a city name
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`
          )
          .then(response => {
            // Convert Kelvin to Fahrenheit since OpenWeatherMap does provide otherwise
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            // Create an object to be stored in the Home state from the response
            store.Home.weather = {
              city: response.data.name,
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              description: response.data.weather[0].main
            };

            // An alternate method would be to store the values independently
            /*
      store.Home.weather.city = response.data.name;
      store.Home.weather.temp = kelvinToFahrenheit(response.data.main.temp);
      store.Home.weather.feelsLike = kelvinToFahrenheit(response.data.main.feels_like);
      store.Home.weather.description = response.data.weather[0].main;
      */
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;
      case "Yourstory":
        // New Axios get request utilizing already made environment variable
        axios
          .get(`${process.env.YOUR_STORY_API}/yourstories`)
          .then(response => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            console.log("response", response);
            store.Yourstory.storyapi = response.data;
            done();
          })
          .catch(error => {
            console.log("It puked", error);
            done();
          });
        break;

      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();

const form = document.getElementById("d");
//create a variable with a value that comes from a query selector
form.addEventListener("submit", event => {
  //query the DOM for the "form" tag and  adding an event listener "submit" event and a function
  event.preventDefault();
  //prevent an events behavior from happening
  window.alert("The form was submitted!");

  const inputs = event.target.elements;
  console.log("form's input elements: ", inputs);

  Array.from(inputs).forEach(input => {
    console.log(
      `This input is named ${input.name} and has a value of ${input.value}`
    );
  });
});
