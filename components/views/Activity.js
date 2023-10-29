import html from "html-literal";

export default state => html`
  <div class="alert-box">
    <p class="alert"></p>
  </div>

  <div class="form">
    <h1 class="heading">Register</h1>
    <input
      type="text"
      placeholder="name"
      autocomplete="off"
      class="name"
      required
    />
    <input
      type="email"
      placeholder="email"
      autocomplete="off"
      class="email"
      required
    />
    <input
      type="password"
      placeholder="password"
      autocomplete="off"
      class="password"
      required
    />
    <button class="submit-btn">register</button>
    <a href="/login" class="link">already have an account ? log in here</a>
  </div>
`;
