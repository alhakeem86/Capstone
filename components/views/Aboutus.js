import html from "html-literal";
import myImage7 from "/assets/img/myphoto.jpg";
export default state => html`
  <div class="welcome">
    <h2>About Me</h2>
    <img class="zaidphoto" src="${myImage7}" />
    <p>
      My name is Zaid Al-Hakeem, I am married, and I have a four-year-old
      daughter who has CP. I am currently a student at the Savvy Coders Academy.
      decided to create this website in order to provide assistance and benefit
      to people who have CP, as well as provide assistance to their families to
      benefit from the various types of information, activities and tools that
      they need during the day. I have experience in this field because my
      daughter has CP and I know what her needs and requirements are.<br />I
      hope to help, even if just a little, so that their lives will be better in
      the future.
    </p>
    <h2 class="za">Our Mission</h2>
    <ul>
      <li>To raise awareness of cerebral palsy in the community</li>
      <li>
        To assist those living with cerebral palsy to reach their maximum
        potential
      </li>
      <li>
        To work to see those living with cerebral palsy realize their place as
        equals in a diverse society
      </li>
    </ul>
    <h2>Our vision</h2>
    <p>
      The vision of this website is to create a Life Without Limits for people
      with disabilities.<br />We will accomplish this by becoming the recognized
      leader in providing information, support and guidance to children,
      families and adults living with CP in our province.<br />Adults with CP,
      other family members, care providers, educators and medical professionals
      also can turn to this website for information they can’t find anywhere
      else – information on topics ranging from treatment, funding and housing
      options to human rights, advocacy and special needs education. People
      whose lives are touched by CP know they can count on us to be here when it
      matters most.
    </p>
  </div>
`;
