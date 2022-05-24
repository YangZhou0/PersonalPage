import React, { Component } from "react";
import emailjs from "emailjs-com";

class Contact extends Component {
  render() {
    if (this.props.data) {
      var message = this.props.data.contactmessage;
    }

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
            <div>
              <button className="submit">
                <a
                  href={"mailto:yzhou3991@gmail.com"}
                  style={{ color: "inherit" }}
                  target="_blank"
                >
                  say hi
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
