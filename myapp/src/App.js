import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="#">
            <p class="h3">BR architects</p>


          </a>
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link active text-black fs-4" aria-current="page" href="#">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-black fs-4" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-black fs-4 " href="#">Contact</a>

            </li>
          </ul>
        </div>
      </nav>
      {/* <img src="architect.jpg" class="img-fluid" alt="..."></img> */}

      <div style={
        {
          backgroundImage: `url(architect.jpg)`,
          width: '100%',
          height: '700px',
          backgroundRepeat: 'no-repeat',

        }
      }>
        <div class="position-absolute top-50 start-50 translate-middle display-3 text-white fw-bold mt-5">
          <b class="bg-dark  p-2">BR</b> architect
        </div>
      </div>
      <nav class="navbar bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="#">
            <h1>Projects</h1>
          </a>
        </div>
      </nav>

      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col-lg-3 col-md-6 col-sm-12 overflow-hidden ">
            <img src="house1.jpg"></img>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 overflow-hidden ">
            <img src="house2.jpg"></img>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 overflow-hidden ">
            <img src="house3.jpg"></img>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 overflow-hidden ">
            <img src="house4.jpg"></img>
          </div>

        </div>
      </div>
      <div class="container text-center">
        <div class="row align-items-end">
          <div class="col-lg-3 col-md-6 col-sm-12 overflow-hidden">

            <img src="house4.jpg"></img>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 overflow-hidden">
            <img src="house5.jpg"></img>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-12 overflow-hidden">
            <img src="house6.jpg"></img>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 overflow-hidden">
            <img src="house7.jpg"></img>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <p class="h3 text-start mt-4">About</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <div class="row align-items-start">
          <div class="col">
            <div class="card" >
              <img src="team1.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">John DOE</h5>
                <span>CEO & Founder</span>
                <p class="card-text">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
              </div>

              <div class="card-body">
                <a href="#" class="card-link">Contact</a>

              </div>
            </div>



          </div>
          <div class="col">
            <div class="card" >
              <img src="team2.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">John DOE</h5>
                <span>CEO & Founder</span>
                <p class="card-text">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
              </div>

              <div class="card-body">
                <a href="#" class="card-link">Contact</a>

              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" >
              <img src="team3.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">John DOE</h5>
                <span>CEO & Founder</span>
                <p class="card-text">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
              </div>

              <div class="card-body">
                <a href="#" class="card-link">Contact</a>

              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="container-fluid ms-4 me-4">



        <p class="h3 text-start mt-4 ">Contact</p>
        <p>Lets get in touch and talk about your next project.</p>
        <input class="form-control my-3" type="text" placeholder="name" aria-label="default input example " />
        <input class="form-control my-3" type="text" placeholder="Email" aria-label="default input example " />
        <input class="form-control form-control-sm my-3" type="text" placeholder="Subject" aria-label=".form-control-sm example"></input>
        <input class="form-control form-control-sm my-3" type="text" placeholder="comment" aria-label=".form-control-sm example"></input>
      </div>
      <button type="button" class="btn btn-dark btn-lg mx-4 mt-4">SEND MESSAGE</button>
      <div class="ratio ratio-16x9 mt-5">
        <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d109747.07810497665!2d76.70877897695395!3d30.729750673384633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d30.7377185!2d76.7913481!4m5!1s0x390fed052b86efa7%3A0x893b7cffe1d680b8!2sSCF%20Number%2031%2C%2019D%2C%20Chandigarh%2C%20160022!3m2!1d30.7297767!2d76.7911803!5e0!3m2!1sen!2sin!4v1695020503375!5m2!1sen!2sin" width="300" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>




      <div class="card text-center">


        <div class="card-footer bg-black text-white py-4">
          powered by w3.css

        </div>
      </div>
    </div>


  );
}

export default App;
