import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrapValidate from 'bootstrap-validate';
import { Form } from 'react-bootstrap';

function main() {

    //Dynamic
    const [articleInputs, setarticleInputs] = useState([
        { title: '', summary: '', },
        { title: '', summary: '', },
        { title: '', summary: '', },
    ]);

    //Static
    const [newuserInputs, setnewuserInputs] = useState({
        email: "",
        education: "",
        name: "",
    }
    );

    //Errors
    const [userError, setuserError] = useState({
        maxCharacter: '',
        fillError: '',
    });

    // // checkbox
    // const [usercheckbox,setusercheckbox] = useState(false);

    //Add more articles
    const handleAdd = () => {
        setarticleInputs([...articleInputs, { title: '', summary: '', }])
    }

    // normal form input
    const handlenewChangeInput = (event) => {

        console.log("running this");

        console.log("printing " + event.target.name, event.target.value);
        const name = event.target.name;
        const value = event.target.value;

        // console.log(name, value);
        bootstrapValidate('#name', 'required:* Please enter your name !');
        bootstrapValidate('#email', 'email:* Please enter a valid E-Mail Address !');
        bootstrapValidate('#education', 'required: * Please enter your qualification !');

        setnewuserInputs({ ...newuserInputs, [name]: value })

    }

    // dynamic form input
    const handleChangeInput = (index, event) => {

        if (event.target.value.length > 50) {
            console.log("greater than 50");
            setuserError({ maxCharacter: "* Please enter a  summary less than 50 character !" })
        } else if (event.target.value.length == 0) {
            console.log("not null");
            setuserError({ fillError: "* Please enter title !" })
        }
        console.log(index, event.target.value, event.target.name);
        const values = [...articleInputs];
        values[index][event.target.name] = event.target.value;
        setarticleInputs(values); //object
    }



    // Validate , Submit and Email
    const handleSubmit = (event) => {

        event.preventDefault();

        console.log("articleinputs", articleInputs);
        console.log("input form data", newuserInputs);
        console.log("articleinputs", articleInputs[0].title);
        console.log("articleinputs", articleInputs[0].summary);
        // console.log("email id is",newuserInputs.email);
        // console.log("username is",newuserInputs.name);
        // console.log("education is",newuserInputs.education);
        // console.log("artist",newuserInputs.artists);

        //checkbox values
        var art = newuserInputs.art || "";
        var artists = newuserInputs.artists || "";
        var ancient = newuserInputs.ancient || "";
        var news = newuserInputs.news || "";
        var collecting = newuserInputs.collecting || "";
        var phylosophy = newuserInputs.phylosophy || "";
        var stories = newuserInputs.stories || ""; editorials
        var editorials = newuserInputs.editorials || "";

        console.log("function running");

        //title and summary map
        var titlemap = articleInputs.map(function display(x) {
            return "<h4> " + x.title + "</h4> " + x.summary;
        });      
        console.log("titlemapnew =" + titlemap);

        alert("wait");
        //SMTP function
        function email() {
            var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; let t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { let a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { let e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { let t = Email.createCORSRequest("GET", e); t.onload = function () { let e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { let t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
            return Email;
        }
        var Email = email(); //calling SMTP Function

        Email.send({
            Host: "smtp.gmail.com",
            Username: "nikhilbhardwaj130496@gmail.com",
            Password: "dopamine#7",
            To: 'nikhilbhardwaj130496@gmail.com',
            From: "nikhilbhardwaj130496@gmail.com",
            Subject: "This is the subject",
            Body: `<h3>Hello Nikhil Rajbhar,</h3> </br> You got a new message from ${newuserInputs.name} and its email id is ${newuserInputs.email} </br> 
            I have visited your website the collector and I want to join your community by becoming an author.</br>
            <h3>Educationals Qualification: <h3> ${newuserInputs.education} </h3> </br>
            </br><h3> Topic of Interest :  <h5> &nbsp;&nbsp; ${ancient}</h5></br> 
                                          <h5>  &nbsp;&nbsp; ${artists}</h5>  </br>
                                          <h5>  &nbsp;&nbsp; ${art}</h5>  </br>
                                          <h5>  &nbsp;&nbsp; ${news}</h5>  </br>
                                          <h5> &nbsp;&nbsp; ${collecting} </h5>  </br> 
                                          <h5> &nbsp;&nbsp; ${phylosophy} </h5>  </br>
                                          <h5> &nbsp;&nbsp; ${stories}</h5>  </br> 
                                          <h5> &nbsp;&nbsp; ${editorials}</h5>                                          
                                           Here are some of the articles I have written : </br>` + titlemap
        })


        console.log("mail sent");



    }

    return (
        <>

            <div className="container page">
                <div>
                    <h2 className="page-title"><strong>Become an Author.</strong> Join a growing community</h2>
                    <p>
                        At TheCollector we tend to shake up the boring canon, as it were, and inject some intrigue, excitement,
                        fun, and
                        so on into discussions of art, artists and history published by authoritative authors.
            </p>

                    <p>
                        Established in August 2019, in such a short time we have been able to attract a large international
                        readership. Thanks in part to over a hundred awesome junior and senior academics, we now have over 1
                        million page views per month. Sixty per cent of our readership is based in the USA, followed by the
                        United Kingdom, Europe, Canada and Australia.Readership from emerging markets are also showing sustained
                        growth.
            </p>
                    <p className="font-weight-bold page-section">Can you write for TheCollector?</p>
                    <p>
                        To be eligible to publish on TheCollector you must hold an educational degree in the topics you write
                        about (Bachelor of Arts, a Master’s degree or student, or a PhD), a researcher or academic with a
                        university or university-affiliated research institution. Note: Currently we don’t publish articles from
                        art and history fans and we don’t accept guest posts.
            </p>
                    <p className="font-weight-bold page-section">
                        Contribution Facts
            </p>
                    <p>- All authors will have a dedicated Author profile page on TheCollector</p>
                    <p>- Full credit is given to writers</p>
                    <p>
                        - We pay a nominal fee of US$50-60 per article via Paypal. You may also apply via <a href="#"
                            className="text-dark" target="_blank">Upwork</a>.
            </p>
                    <p className="font-weight-bold page-section">Interesting in joining? Apply today</p>

                    <form onSubmit={handleSubmit}>
                        <div className="form-section">
                            <div className="f-form">
                                <div className="f-input">
                                    <div className="input-group">
                                        <input type="text" name="name" id="name" value={newuserInputs.name} onChange={event => handlenewChangeInput(event)} required />
                                        <label>Full name</label>

                                    </div>
                                </div>
                                <div className="f-input">
                                    <div className="input-group">
                                        <input className="email_id" id="email" value={newuserInputs.email} onChange={event => handlenewChangeInput(event)} type="text" name="email" required />
                                        <label>Email</label>
                                    </div>
                                </div>
                                <div>
                                    <p className="page-section"> <strong>Educations History:</strong> Tell us about academic and
                                professional qualifications.</p>
                                    <div className="f-input">
                                        <textarea cols="3" rows="5" name='education' id="education" value={newuserInputs.education} onChange={event => handlenewChangeInput(event)} required></textarea>
                                    </div>
                                </div>
                                <div className="ft-input">
                                    <p className="page-section">
                                        <strong>Topics of Interest:</strong> Select the topics you would like to qualify for.
                                    </p>

                                    <div className="row" id="selected">
                                        <div className="col-md-6">
                                            <div className="form-group form-check">
                                                <input id="c1" type="checkbox" name="art" value="Art (Renaissance, Modern & Contemporary)" onChange={event => handlenewChangeInput(event)} className="form-check-input" />
                                                <label htmlFor="c1" className="form-check-label">Art (Renaissance, Modern &
                                            Contemporary)</label>
                                            </div>
                                            <div className="form-group form-check">
                                                <input id="c2" type="checkbox" name="artists" value="Artists (Renaissance to present)" onChange={event => handlenewChangeInput(event)}
                                                    className="form-check-input" />
                                                <label htmlFor="c2" className="form-check-label">Artists (Renaissance to
                                            present)</label>
                                            </div>
                                            <div className="form-group form-check">
                                                <input id="c3" type="checkbox" name="ancient" value="Ancient History (Antiquities & The Ancient World)" onChange={event => handlenewChangeInput(event)}
                                                    className="form-check-input" />
                                                <label htmlFor="c3" className="form-check-label">Ancient History (Antiquities & The
                                            Ancient World)</label>
                                            </div>
                                            <div className="form-group form-check">
                                                <input id="c4" type="checkbox" name="news" value="News (General, Non-evergreen content)" onChange={event => handlenewChangeInput(event)}
                                                    className="form-check-input" />
                                                <label htmlFor="c4" className="form-check-label">News (General, Non-evergreen
                                            content)</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group form-check">
                                                <input id="c5" type="checkbox" name="collecting" value="Collecting (General)" onChange={event => handlenewChangeInput(event)}
                                                    className="form-check-input" />
                                                <label htmlFor="c5" className="form-check-label">Collecting (General)</label>
                                            </div>
                                            <div className="form-group form-check">
                                                <input id="c6" type="checkbox" name="phylosophy" value="Phylosophy (Ancient & Art)" onChange={event => handlenewChangeInput(event)}
                                                    className="form-check-input" />
                                                <label htmlFor="c6" className="form-check-label">Phylosophy (Ancient & Art)</label>
                                            </div>
                                            <div className="form-group form-check">
                                                <input id="c7" type="checkbox" name="stories" value="Stories (General)" onChange={event => handlenewChangeInput(event)}
                                                    className="form-check-input" />
                                                <label htmlFor="c7" className="form-check-label">Stories (General)</label>
                                            </div>
                                            <div className="form-group form-check">
                                                <input id="c8" type="checkbox" name="editorials" value="Editorials (General)" onChange={event => handlenewChangeInput(event)}
                                                    className="form-check-input" />
                                                <label htmlFor="c8" className="form-check-label">Editorials (General)</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="page-section"> <strong>Article Suggestions:</strong> Propose at least 3 engaging
                              article titles and summaries you would like to write about.</p>
                                <div id="article-section">


                                    {articleInputs.map((articleInput, index) => (
                                        <div key={index}>
                                            <div className="f-input" >
                                                <div className="input-group">
                                                    <input type="text" name='title' className="titles" id="title" value={articleInput.title3} onChange={event => handleChangeInput(index, event)} required maxLength="15" />
                                                    <label className="title">Title {index + 1}</label>

                                                    <a href="#" className="title_show active" data-title="3"><FaAngleDown /></a>
                                                </div>
                                                <Form.Text className="text-danger ml-2">
                                                    {userError.fillError}
                                                </Form.Text>
                                            </div>

                                            <div className="f-input title3_summary">
                                                <div className="f-input">
                                                    <div className="input-group">
                                                        <textarea className="f-textarea" id="summary3" data-title="3" cols="3" rows="5"
                                                            name='summary' value={articleInput.summary3} onChange={event => handleChangeInput(index, event)} required maxLength="51"></textarea>
                                                        <label>Summary</label>
                                                    </div>
                                                    <Form.Text className="text-danger ml-2">
                                                        {userError.maxCharacter}
                                                    </Form.Text>
                                                </div>
                                            </div>

                                        </div>))}




                                </div>
                                <a id="btnaddarti" className="text-dark" onClick={() => handleAdd()} >+ ADD MORE</a>

                                <div className="page-section">
                                    <h2>Terms & Conditions</h2>
                                    <div className="writeforus-tc">
                                        <p>At TheCollector, accessible from https;//www.thecollector.com, one of our main
                                        priorities is the privacy of our visitors. This Privacy Policy document contains
                                        types of information that are collected and recorded by TheCollector and how we use
                                    it.</p>
                                        <p>If you have additional questions or require more information about our Privacy
                                    Policy, do not hesitate to contact us.</p>
                                        <p>This Privacy Policy applies only to our online activities and is valid for visitors
                                        to our website with regards to the information that they shared and/or collect in
                                        TheCollector. This policy is not applicable to any information collected offline or
                                    via channels other than this website.</p>
                                        <p>Consent</p>
                                        <p>By using our website, you hereby consent to our Privacy Policy and agree to its
                                    terms.</p>
                                        <p>Information we collect</p>
                                        <p>The personal information that you are asked to provide, and the reasons why you are
                                        asked to provide it, will be made clear to you at the point we ask you to provide
                                    your personal information.</p>
                                        <p>If you contact us directly, we may receive additional information about you such as
                                        your name, email address, phone number, the contents of the message and/or
                                        attachments you may send us, and any other information you may choose to provide.
                                         </p>
                                        <p>When you register for an Account, we may ask for your contact information, including
                                    items such as name, company name, address, email address, and telephone number.</p>
                                    </div>
                                </div>

                                <div className="page-section ft-input">
                                    <div className="form-group form-check">
                                        <input id="agree" type="checkbox" className="form-check-input" required />
                                        <span className="form-check-span">I agree to the <a href="#" className="text-dark">terms of
                                        use.</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <center>
                            <button className="btn btn-primary mt-5" href="#" type="submit" id="buttonSearch">Submit </button>
                        </center>

                    </form>
                </div>
            </div>
        </>
    );
}
export default main;

{/* <button onClick={() => handleAddFields()}>add </button>
                        <button onClick={() => handleRemoveFields()}>remove </button> */}



                        // { status? <h1> what's the status</h1> : null } 
                        // <a onClick={()=>setStatus(!status)}> toggle1</a>

                        // { status? <h1> what's the 2 status</h1> : null } 
                        // <a onClick={()=>setStatus(!status)}> toggle2</a>