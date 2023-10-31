import html from "html-literal";

export default state => html`
 <section id="story-a">
    <form id="story-x" method="POST" action="">
      <h2>Write your Story</h2>
      <div>
      <label for="story"> Write your story</label>
      <input
          type="text"
          name=" story"
          id="story"
          placeholder="write your story"
          required
        />
     <input type="submit" name="submit" value="send" />
    </form>

  </section>
</div>
`;
