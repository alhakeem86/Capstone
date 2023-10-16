import html from "html-literal";
import myImage from "/assets/img/cp photo kids.jpg";
export default state => html`
  <div class="welcome">
    <h2 class="za">What is Cerebral Palsy?</h2>
    <p>
      <strong>Cerebral Palsy (CP)</strong> is a term describing a group of
      permanent movement and posture disorders caused by a non-progressive
      injury to the immature brain. It is the most prevalent cause of physical
      impairment in children. In addition, persons with CP may also have
      epilepsy and difficulties of cognition, communication, feeding, vision or
      hearing, as well as secondary musculoskeletal problems
    </p>
    <img src="${myImage}" />
  </div>
  <div class="simple">
    <p>
      The prevalence of CP is around 2 per 1000 live births. Based on neurologic
      findings CP is divided in 3 sub-types<sup>2</sup>, all of which have in
      common an abnormal pattern of movement and posture:
    </p>
    <h4>Spastic CP</h4>
    <p>
      Increased muscle tone with the presence of pathological reflexes
    </p>
    <h4>Dyskinetic CP</h4>
    <p>
      Involuntary, uncontrolled, repetitive and sometimes stereotype movements
    </p>
    <h4>Ataxic CP</h4>
    <p>
      Loss of normal muscle coordination, so movement with abnormal strength,
      rhythm and precision such as hypermetrics (missing the object of the
      intended movement) and dysdiadochokinetics (not being able to alternate
      quickly a direction of movement)
    </p>
    <p>
      Mobility and self-initiated movement abilities can be classified according
      to the Gross Motor Function Classification System (GMFCS)<sup>3</sup>. All
      children with CP can be classified in five different levels:
    </p>
    <p>
      <strong>Level 1</strong>: only limitations in advanced gross motor skills
      (running, jumping, hopping)
    </p>
    <p>
      <strong>Level 2</strong>: walks without aid; limitation in walking outside
      and in direct surroundings of home environment
    </p>
    <p>
      <strong>Level 3</strong>: walks with aid, limitations in walking outside
      and in direct surroundings of home environment
    </p>
    <p>
      <strong>Level 4</strong>: moves independently with limitations: children
      are transported or use manual or electric wheelchair
    </p>
    <p>
      <strong>Level 5</strong>: severely limited independent movement, even with
      the use of aids
    </p>
    <p>
      There may also exist problems with vision, hearing, sensation, cognition
      or seizures. The origin of the brain lesion is often unknown. Recognised
      risk factors include prematurity, infection during pregancy or early
      postnatal life. Among others, complications at delivery and head trauma in
      early life are known risk factors.
    </p>
    <p>
      The diagnostic process is conducted by clinicians and often involves blood
      analysis and medical imagery (ultrasound, MRI scans etc.).
    </p>
    <p>
      Treatment is best organised and executed by multidisciplinary teams
      according to their local facilities. Early treatment that is
      individualised and adapted to the needs of the family brings the best
      long-term results. The aim is optimal participation in everyday life.
    </p>
  </div>
`;
