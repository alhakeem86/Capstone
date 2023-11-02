import html from "html-literal";

import myImage from "/assets/img/girl-chair.jpg";

export default state => html`

<div class="welcome">
        <h2 class = "za">Welcome to our new website!</h2><br><h3>fast responsive,easily navigation</h3>
        <p>While redesigning our site, we wanted to make our content easily accessible the moment you want it wherever you are,Our new site is now fully responsive to any screen size – desktop, mobile or tablet!

          Not only is it important that you are able to access our content from any device but we also designed a site that allows you to easily find what you are looking for.</p>
  </div>
  <div class = "simple">
  <img class="ho-img" src="${myImage}" />
    <h3> Simple Navigation & Integrated Content</h3><br>
    <p>Our new site redesign features a new navigation and architecture, making it easier to find exactly what you are looking for. Our entire site is now broken into four main sections: <strong>CEREBRAL PALSY </strong>- a growing hub of information about Cerebral Palsy and include (definition, causes ,diagnosing elc...)
       <strong>ENTERTAINMENT</strong> - a place to explore the many ways for children and youth with CP and their families They will read and watch a lot of important information about CP and successful experiences of people with the same diagnosis and disability, <strong>EXERCISES</strong> -The most effective exercises for adults and kids with cerebral palsy will help them become as functional as possible and prevent secondary complications from worsening. <strong>FIND AN ACTIVITY</strong>-you can choice which activity you like and we will give you the options. <strong>YOUR STORY</strong>- You can share your story with us and contribute to helping others with your success steps <strong>ABOUT US</strong> - where you can learn more information about us and our team and finally <strong> CONTACT</strong> - Here you can communicate with us through many electronic means of communication  We've made huge improvements on the integration of content and related materials within each page allowing you to easily flow between content without getting lost. </p>
  </div>
    </div>
    <div class = "footer">
    <h3>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </h3>
</div>
    `;
