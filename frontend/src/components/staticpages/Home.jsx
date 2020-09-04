import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

function Home() {
  
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
      <Navbar.Brand href="#home">
      <img
        src="/pusstrap.png"
        height="30px"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#rules">rules</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#team">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="/booking">booking</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
    
    <header className="masthead">
      <div className="container">
        <div className="intro-text">
          <div className="intro-heading text-uppercase">how cat<br></br>i help you?<br></br>どんな御用で<br></br>しょうか</div>
          <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger btn-5" href="/booking">BOOK NOW</a>
        </div>
      </div>
    </header>
  
    
    <section className="page-section" id="rules">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">HOUSE RULES</h2>
            <h3 className="section-subheading text-muted">Please obey or kick.<br></br>
              従うかキックしてください。</h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-hand-lizard-o fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Snake Sign</h4>
            <p className="text-muted">My cats scratch when they see a snake sign. Do not do a snake sign with your hands. I am not liable for any injury.<br></br>私の猫は蛇のサインを見ると引っ掻きます。手で蛇のサインをしないでください。私は怪我の責任を負いません。</p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-address-card-o fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">ID Check</h4>
            <p className="text-muted">Kids are not allowed in my cafe. Kids are human beings below the age of 18. Cats no like kids.<br></br>
            私のカフェでは子供は許可されていません。子供は18歳未満の人間です。</p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-beer fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Beer Consumption</h4>
            <p className="text-muted">You must drink beer and pat my cats. Only beer. No whiskey. Cats love the smell of an alcoholic.<br></br>ビールを飲んで猫をなでなでしょ。ビールだけ。ウイスキーはありません。猫はアルコールの匂いが大好きです。</p>
          </div>
        </div>
      </div>
    </section>
  
    
  
    
    <section className="page-section" id="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Team</h2>
            <h3 className="section-subheading text-muted">Team of money-making fellas.<br></br>金儲けの仲間のチーム。</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              <li>
                <div className="timeline-image hi">
                  <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt=""/>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="subheading">Jackson</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Jackson's heart is as black as his fur. Patting him is not recommended. Loves feathers.<br></br>
                    ジャクソンの心は彼の毛皮と同じくらい黒いです。彼をなでるのはお勧めできません。羽が大好きです。</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image hi2">
                  <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="subheading">Wilfred</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">They say he resembles a fish but I think he resembles a bunny.<br></br>
                    彼は魚に似ていると彼らは言うが、彼はうさぎに似ていると思う。</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image hi3">
                  <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="subheading">Sally</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">My little baby girl. Size of a palm. Do not squish.<br></br>
                    私の小さな女の赤ちゃん。手のひらの大きさ。スキッシュしないでください。</p>
                  </div>
                </div>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  
    
    
    
    <section className="page-section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted">Don't contact me.</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form id="contactForm" name="sentMessage" novalidate="novalidate">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-lg-12 text-center">
                  <div id="success"></div>
                  <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  
    
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <span className="copyright">Copyright &copy; Your Website 2019</span>
          </div>
          <div className="col-md-4">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                <a href="#something">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#something">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
      </div>
    );
  }

export default Home
