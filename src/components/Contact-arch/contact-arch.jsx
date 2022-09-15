import React from "react";
import { Formik, Form, Field } from "formik";

const ContactArch = () => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <section
      id="contact-arch"
      className="contact-sec style2 section-padding position-re bg-img"
      style={{ backgroundImage: "url(/img/patrn1.png)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h2 className="wow fadeIn" data-wow-delay=".3s">
                Contact Us
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="form wow fadeInUp" data-wow-delay=".5s">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
                }}
                onSubmit={async (values) => {
                  await sendMessage(500);
                  alert(JSON.stringify(values, null, 2));
                  // show message

                  messageRef.current.innerText =
                    "Your Message has been successfully sent. I will contact you soon.";
                  // Reset the values
                  values.name = "";
                  values.email = "";
                  values.message = "";
                  // clear message
                  setTimeout(() => {
                    messageRef.current.innerText = "";
                  }, 2000);
                }}
              >
                {({ errors, touched }) => (
                  <Form id="contact-form">
                    <div className="messages" ref={messageRef}></div>
                    <br />

                    <div className="controls">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field
                              id="form_name"
                              type="text"
                              name="name"
                              placeholder="Name"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field
                              validate={validateEmail}
                              id="form_email"
                              type="email"
                              name="email"
                              placeholder="Email"
                              required="required"
                            />
                            {errors.email && touched.email && (
                              <div>{errors.email}</div>
                            )}
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="form-group">
                            <Field
                              as="textarea"
                              id="form_message"
                              name="message"
                              placeholder="Message"
                              rows="4"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="text-center">
                            <button
                              type="submit"
                              className="nb butn light mt-30 full-width"
                            >
                              <span className="ls3 text-u">Send Massege</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArch;
