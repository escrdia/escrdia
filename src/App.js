import logo from "./logo.svg";
import React from "react";
/*import { Card } from 'react-bootstrap';*/
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="container py-3">
      <header>
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
          <a className="d-flex align-items-center text-dark text-decoration-none">
            <span className="fs-4">Díade arquitetura e engenharia</span>
          </a>
          <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <a className="me-3 py-2 text-dark text-decoration-none">
              Portfólio
            </a>
          </nav>
        </div>
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold">Díade</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              build an effective pricing table for your potential customers with
              this Bootstrap example. It’s built with default Bootstrap
              components and utilities with little customization.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
          </div>
        </div>
        <div className="b-example-divider"></div>
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Nossos serviços</h1>
          <p className="lead"></p>
        </div>
      </header>
      <main>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">
                  Projeto de Design de Interiores
                </h4>
              </div>
              <div className="card-body">
                <p>Teste</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Projeto Arquitetônico</h4>
              </div>
              <div className="card-body">
                <p>Teste</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Projetos Complementares</h4>
              </div>
              <div className="card-body">
                <p>Teste</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
