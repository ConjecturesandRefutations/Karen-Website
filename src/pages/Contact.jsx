import { useState } from "react";

export default function Contact() {

  return (
    <div className="contact">
          <form action="https://formsubmit.co/karen.natharen@gmail.com" method="POST" className="contact-form">

          <div className="form-wrapper">

            <label for="name" className="form-label">Name</label>

            <div className="input-wrapper">

              <input type="text" name="name" id="name" required placeholder="e.g John Doe" className="input-field"/>

              <ion-icon name="person-circle"></ion-icon>

            </div>

          </div>

          <div className="form-wrapper">

            <label for="email" className="form-label">Email</label>

            <div className="input-wrapper">

              <input type="email" name="email" id="email" required placeholder="e.g johndoe@mail.com"
                className="input-field"/>

              <ion-icon name="mail"></ion-icon>

            </div>

          </div>

          <div className="form-wrapper">

            <label for="phone" className="form-label">Phone</label>

            <div className="input-wrapper">

              <input type="tel" name="phone" id="phone" required placeholder="Phone Number" className="input-field"/>

              <ion-icon name="call"></ion-icon>

            </div>

          </div>

          <div className="form-wrapper">

            <label for="message" className="form-label">Message</label>

            <div className="input-wrapper">

              <textarea name="message" id="message" required placeholder="Write message..."
                className="input-field"></textarea>

              <ion-icon name="chatbubbles"></ion-icon>

            </div>

          </div>

          <button type="submit" className="btn btn-primary">Send</button>

        </form>
    </div>
  );
}