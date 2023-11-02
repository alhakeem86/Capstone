import html from "html-literal";

export default state => html`
  <div class="container2">
    <h2>Let's find something for you to do ✌️</h2>

    <form id="form" class="form-1" method="POST">
      <select name="type" class="form-select1">
        <option value="" data-display="Select">Random type</option>
        <option value="education">Education</option>
        <option value="charity">Charity</option>
        <option value="recreational">Recreational</option>
        <option value="relaxation">Relaxation</option>
        <option value="busywork">Busywork</option>
        <option value="social">Social</option>
        <option value="diy">DIY</option>
        <option value="music">Music</option>
      </select>
      <select name="participants" class="form-select1">
        <option value="">Any number of people</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
        <button type="submit" class="submit-1">Go</button>
      </div>
      <div class= "activity-1">
        <h2>Your Activity is </h2><br><br>
        ${JSON.stringify(state.showActivity.activity)}
      </div>

    `;
