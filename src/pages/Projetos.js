import React from "react";

function Projetos() {
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
              Do grego dyas, dyados. Grupo composto por dois elementos; par,
              díada. Somos um escritório de arquitetura e engenharia que nasceu
              a partir da ideia que arquitetura e engenharia devem caminhar
              juntos. Desenvolvemos soluções criativas, sempre aliando alta
              funcionalidade, eficiência e padrão estético.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center border-bottom"></div>
          </div>
        </div>
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Nossos serviços</h1>
          <p className="lead mb-5">Esses são os serviços que nós oferecemos</p>
        </div>
      </header>
      <main>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm h-100">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Design de Interiores</h4>
              </div>
              <div className="card-body align-items-center d-flex">
                <p>
                  Oferecemos projetos criativos para repaginar o seu ambiente
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm h-100">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Projeto Arquitetônico</h4>
              </div>
              <div className="card-body align-items-center d-flex">
                <p>
                  O projeto sob medida para suas necessidades e do seu jeitinho
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm h-100 d-flex">
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
        <hr className="featurette-divider"></hr>
        <div className="row featurette mt-9">
          <div className="col-md-7 ">
            <h2 className="featurette-heading">E ai, vamos fechar?</h2>
            <p className="lead">Entre em contato pelos botões abaixo</p>
          </div>
          <div className="col-md-5">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee"></rect>
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
                500x500
              </text>
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Projetos;
