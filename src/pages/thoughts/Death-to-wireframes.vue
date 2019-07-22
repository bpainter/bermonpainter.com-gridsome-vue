<template>
  <Layout>
    <article class="thought">
      <h1>Death to wireframes, long live rapid prototyping</h1>

      <g-image src="~/assets/images/death-to-wireframes.jpg" />

      <p>Have you ever heard a client, product owner, or stakeholder praise wireframes? Do you, as a designer, love spending hours creating or updating your own wireframes? No, me neither. For years we've tried to maintain the metaphor of the wireframe as part of our web design process. It's time to give up the ghost and finally let wireframes die.</p>

      <p>Since its beginning, the wireframe has been used to outline content placement, order components on the page and describe interactions in excruciating detail. In a traditional waterfall model, wireframes are one of the initial pieces of documentation that inform not only structure, but also content, design and development. The lines can be a bit blurry as to who creates them. Wireframes are more commonly created by an information architect who fine tunes the relationship between information, content and categories or a designer who focuses on visual relationships and aesthetics. In a typical process wireframes are created and given to a designer to make them "pretty". The prettified wireframes then pass to the developers to make them work.</p>

      <h2>The pitfalls of wireframes</h2>

      <p>This one-way communication methodology is where many problems in communication start to bubble up. Teammates further down the waterfall feel like they've been limited in the decisions they make moving forward. Wireframes amount to a paint-by-numbers system in which the designer uses their preferred design tool to essentially paint over the wireframe, limiting their ability to problem solve.</p>

      <p>Wireframes often provide too much information, too early. A series of annotated wireframes are some of the first things a stakeholder is shown for sign off. This creates a lock-in for designers and developers as they begin their work and limits them in exercising their creativity. In being static, wireframes are incapable of demonstrating interactions and instead attempt to describe them, heavily.</p>

      <p>Obviously, depending on the complexity and scope of a project, wireframes need to be heavily annotated and documented as part of a functional specification so those further down the waterfall know what is intended. But people don't read documentation. Trying to describe the functionality of complex interactions is difficult. Designers and developers interpret annotations, sometimes correctly, sometimes not.</p>

      <p>After a wireframe is passed downstream to the designers, they pass the wireframe and their mockups to the developers. The developers receive a large packet of documentation. By this time, the first round of wireframes that have made it to the developers, have already started to be changed. The wireframes become out of date quickly, which creates a constant cycle of never-ending revisions where those further down the waterfall become more out of sync with those at the beginning.</p>

      <p>Consider rapid prototyping as an alternative to improve communication across multiple disciplines. There are four primary tenets to rapid prototyping:</p>

      <ul>
        <li>Creation is a shared activity. Effective products and services require the involvement and communication of everybody in critiquing, evaluating and creating.</li>
        <li>Create only what's necessary. You need just enough that will gather client or user feedback without bogging them down with unnecessary details.</li>
        <li>Create systems not pages. Approach and design for problems holistically instead of focusing on a single page. This allows us to create a series of modules that can be reused across the entire site.</li>
        <li>Create as little waste as possible. Regardless of your role and who you work for, they're paying you to do one thing: ship something amazing.</li>
      </ul>

      <p>A rapid prototype will allow the team to quickly iterate over a website or application, validate design decisions and gather feedback. The early stages of a rapid prototype should be created in HTML, CSS and JavaScript with little to no aesthetics. By creating a prototype that focuses initially on content and functionality, stakeholders don't get distracted. As well as easing client communications, rapid prototyping improves team liaison. By moving the rapid prototype to the frontend it will require various disciplines to work together. As individuals work together they will also learn from one another and improve their shared knowledge. The prototype becomes the specification. HTML is a markup language and its strength is to convert what would typically go into a word processor to the web. This will create inherit documentation where annotations can be applied as comments or within the markup itself.</p>

      <h2>Process guidelines</h2>

      <p>Any process should be agile. Simple guidelines for a rapid prototyping process can be broken down into four steps that should happen concurrently:</p>

      <ul>
        <li><b>Strategy</b><br /> A user experience strategist and/or business analyst has initial conversations to define the business and users needs. They would compile what they've discovered into user research, create artifacts like user stories, a content strategy and personas. This information is later used to inform future design decisions.</li>
        <li><b>Structure Wireframes</b><br/> existed in the past to create structure. This can be done through sketching. Sketching is a powerful tool and anybody can do it. Sketching sessions should be freeform. Their purpose is to rapidly explore layout concepts with the team before they are committed to code.</li>
        <li><b>Aesthetics Structure</b><br />and aesthetics should be created separately. When creating an aesthetic it's best to not create full mockups. We only want to produce the minimal artifacts necessary. Create artifacts that define colours, typography, textures, and the brand, without providing too much detail that could derail design conversations with stakeholders or cause them to focus on pieces of the design that aren't as important (ie the size of their logo). Style tiles and element explorations are preferred. These allow us to abstract out design to create a design system that can be turned into a style guide.</li>
        <li><b>Interactions</b><br/> As sketches are completed they can be turned into HTML, CSS, and JavaScript. In the early stages of the prototype the aesthetic isn't necessary. This allows us to centre discussions around interactions, content flow, and accessibility. An entire site can be created in a gray-boxed fashion without aesthetics. As bits and pieces of the design system (grid systems, typography, modules) are completed pieces can be layered into the rapid prototype as a theme with CSS.</li>
      </ul>

      <p>The primary concepts behind rapid prototyping help to tear down silos, foster cross-discipline collaboration and provide all members of your team the opportunity to participate in the design process. Rapid prototypes allow the team to explore and validate a design idea, its interactions and communicate the results to others while reducing waste and time-to-market. It's a useful tool in any team's toolbox that provides a more powerful way to explore and communicate design solutions.</p>
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Death to wireframes, long live rapid prototyping'
  }
}
</script>

<style lang="scss">
.thought {
  p, li {
    line-height: 1.6;
  }
  ul, ol {
    padding-left: 14px;
  }
  li {
    margin-bottom: 12px;
  }
  img {
    margin-bottom: 20px;
    max-width: 540px;
    width: 100%;
  }
}
</style>
