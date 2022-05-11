import React,{useState} from "react";
import Split from "../Split";
import { Formik, Form, Field } from "formik";
import { ToastContainer, toast } from "react-toastify";

const ContactSection = () => {
  const messageRef = React.useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [messageData, setMessageData] = useState();

  // const onSubmitHandler = async (data) => {
  //   if (!isLoading) {
  //     setIsLoading(true);
  //     // const response = await fetch("../../pages/api/sendmail", {
  //       const response = await fetch("/api/sendmail", {

  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(messageData),
  //     });

  //     console.log("here", messageData);
  //     const result = await response.json();

  //     setIsLoading(false);

  //     if (!response.ok) {
  //       console.log("error");
  //       toast.error("🦄 Wow so easy!", {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       });
  //     } else {
  //       console.log("ok succes mail send", result);

  //       // toast.success("gooooool");
  //       toast.success(
  //         "Votre projet est bien reçu, nous revenons vers vous 😁 ",
  //         {
  //           position: "top-center",
  //           autoClose: 5000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //         }
  //       );
  //       // const timer = setTimeout(() => {
  //       //   router.push("/contact");
  //       //   return () => clearTimeout(timer);
  //       // }, 5002);
  //     }
  //   }
  // };


  const onSubmitHandler=(data)=>{
    fetch("/api/sendmail",{
      method:'POST',
      // body:messageData
      body: JSON.stringify(data),
    })
  }

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
    <section id='#' className="contact-sec section-padding">
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Restons en Contact
          </h6>
          <Split>
            <h3 className="wow words chars splitting" data-splitting>
              Contactez moi.
            </h3>
          </Split>
          <span className="tbg">Contact</span>
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
                  // alert(JSON.stringify(values, null, 2));
                  // show message
                  onSubmitHandler(values)
                  messageRef.current.innerText =
                    "Votre message à bien étes envoyée.";
                  // Reset the values
                  values.name = "";
                  values.email = "";
                  values.message = "";
                  // clear message
                  setTimeout(() => {
                    messageRef.current.innerText = "";
                  }, 6000);
                }}
              >
                {({ errors, touched }) => (
                  <Form id="contact-form">
                    <div className="messages" ref={messageRef}></div>

                    <div className="controls">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field
                              id="form_name"
                              type="text"
                              name="name"
                              placeholder="Nom"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field
                              id="form_email"
                              type="email"
                              name="email"
                              validate={validateEmail}
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
                              className="simple-btn custom-font cursor-pointer"
                              // onClick={onSubmitHandler
                              // }
                            >
                              <span>Envoyer le Message</span>
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

export default ContactSection;
