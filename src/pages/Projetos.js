import React from "react";
import styled from "styled-components";
import renderCena8Denoiser from "../images/renderCena8Denoiser.png";
import predio from "../images/predio.png";
import portfolio from "../documents/portfolio.pdf";

const Styles = styled.div`
  .jumbo {
    background: url(${renderCena8Denoiser}) no-repeat fixed top;
    background-size: cover;
    color: #efefef;
    height: 90vh;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.2;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  .color-1 {
    background-color: #ebe8e5;
  }

  .color-2 {
    background-color: #bd9479;
  }

  .color-3 {
    background-color: #f2d4bc;
  }

  .card-header {
    background-color: #f2d4bc;
  }

  .card-body {
    background-color: #ebe8e5;
  }

  .h-card {
    height: 92%;
  }

  .zap {
    background: #25d366;
    border-color: #25d366;
  }

  .insta {
    background: #dd2a7b;
    border-color: #dd2a7b;
  }

  .butoes {
    flex-direction: column;
    justify-content: space-between;
    height: 25%;
    width: 55%;
  }
`;

function Projetos() {
  return (
    <Styles>
      <header>
        <div className="color-1 w-100">
          <div className="container py-3">
            <div className="d-flex flex-column flex-md-row align-items-center ">
              <a className="d-flex align-items-center text-dark text-decoration-none">
                <span className="fs-4">Díade arquitetura e engenharia</span>
              </a>
              <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <a
                  className="me-3 py-2 text-dark text-decoration-none"
                  href="https://linktr.ee/escritoriodiade"
                  target="_blank"
                  rel="noreferrer"
                >
                  Formulários
                </a>
                <a
                  className="me-3 py-2 text-dark text-decoration-none"
                  href={portfolio}
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfólio
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div fluid className="jumbo">
          <div className="overlay"></div>
        </div>
        <div className="w-100 color-3">
          <div className="container py-3">
            <div className="px-4 py-5 my-5 text-center">
              <h1 className="display-5 fw-bold">Díade</h1>
              <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                  Do grego dyas, dyados. Grupo composto por dois elementos; par,
                  díada. Somos um escritório de arquitetura e engenharia que
                  nasceu a partir da ideia que arquitetura e engenharia devem
                  caminhar juntos. Desenvolvemos soluções criativas, sempre
                  aliando alta funcionalidade, eficiência e padrão estético.
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center "></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="color-2 w-100">
          <div className="container py-3">
            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
              <h1 className="display-4">Nossos serviços</h1>
              <p className="lead mb-5">
                Esses são os serviços que nós oferecemos
              </p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm h-card">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Design de Interiores</h4>
                  </div>
                  <div className="card-body align-items-center d-flex">
                    <p>
                      Oferecemos projetos criativos para repaginar o seu
                      ambiente
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm h-card">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Projeto Arquitetônico</h4>
                  </div>
                  <div className="card-body align-items-center d-flex">
                    <p>
                      O projeto sob medida para suas necessidades e do seu
                      jeitinho
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm h-card d-flex">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Projetos Complementares</h4>
                  </div>
                  <div className="card-body">
                    <p>Fazemos os projetos pensando em economia e segurança</p>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>Projeto estrutural</li>
                      <li>Projeto elétrico</li>
                      <li>Projeto hidrossanitário</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="color-3 w-100">
          <div className="container py-3">
            <div className="row featurette mt-9">
              <div className="col-md-7 ">
                <div className="mb-4">
                  <h2 className="featurette-heading">E ai, vamos fechar?</h2>
                  <p className="lead">Entre em contato pelos botões abaixo</p>
                </div>
                <div className="row row-cols-1 g-2">
                  <div className="col">
                    <a
                      role="button"
                      class="btn btn-primary zap"
                      href="https://api.whatsapp.com/send?phone=5571996324218"
                    >
                      Entrar em contato pelo whatsapp
                    </a>
                  </div>
                  <div className="col">
                    <a
                      role="button"
                      class="btn btn-primary insta"
                      href="https://instagram.com/escritoriodiade"
                    >
                      Entrar em contato pelo instagram
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <img
                  className="rounded-lg-3 mt-3"
                  src={predio}
                  width="100%"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Styles>
  );
}

export default Projetos;
