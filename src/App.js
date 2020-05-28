import React from 'react';
import './App.css';


function App() {
  return (
    <div >
      
      <nav className="navbar navbar-default horizon-nav">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand logo" href="#">
              <img alt="Brand" src="horizon/horizon.png" className=""/>
            </a>
          </div>
          <div className=" flag">
            <img src="horizon/gh.svg" height="20px" width="20px"/>
            <img src="horizon/ng.svg" height="20px" width="20px"/>
            <img src="horizon/ke.svg"height="20px" width="20px"/>
          </div>
          <p className="navbar-text navbar-right"> <a href="#" className="navbar-link">About Us</a></p>
        </div>
	    </nav>

      <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
        {/* Indicators */}
        <ol className="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>

        {/* Wrapper for slides */}
        <div className="carousel-inner slider" role="listbox">
          <div className="item active">
            <img src="horizon/horizon1.jpg" alt="..."/>
            <div className="carousel-caption">
              ...
            </div>
          </div>
          <div className="item">
            <img src="horizon/horizon4.jpg" alt="..."/>
          </div>
          <div className="item">
            <img src="horizon/horizon5.jpg" alt="..." />
          </div>
          ...
        </div>

        {/* Controls  */}
        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
    	</div>


      <div className="container">
	    <div className="row">

        <h1 className="text-center">PLANS</h1>
        <div className="col-sm-6 col-md-3">
          <div className="thumbnail galary">
            <img src="horizon/horizon2.jpg" alt="..."/>
            <div className="caption">
              <h3>Meeting Room</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris </p>
              
            </div>
          </div>
        </div>
		 
        <div className="col-sm-6 col-md-3">
          <div className="thumbnail galary">
            <img src="horizon/horizon3.jpg" alt="..."/>
            <div className="caption">
              <h3>Serviced Offices</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris </p>
              
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-3">
          <div className="thumbnail galary">
            <img src="horizon/horizon4.jpg" alt="..."/>
            <div className="caption">
              <h3>Virtual Offices</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris </p>
              
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-3">
          <div className="thumbnail galary">
            <img src="horizon/horizon5.jpg" alt="..."/>
            <div className="caption">
              <h3>Customized Offices</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris </p>
              
            </div>
          </div>
        </div>
      </div>
      </div>


      <footer >
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-md-4 ">
              <h3>Visit Us In Kenya</h3>
              <p>Nairobi,Kenya</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
                  tempor incididunt ut labore et dolore magna aliqua.  
                </p>
            </div>

            <div className="col-sm-6 col-md-4">
              <h3>Visit Us In Ghana</h3>
              <p>Accra,Ghana</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
                  </p>
            </div>

            <div className="col-sm-6 col-md-4">
              <h3>Visit Us In Nigeria</h3>
              <p>Lagos,Nigeria</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
                  tempor incididunt 
                  </p>
            </div>
          </div>
        </div>
	    </footer>

    </div>
  );
}

export default App;
