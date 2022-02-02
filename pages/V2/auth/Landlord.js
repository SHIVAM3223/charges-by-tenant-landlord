import { useContext, useState } from "react";

const Landlord = () => {

    const [details, setDetails] = useState({
        Name: "",
        Email: "",
        Contact: "",
        Password: "",
    });

    const onChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };


    return (
        <div className="S-signUp">
            <link
                rel="stylesheet"
                href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                crossOrigin="anonymous"
            />

            <h2 className="S-title">Landlord Sign Up</h2>

            <div className="S-fieldContainer">

                <img className="S-flakes-image" src="/images/flakes.png" alt="" width="100px" />
                <img className="S-flakes2-image" src="/images/flakes2.png" alt="" width="100px" />
                <img className="S-signup-image" src="/images/signup.png" alt="" />

                <div className="S-shifter">
                    <div className="S-text">

                        <div className="S-fields S-firstField">
                            <span><i className="fad fa-user"></i></span>
                            <span>
                                <input
                                    className="S-input"
                                    type="text"
                                    name="Email"
                                    onChange={(e) => onChange(e)}
                                    placeholder="Your Name"
                                />
                            </span>
                        </div>
                        <div className="S-fields S-secondField">
                            <span><i class="fad fa-envelope"></i></span>
                            <span>
                                <input
                                    className="S-input"
                                    type="text"
                                    name="Name"
                                    onChange={(e) => onChange(e)}
                                    placeholder="Your E-mail"
                                />
                            </span>
                        </div>
                        <div className="S-fields S-thirdField">
                            <span><i class="far fa-phone-alt"></i></span>
                            <span>
                                <input
                                    className="S-input"
                                    type="text"
                                    name="Contact"
                                    onChange={(e) => onChange(e)}
                                    placeholder="Your Contact"
                                />
                            </span>
                        </div>
                        <div className="S-fields S-fourthField">
                            <span><i className="fad fa-lock"></i></span>
                            <span>
                                <input
                                    className="S-input"
                                    type="text"
                                    name="Password"
                                    onChange={(e) => onChange(e)}
                                    placeholder="Password"
                                />
                            </span>
                        </div>
                        <div className="S-lower">
                            <div>
                                <button type="button" class="btn btn-dark S-btn-signup">Sign Up</button>
                            </div>
                            <div className="S-account">
                                <div>Already have an account ?</div>
                                <div className="S-signin-account">Sign In</div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Landlord;
