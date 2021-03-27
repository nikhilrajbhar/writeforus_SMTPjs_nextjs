import React from 'react';
// import { email } from "./email";


export default function ContactUs() { 
        
    

    function sendEmail(e) {
      console.log("running");
      function email() {
        var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; let t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { let a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { let e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { let t = Email.createCORSRequest("GET", e); t.onload = function () { let e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { let t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
        return  Email ;  }
      e.preventDefault();

      console.log("running 2");
      var Email =email();

      Email.send({
        Host: "smtp.gmail.com",
        Username: "nikhilbhardwaj130496@gmail.com",
        Password: "dopamine#7",
        To: 'nikhilbhardwaj130496@gmail.com',
        From: "nikhilbhardwaj130496@gmail.com",
        Subject: "This is the subject",
        Body: `<h3>Hello  testing Nikhil Rajbhar,</h3> </br> You got a new message from and its email id is  </br> 
            I have visited your website the collector and I want to join your community by becoming an author.</br>
            <h3>Educationals Qualification:   </h3> </br>`});
      
    console.log("running 3");
    }
    return (
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label><br/>

        <input type="text" name="user_name" />
        <label>Email</label><br/>

        <input type="email" name="user_email" />
        <label>Message</label><br/>
        <textarea name="message" /><br/>
        <input type="submit" value="Send" />
      </form>
    );
  }
