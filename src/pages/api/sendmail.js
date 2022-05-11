// Librairie
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.NEXT_PUBLIC_KEY_SENDGRID);

export default function (req, res) {
  console.log("TT", req.body);

  const body = JSON.parse(req.body);
  const messages = ` 
  Name:${body.name}\r\n
  Email:${body.email}\r\n
  Message:${body.message}\r\n  
  `;

  const data = {
    to: "junior.wembopa@gmail.com",
    from: "junior.wembopa@gmail.com",
    templateId: "d-fbf49ed3266a42cca0bfd62ca4e48a63",
    dynamic_template_data: {
      message: messages.replace(/\r\n/g),
      name: "Junior",
    },
  };
  try {
    sgMail.send(data);
    // res.status(200).json({ message: "fine" });
  } catch (error) {
    console.log(error);
    if (error.response) {
      console.log(error.response.body);
    }
    res.status(400).json({ status: "ERROR", message: error.message });
  }

  res.status(200).json({ message: "fine" });
}
