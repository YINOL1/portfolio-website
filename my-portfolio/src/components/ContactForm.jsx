import './ContactForm.css';

export default function ContactForm() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-card">
        <h2>Let's connect!</h2>
        <p>Feel free to reach out if you have questions, disscusions, or to say hi!</p>

        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>

          <label>
            Email
            <input type="email" placeholder="your-email@example.com" />
          </label>

          <label>
            Message
            <textarea rows="5" placeholder="Type your message here..." />
          </label>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
