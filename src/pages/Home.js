import React from "react";
import styled from "styled-components";
import diadeLogoGrande from "../images/diadeLogoGrande.jpg";

const Styles = styled.div`
  height: 100% !important;

  header {
    height: 100vh !important;
    text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);
    box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
    background: linear-gradient(
        to bottom,
        rgba(92, 77, 66, 0.8) 0%,
        rgba(92, 77, 66, 0.8) 100%
      ),
      url(${diadeLogoGrande});
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
  }

  hr.divider {
    height: 0.2rem;
    max-width: 3.25rem;
    margin: 1.5rem auto;
    background-color: #bd9479;
    opacity: 1;
  }

  .btn-xl {
    padding: 1.25rem 2.25rem;
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    border: none;
    border-radius: 10rem;
  }

  .btn-primary {
    color: #fff;
    background-color: #bd9479;
  }
`;

function Home() {
  return (
    <Styles>
      <header>
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-weight-bold">Díade</h1>
              <h1 className="text-white font-weight-bold">
                Escritório de arquitetura e engenharia
              </h1>
              <hr className="divider"></hr>
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 mb-5"></p>
              <a className="btn btn-primary btn-xl" href="#/projetos">
                Descubra
              </a>
            </div>
          </div>
        </div>
      </header>
    </Styles>
  );
}

export default Home;
