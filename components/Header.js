import html from "html-literal";

export default state => html`
  <header class="welcomeheader">
    <h1 class="headingweb">${state.header}</h1>
  </header>
`;
