import html from "html-literal";

export default state => html`
  <form>
    <label for="name">Name:</label>
    <input type="text" name="name" id="name" placeholder="Full Name" required />
    <label for="email">Email:</label>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="you@somewhere.com"
    />
    <label for="fone">Phone:</label>
    <input type="tel" name="fone" id="fone" placeholder="555-555-5555" />
    <input type="submit" />

    <div>
      <label for="msg">Enter your message:</label>
      <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
    </div>
  </form>
`;
