function generarMenuPages(){
    const menuPages=`
    <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Toggle button -->
        <button
          data-mdb-collapse-init
          class="navbar-toggler"
          type="button"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
    
        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Navbar brand -->
          <a class="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src="https://collegecupca.com/futbol/wp-content/uploads/sites/2/2019/02/logo-ricaldone.png"
              height="15"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          <!-- Left links -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="../Pages/Emprendedores tecnologicos.html">Emprendedores Tecnologicos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../Pages/Empresas de software internacionales.html">Empresas de Software Internacionales</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../Pages/Empresas de software El Salvador.html">Empresas de software El Salvador</a>
            </li>
          </ul>
          <!-- Left links -->
        </div>
        <!-- Collapsible wrapper -->
    
        <!-- Right elements -->
        <div class="d-flex align-items-center">
          
          
    
          <!-- Avatar -->
          <div class="dropdown">
            <a
              data-mdb-dropdown-init
              class="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                class="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <a class="dropdown-item" href="#">My profile</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Settings</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Logout</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- Right elements -->
      </div>
      <!-- Container wrapper -->
    </nav>`;

  return menuPages;
}