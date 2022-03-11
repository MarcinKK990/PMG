import React from "react";
import Container from "@mui/material/Container";

function About() {
    return (
        <div className="about">
            <Container>
                <div className="about__textarea">
                    <h1 className="about__title"> PMG Partner for Business </h1>
                    <p className="about__paragraph">Firma oferuje kompleksowe usługi związane z obsługą techniczną
                        budynków biurowych i mieszkalnych.</p>
                    <p className="about__paragraph">Dzięki wyspecjalizowanej kadrze jesteśmy w stanie zadbać o każdy
                        budynek, bez względu na jego standard i stopień zaawansowania technicznego, w tym tzw.
                        "budynki inteligentne".</p>
                    <p className="about__paragraph">Nasi pracownicy posiadają niezbędne kwalifikacje oraz duże
                        doświadczenie zawodowe zdobyte na obiektach w kraju i za granicą.</p>
                    <p className="about__paragraph">Od samego początku staramy się rozwinąć z klientem współpracę,
                        która będzie miała charakter długoterminowy.</p>
                    <p className="about__paragraph">Nasza praca ma polegać nie tylko na świadczeniu usług, ale również
                        na proponowaniu rozwiązań, które w niedalekiej przyszłości przyniosą oszczędności energii oraz
                        poprawią komfort użytkowników.</p>
                </div>
            </Container>
        </div>
    );
}

export default About;