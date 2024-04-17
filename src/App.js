import logo from './images/logo.svg';
import Group from './images/Group_1.png'
import Rectangle_3_1 from './images/Rectangle_3_1.png'
import Frame_52 from './images/Frame_52.png'
import Frame_54 from './images/Frame_54.png'
import where from './images/where.png'
import Group_3 from './images/Group_3.png'
import kid5_1 from './images/kid5_1.png'

import './App.css';

function App() {
  return (
    // <div className="App">
      <header className="header-section">
        <nav class="nav-section">
            <div class="rectangle full"></div>
            <div class="rectangle half"></div>
            <div class={"rectangle mini-half"}>
                <div class={"flex-container"} >
                    <div class="group-logo">
                        <img src={Group} alt="grouplogo" class="gp-logo"/>
                    </div>
                    <div class="my-nav">
                            <ul class="nav-bar">
                                <li class="nav-item">
                                    <a class="nav-link" href="about">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="books">Books</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="contact">Contact Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="signup">Sign Up</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="login">Login</a></li>
                            </ul> 
                        </div>
                    </div>
                    <div class={"flex2"}>
                        <div class="content">
                            <h1 class="head-line">
                              A perfect learning <span class="span-kd">for your kids</span>
                            </h1>
                            <p className={"pre-content"}>
                                Cultivating a lifelong love for reading in <br/>
                                children, for within the covers of books lie the<br/> 
                                keys to creativity, wisdom, and excellence.<br/>
                            </p> 
                        </div>
                        <div class="frames">
                            <img src={Rectangle_3_1} alt="" class="rec3"/>
                            <img src={Frame_52} alt="" class="rec4"/>
                            <img src={Frame_54} alt="" class="rec5"/>
                            <div class="where">
                                <img src={where}  alt="" />
                            </div>
                        </div>
                        <div class="kid-container">
                            <img src={kid5_1} alt="kid image" class="kid-image"/>
                            <img src={Group_3} alt="" class="gp-image"/>
                          
                                <div class="social">
                                    <div>
                                        <p>Follow: _________</p></div>
                                    <div class="font-awesome">
                                        <i class="fa fa-facebook"></i>
                                        <i class="fa fa-linkedin"></i>
                                        <i class="fa fa-twitter"></i>  
                                    </div>
                                </div>
                        </div> 
                    </div>
                </div>
            </nav>
      </header>
    // </div>
  );
}

export default App;
