import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";
import Container from "@mui/material/Container";

function Contact() {
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
        if (form.file) {
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
    };

    const handleChange = (name) => (e) => {
        setForm({...form, [name]: e.target.value});
    };

    const handleAddFile = (e) => {
        setForm({...form, file: e.target.files});
    };

    return (
        <div className="contact">
            <Container>
                <div className="contact__textarea row">
                    <div className="contact__form col-12 col-md-6 col-lg-4">
                        <h1>Szukasz pracy? <span>Prześlij nam swoje CV!</span></h1>

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

                        {status === 1 && <p className="contact__info">Poprawnie wysłano maila</p>}
                        {status === 2 && <p className="contact__info">Bład podczas wysyłania maila</p>}
                    </div>

                    <div className="contact__adress col-12 col-md-6 col-lg-8">
                        <h1 className="contact__title">Siedziba</h1>
                        <p className="contact__paragraph">
                            PMG Partner for Business Sp. z o.o.
                        </p>
                        <p className="contact__paragraph">ul. Skalskiego 5 lok. U1</p>
                        <p className="contact__paragraph"> 03-982, Warszawa</p>
                        <p className="contact__paragraph">biuro.4b@pmgpartner.pl</p>
                        <p className="contact__paragraph">Numer kontaktowy: 72 740 68 20</p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Contact;
