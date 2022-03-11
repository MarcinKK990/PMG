import React from "react";

function FifthDivInfo() {
    return (
        <div className="content">
            <div className="content__section">
                <h1 className="content__title">Pogotowie techniczne </h1>
                <p className="content__paragraph">W ramach obsługi technicznej firma PMG Partner zainstaluje
                    urządzenia
                    GSM do automatycznego powiadamiania o awarii. W tym celu sterowniki systemu BMS zostaną
                    zaprogramowane w
                    taki sposób, aby na wolne wyjścia binarne sterowników wyprowadzić sygnały alarmów zbiorczych z
                    najważniejszych instalacji i urządzeń. Do zaprogramowanych wyjść zostanie podłączony wielowejściowy
                    modem GSM wyposażony w kartę SIM. Każdemu sygnałowi wejściowemu zostanie przypisany komunikat SMS. W
                    przypadku pojawienia się alarmu zbiorczego np. w węźle cieplnym zarówno obsługa techniczna , jak i
                    pogotowie techniczne będą natychmiast powiadamiane.
                    W przypadku zgłoszenia awarii przez system Help Desk zgłoszenie jest wysyłane natychmiast do
                    wszystkich
                    służb technicznych. Dyżurny technik najpierw ocenia rozległość awarii, a jeżeli nie jest w stanie
                    usunąć
                    jej samodzielnie , wzywa ekipę naprawczą pogotowia technicznego.
                </p>
                <p className="content__paragraph">Kolejno każdy z pracowników obsługi technicznej pełni dyżur
                    całodobowy
                    tzn. przejmuje telefon alarmowy z możliwością otrzymywania e-maili.
                    Pogotowie techniczne PMG Partner pełni dyżur non-stop również w niedziele i święta.
                    Firma PMG Partner prowadzi dwa rodzaje pogotowia technicznego : elektroenergetyczne i hydrauliczne.
                    Wszystkie firmy podwykonawcze świadczące usługi dla budynku również prowadzą własne pogotowie
                    techniczne.
                    Koordynatorem działań grup interwencyjnych jest Koordynator Działu Serwisu
                </p>
                <p className="content__paragraph">Schemat działania jest następujący: </p>
                <ul className="content__unordered-list">
                    <li>Zarówno technik dyżurny budynku, jak i koordynator pogotowia technicznego otrzymują
                        powiadomienie o
                        awarii.
                    </li>
                    <li>Dyżurny technik udaje się na miejsce awarii i ocenia rozległość uszkodzeń</li>
                    <li>W przypadku, gdy technik nie jest w stanie usunąć usterki powiadamia Koordynatora Serwisu, a
                        następnie wspólnie oceniają zasoby konieczne do usunięcia usterki. Koordynator wysyła ekipę
                        serwisową oraz powiadamia zarządcę budynku.
                    </li>
                    <li>Pogotowie techniczne przystępuje do naprawy.</li>
                    <li>Po usunięciu awarii zostaje sporządzony raport oraz następuje przekazanie informacji zwrotnej do
                        zarządcy
                    </li>
                    <li>Kierownik Techniczny prowadzi dokumentację dotyczącą wszystkich awarii, które wystąpiły w
                        budynku.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default FifthDivInfo;
