import React, { useState } from "react";

const Contact = ({ data }) => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  if (!data) return null;

  const name = data.name;
  const street = data.address.street;
  const city = data.address.city;
  const state = data.address.state;
  const zip = data.address.zip;
  const phone = data.phone;
  const email = data.email;
  const message = data.contactmessage;

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // No backend wired. Simulate success.
    setTimeout(() => setStatus('sent'), 800);
  };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{message}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form onSubmit={onSubmit} id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  size="35"
                  id="contactName"
                  name="name"
                  onChange={onChange}
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  size="35"
                  id="contactEmail"
                  name="email"
                  onChange={onChange}
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  size="35"
                  id="contactSubject"
                  name="subject"
                  onChange={onChange}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="15"
                  id="contactMessage"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                ></textarea>
              </div>

              <div>
                <button className="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Submit'}
                </button>
              </div>
            </fieldset>
          </form>

          {status === 'sent' && (
            <div id="message-success" style={{ marginTop: 12 }}>
              <i className="fa fa-check"></i>Your message was sent (simulated). Thank you!
            </div>
          )}
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {name}
              <br />
              {street} <br />
              {city}, {state} {zip}
              <br />
              <span>{phone}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
