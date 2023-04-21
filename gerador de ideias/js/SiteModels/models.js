const sites = {
    0:{codigo: `<header id="Header"><!--Header-->
    <nav class="navbar navbar-expand-lg navbar-dark" aria-label="Oitavo exemplo de barra de navegação">
        <div class="container">
          <a class="navbar-brand" href="#"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lucas Dev</font></font></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Alternar de navegação">
            <span class="navbar-toggler-icon"></span>
          </button>
    
          <div class="collapse navbar-collapse" id="navbarsExample07">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="#"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Home</font></font></a>
                  </li>
              <li class="nav-item">
                <a class="nav-link" href="#quemsomos"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Quem Somos</font></font></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#servicos"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Serviços</font></font></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#clientes"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Clientes</font></font></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contato"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Contato</font></font></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header><!--Header-->
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="container"></div>
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class="active" aria-current="true"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item">
            <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="rgb(0, 118, 173, 0.5)"></rect></svg>
            <div class="container">
              <div class="carousel-caption text-start">
                <h1>Example headline.</h1>
                <p>Some representative placeholder content for the first slide of the carousel.</p>
                <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="rgb(0, 118, 173, 0.5)"></rect></svg>
            <div class="container">
              <div class="carousel-caption">
                <h1>Another example headline.</h1>
                <p>Some representative placeholder content for the second slide of the carousel.</p>
                <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item active">
            <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="rgb(0, 118, 173, 0.5)"></rect></svg>
            <div class="container">
              <div class="carousel-caption text-end">
                <h1>One more for good measure.</h1>
                <p>Some representative placeholder content for the third slide of this carousel.</p>
                <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div id="quemsomos" class="conteudo">
        <div class="center container">
            <div class="col-md-7 text-quem-somos">
                <div class="texto-sobre">
                    <h2 class="featurette-heading fw-normal lh-1">A nossa empresa</span></h2>
                    <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                </div>
            </div>
            <div class="col-md-5 imagem-quem-somos">
            <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="rgb(0, 118, 173, 0.5)"></rect><text x="45%" y="50%" fill="white" dy=".3em">500x500</text></svg>
            </div>
        </div>
      </div>

      <div id="servicos" class="album py-5 bg-body-tertiary conteudo">
        <div class="container">
          <div class="session-name"><h2>Serviços</h2></div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="rgb(0, 118, 173, 0.5)"></rect><text x="42%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                <div class="card-body">
                  <h3 style="text-align: center;">Servico 3</h3>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="rgb(0, 118, 173, 0.5)"></rect><text x="42%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                <div class="card-body">
                  <h3 style="text-align: center;">Servico 3</h3>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="rgb(0, 118, 173, 0.5)"></rect><text x="42%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                <div class="card-body">
                  <h3 style="text-align: center;">Servico 3</h3>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
    
          </div>
        </div>
      </div>

      <div id="clientes" class="conteudo">
        <div class="container">
          <div class="session-name"><h2>Clientes</h2></div>
          <picture>
            <img src="imagens/exemple.png" class="img-fluid img-thumbnail" alt="...">
          </picture>
          <picture>
            <img src="imagens/exemple.png" class="img-fluid img-thumbnail" alt="...">
          </picture>
          <picture>
            <img src="imagens/exemple.png" class="img-fluid img-thumbnail" alt="...">
          </picture>
          <picture>
            <img src="imagens/exemple.png" class="img-fluid img-thumbnail" alt="...">
          </picture>

        </div>
      </div>

      <footer id="contato" class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="container">
        <div class="col-md-4 d-flex align-items-center">
          <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
          </a>
          <span class="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
        </div>
      </footer>
   `},
    1:{codigo:"teste 2"}
}
