import React from "react";

function FirstDivInfo() {
    return (
        <div className="content">
            <h1 className="content__title">Rodzaje instalacji podlegające przeglądom i konserwacji</h1>

            <ol className="content__ordered-list">
                <li>Instalacje centralnego ogrzewania, ciepła technologicznego oraz
                    ciepłej wody użytkowej, w tym węzły cieplne oraz kotłownie olejowe i gazowe, instalacje klimatyzacji i
                    wentylacji</li>
                <li>Instalacje wody lodowej, w tym agregaty chłodnicze</li>
                <li>Instalacje elektroenergetyczne S.N. i N.N.</li>
                <li>Instalacje oświetlenia</li>
                <li>Instalacje hydrauliczne</li>
                <li>Instalacje sygnalizacji i wykrywania pożaru</li>
                <li>Instalacje tryskaczowe i hydrantowe</li>
                <li>Systemy antywłamaniowe</li>
                <li>Kontrola dostępu</li>
                <li>Instalacje domofonowe</li>
                <li>Instalacje automatyki wszystkich wyżej wymienionych systemów</li>
                <li>Systemy BMS ( Autoryzacja firmy Siemens)</li>
            </ol>
        </div>
    );
}

export default FirstDivInfo;
