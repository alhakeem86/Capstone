import html from "html-literal";

export default state => html`
 <section id="story-a">
    <form id="story-z" method="POST" action="">
      <h2 class="heading-story">Write your Story</h2>
      <div>
      <label for="story" class="label-story"> </label>
      <input
          type="text"
          name="story"
          id="write-story"
          placeholder="write here"
          required
        />
     <input class = "input-story" type="submit" name="submit" value="send" />
    </form>

  </section>

</div>
<section id="story-x">
    <table id="story-y">
      <tr>
        <th>YOUR STORY</th>

      </tr>
      ${state.storyapi
        .map(api => {
          return `<tr><td>${api.story}</td></tr>`;
        })
        .join("")}
    </table>
  </section>
`;
