import html from "html-literal";

export default state => html`
 <div class="container">
    <h2 class="za-x">Connect With Me</h2>
    <p class = za-xx>We would love to respond to your queries and help you. Feel free to get in touch with us</p>
    <div class="contact-box">
      <div class ="contact-left">
        <h3>send your request</h3>
        <form id="d">
            <div class="input-row">
              <div class="input-group">
                <label>Name</label>
                <input type="text" placeholder="enter your name">
              </div>
              <div class="input-group">
                <label>Phone</label>
                <input type="phone" placeholder="enter your phone number">
              </div>

            </div>
            <div class="input-row">
                <div class="input-group">
                  <label>Email</label>
                  <input type=" Email" placeholder="enter your email">
                </div>

              <div class="input-group">
                <label>Subject</label>
                <input type="subject" placeholder="enter your subject">
                <input type="submit" />
              </div>

          </form>


    </div>
    <label>Text Meesage</label>
              <textarea  rows="5" placeholder="write your message"></textarea>
              <button type="submit">send</button>
  </div>
    <div class="contact-right">
      <h3>reach us</h3>
    <table>
      <tr>
        <td>email</td>
        <td>contactme@gmail.com</td>
      </tr>
      <tr>
        <td>phone</td>
        <td>555-555-5555</td>
      </tr>
      <tr>
        <td>Address</td>
        <td>#212 , ground floor,7th cross </td>
      </tr>

    </table>
    </div>
  </div>

`;
