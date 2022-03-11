import React from "react";
import Container from "@mui/material/Container";

function Clients() {
    return (
        <div className="clients">
            <Container>
                <div className="clients__textarea">
                    <h1 className="clients__title">Nasi klienci</h1>
                    <p className="clients__paragraph"> Obsługiwane przez nas budynku biurowe na terenie Warszawy.</p>
                    <div className="clients__map">
                        <iframe src="https://my.atlistmaps.com/map/11af6011-0dcf-4c8b-9347-be24f2b1994a?share=true"
                                allow="geolocation" width="100%" height="400px" frameborder="0" scrolling="no"
                                allowfullscreen></iframe>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Clients;
