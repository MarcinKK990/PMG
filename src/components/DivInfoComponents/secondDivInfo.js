import React from "react";

function SecondDivInfo() {
    return (
        <div className="content">
            <div className="content__section">
                <h1 className="content__title">Pomiary instalacji elektroenergetycznych</h1>
                <p className="content__paragraph">
                    Nasza firma posiada kwalifikacje i urządzenia do wykonywania pomiarów instalacji
                    elektroenergetycznych niskiego i średniego napięcia.
                </p>
            </div>

            <div className="content__section">
                <h1 className="content__title">Serwis urządzeń chłodniczych</h1>
                <p className="content__paragraph">
                    We własnym zakresie wykonujemy przeglądy agregatów chłodniczych, pomp ciepła oraz jednostek
                    klimatyzacyjnych typu Split. Posiadamy liczne certyfikaty wydane przez wiodących producentów
                    urządzeń chłodniczych stosowanych w systemach wentylacji i klimatyzacji.
                </p>
            </div>

            <div className="content__section">
                <h1 className="content__title">Pomiary i regulacja systemów wentylacji</h1>
                <p className="content__paragraph">
                    Firma PMG Partner for Business Sp. z o.o. wykonuje we własnym zakresie pomiary wydajności wentylacji
                    oraz przeprowadza kompleksowe regulacje całych systemów. Posiadanie własnego sprzętu pomiarowego
                    oraz wyszkolonej kadry pracowników pozwala w szybki sposób zdiagnozować przyczyny dyskomfortu
                    związanego z brakiem wystarczających ilości powietrza w pomieszczeniach o różnym przeznaczeniu.
                    Nasze „know-how” pozwala na optymalizację pracy zespołów wentylacyjnych i innych urządzeń. Takie
                    działania przyczyniają się do redukcji kosztów eksploatacji oraz wydłużenia żywotności urządzeń
                    takich jak pompy, wentylatory itd.
                </p>
            </div>

            <div className="content__section">
                <h1 className="content__title">Regulacja hydrauliczna instalacji</h1>
                <p className="content__paragraph">Posiadamy własny sprzęt pomiarowy do regulacji hydraulicznej
                    instalacji technologicznych centralnego ogrzewania, ciepłej wody użytkowej, ciepła technologicznego,
                    chłodu technologicznego itp.</p>
            </div>

            <div className="content__section">
                <h1 className="content__title">BMS (Building Management System)</h1>
                <p className="content__paragraph">Nasza firma zatrudnia inżynierów programistów posiadających
                    kwalifikacje do projektowania, instalacji, programowania systemów BMS niżej wymienionych
                    dostawców.</p>
                <ul className="content__unordered-list">
                    <li>Unigyr Insight - Siemens</li>
                    <li>Desigo Insight - Siemens</li>
                    <li>Excel 5000 - Honeywell</li>
                    <li>Vista - TAC</li>
                </ul>
            </div>
        </div>
    );
}

export default SecondDivInfo;
