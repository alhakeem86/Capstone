import html from "html-literal";

export default state => html`
  <header class="welcomeheader">
    <h1 class="My Journey With CP">${state.header}</h1>
  </header>
`;
