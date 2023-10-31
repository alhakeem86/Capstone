import html from "html-literal";

export default state => html`
 <section id="story-a">
    <form id="story-z" method="POST" action="">
      <h2>Write your Story</h2>
      <div>
      <label for="story"> Write your story</label>
      <input
          type="text"
          name="story"
          id="story"
          placeholder="write your story"
          required
        />
     <input type="submit" name="submit" value="send" />
    </form>

  </section>

</div>
<section id="story-x">
    <table id="story-y">
      <tr>
        <th>story list</th>

      </tr>
      ${state.storyapi
        .map(api => {
          return `<tr><td>${api.story}</td></tr>`;
        })
        .join("")}
    </table>
  </section>
`;
