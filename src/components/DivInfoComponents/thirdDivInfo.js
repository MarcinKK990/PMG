import React from "react";
import Audyt from '../../assets/audyt.png';

function ThirdDivInfo() {
    return (
        <div className="content">
            <div className="content__section">
                <h1 className="content__title">Konsultacje techniczne</h1>
                <p className="content__paragraph">Usługę tę kierujemy do wszystkich deweloperów, właścicieli,
                    współwłaścicieli bądź użytkowników nieruchomości. Naszym celem jest zapewnienie kompetentnej,
                    obiektywnej i profesjonalnej informacji w zakresie prowadzenia obsługi technicznej.
                </p>
            </div>

            <div className="content__section">
                <h1 className="content__title">Konserwacja techniczna nieruchomości:</h1>
                <p className="content__paragraph">Określenie niezbędnych przeglądów i czynności
                    konserwacyjnych</p>
            </div>

            <div className="content__section">
                <h1 className="content__title">Przegląd nowych obiektów , dokumentacji technicznych oraz
                    zastosowanych rozwiązań pod względem ich: </h1>
                <ul className="content__unordered-list">
                    <li>Funkcjonalności</li>
                    <li>Przyszłych kosztów utrzymania</li>
                    <li>Bezpieczeństwa</li>
                </ul>
            </div>

            <div className="content__section">
                <h1 className="content__title">Przeglądy obowiązkowe</h1>
                <p className="content__paragraph">PMG Partner for Business wykonuje przeglądy obowiązkowe
                    wymagane Prawem Budowlanym zawartych w pakiecie usług dla danego budynku lub jako oddzielnie
                    zamówiona usługa. Nasi eksperci techniczni posiadają certyfikaty zawodowe oraz polisy
                    ubezpieczeniowe.
                </p>
            </div>

            <div className="content__section">
                <h1 className="content__title">Audyty techniczne</h1>
                <p className="content__paragraph">Nasza firma świadczy usługi z zakresu audytów technicznych
                    mających na celu sprawdzenie prawidłowości działania poszczególnych instalacji, wykrywania usterek,
                    poszukiwanie oszczędności poprzez zastosowanie bardziej nowoczesnych i bardziej energooszczędnych
                    rozwiązań oraz poprzez optymalizację pracy urządzeń przy wykorzystaniu wszystkich możliwości jakie
                    dają systemy BMS (okresowe ograniczanie ilości powietrza nawiewanego <br/ > i wyciągowego poprzez
                        zastosowanie falowników lub urządzeń VAV, wprowadzanie krzywych wartości zadanych temperatury i
                        wilgotności, zastosowanie czujników CO2 itp
                </p>
            </div>

            <img src={Audyt} className="content__image" />
        </div>
    );
}

export default ThirdDivInfo;
