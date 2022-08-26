import "./About.css";

const About = () => {
  return (
    <main className="About">
      <div className="bg-image"></div>
      <section>
        <h2>About</h2>
        <p className="p-1">
          This page is dedicated to my bootcamp instructor. Over the past couple
          months, he taught us many tips and tricks regarding JavaScript.
          However, one piece of advice never sat well with me. He'd always say:{" "}
        </p>
        <blockquote cite="my-instructor">
          <em>
            "You can call your variables anything. You can call them unicorn or
            blueberries. But that wouldn't be appropriate, now would it?"
          </em>
        </blockquote>
        <p className="p-2">
          The first time I heard this, I was in shock. Why <em>can't</em> we use
          unicorns and blueberries? What did they ever do to you? But it wasn't
          enough for him. He'd say this many times during our class, like he had
          some personal vendetta. So here I am, set out on a journey to show
          him:
        </p>
        <p className="p-3">Maybe it is appropriate.</p>
      </section>
    </main>
  );
};

export default About;
