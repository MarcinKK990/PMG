import React from "react";
import ToolsIT from '../../assets/IT.png';

function SixthDivInfo() {
    return (
        <div className="content">
            <div className="content__section">
                <h1 className="content__title">Help Desk</h1>
                <p className="content__paragraph">Firma PMG Partner opracowała specjalną platformę internetową typu Help
                    Desk,
                    która przeznaczona jest do zgłaszania usterek przez najemców , zarządcę oraz innych firm
                    świadczących
                    usługi dla budynku<br/ >( np. firma sprzątająca, ochrona ) .
                </p>

                <img src={ToolsIT} className="content__image" />
            </div>
        </div>
    );
}

export default SixthDivInfo;
