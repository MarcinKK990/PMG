import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";

function Contact() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [winInfo, setWinInfo] = useState("");
  //const [valname, setValname] = useState("");
  //const [valemail, setValemail] = useState("");
  //const [valmessage, setValmessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    file: null,
  });

  const [status, setStatus] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);
    if(form.file){
      formData.append("file", form.file[0]);
    }
    

    try {
      await fetch(process.env.PUBLIC_URL + "sendMail.php", {
        method: "POST",
        body: formData,
      });
      setStatus(1)
    } catch (error) {
      setStatus(2)
    }

    // send(
    //   "service_d3s7dus",
    //   "template_u22a9tf",
    //   form.email,
    //   "user_NSbbRgkrKY21aikTeytyg"
    // )
    //   .then((response) => {
    //     console.log("SUCCESS!", response.status, response.text);
    //   })
    //   .catch((err) => {
    //     console.log("FAILED...", err);
    //   });
  };

  const handleChange = (name) => (e) => {
    setForm({ ...form, [name]: e.target.value });
  };

  const handleAddFile = (e) => {
    setForm({ ...form, file: e.target.files });
  };

  return (
    <>
      <div className="contact">
        <div className="contact_area">
          <div class="form-style-6">
            <h1>
              Szukasz pracy ?<br /> Prześlij nam swoje CV !
            </h1>
            <div className="form">
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Imię i nazwisko"
                  value={form.name}
                  onChange={handleChange("name")}
                />

                <input
                  type="text"
                  name="email"
                  placeholder="Adres email"
                  value={form.email}
                  onChange={handleChange("email")}
                />

                <textarea
                  name="message"
                  placeholder="Napisz wiadomość"
                  value={form.message}
                  onChange={handleChange("message")}
                ></textarea>

                <input
                  type="file"
                  name="file"
                  placeholder="file"
                  onChange={handleAddFile}
                  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                />

                <button className="submit" type="submit" value="Send">
                  Wyślij
                </button>
              </form>

              {status === 1 && <p>Poprawnie wysłano maila</p>}
              {status === 2 && <p>Bład podczas wysyłania maila</p>}
            </div>
          </div>
        </div>
        <div className="contact_adress">
          <h1 className="contact_title">Siedziba</h1>
          <p className="contact_description">
            PMG Partner for Business Sp. z o.o.
          </p>
          <p className="contact_description">ul. Skalskiego 5 lok. U1</p>
          <p className="contact_description"> 03-982, Warszawa</p>
          <p className="contact_description">biuro.4b@pmgpartner.pl</p>
          <p className="contact_description">Numer kontaktowy: 72 740 68 20</p>
        </div>
      </div>
    </>
  );
}

export default Contact;
