import html from "html-literal";

export default state => html`
 <section id="story-a">
    <form id="story-x" method="POST" action="">
      <h2>Write your Story</h2>
      <div>
      <label>Write your story</label>
              <textarea  rows="5" placeholder="write your story"></textarea>
              <button type="submit">send</button>
    </form>

  </section>
  <section id="story-b">
    <table id="story-c">
      <tr>
        <th>Yourstoryhere</th>
${state.pizzas
  .map(yourstoryx => {
    return `<tr><td>${yourstoryx.yourstoryhere}
    </td></tr>`;
  })
  .join("")}
    </table>
  </section>
</div>
`;
