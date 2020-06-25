import React, {Component} from 'react';
class Home extends React.Component{
    render(){
        return(
            <div>
               <div className="loader" />
        {/*cookie*/}
        {/* <div class="cookie">
          <div class="container">
            <div class="clearfix">
              <span>Please note this website requires cookies in order to function correctly, they do not store any specific information about you personally.</span>
              <div class="f-right"><a href="#" class="button button-type-3 button-orange">Accept Cookies</a><a href="#" class="button button-type-3 button-grey-light">Read More</a></div>
            </div>
          </div>
        </div>*/}
        {/* - - - - - - - - - - - - - Wrapper - - - - - - - - - - - - - - - - */}
        <div id="wrapper" className="wrapper-container">
          {/* - - - - - - - - - - - - Mobile Menu - - - - - - - - - - - - - - */}
          <nav id="mobile-advanced" className="mobile-advanced" />
          {/* - - - - - - - - - - - - - Header - - - - - - - - - - - - - - - - */}
          <header id="header" className="header style-2">
            {/* search-form */}
            <div className="searchform-wrap">
              <div className="vc-child h-inherit relative">
                <form>
                  <input type="text" name="search" placeholder="Start typing..." />
                  <button type="button" />
                </form>
              </div>
              <button className="close-search-form" />
            </div>
            {/* top-header */}
            <div className="top-header">
              {/* - - - - - - - - - - - / Mobile Menu - - - - - - - - - - - - - */}
              {/*main menu*/}
              <div className="menu-holder">
                <div className="menu-wrap">
                  <div className="table-row">
                    {/* logo */}
                    <div className="logo-wrap">
                      <a href="index.html" className="logo"><img src="assets/images/logo.png" alt="" /></a>
                    </div>
                    {/* Menu & TopBar */}
                    <div className="nav-item">
                      {/* Top Bar */}
                      <div className="contact-info-menu">
                        <div className="contact-info-item">
                          <i className="icon-phone" />
                          <a href="callto:#">800-987-65-43</a>
                        </div>
                        <div className="contact-info-item">
                          <i className="icon-mail-1" />
                          <a href="mailto:#">info@companyname.com</a>
                        </div>
                        <div className="contact-info-item">
                          <i className="icon-location" />
                          <span>9870 St Vincent Place, Glasgow, DC 45 Fr 45</span>
                        </div>
                        <div className="contact-info-item lang-button">
                          <i className="icon-globe-1" />
                          <a href="#">English</a>
                          <ul className="dropdown-list">
                            <li><a href="#">English</a></li>
                            <li><a href="#">German</a></li>
                            <li><a href="#">Spanish</a></li>
                          </ul>
                        </div>
                        <div className="contact-info-item">
                          <i className="icon-globe-1" />
                          <a href="#">Client/Register</a>
                        </div>
                        <div className="contact-info-item">
                          <ul className="social-icons">
                            <li className="fb-icon"><a href="#"><i className="icon-facebook" /></a></li>
                            <li className="google-icon"><a href="#"><i className="icon-gplus" /></a></li>
                            <li className="tweet-icon"><a href="#"><i className="icon-twitter" /></a></li>
                            <li className="insta-icon"><a href="#"><i className="icon-instagram-4" /></a></li>
                          </ul>
                        </div>
                      </div>
                      {/* - - - - - - - - - - - - - Navigation - - - - - - - - - - - - - - - - */}
                      <nav id="main-navigation" className="main-navigation">
                        <ul id="menu" className="clearfix">
                          <li className="current"><a href="index.html">Home</a>
                          </li>
                          <li><a href="#about">About</a>
                            {/*sub menu*/}
                          </li>
                          <li><a href="#services">Services</a>
                          </li>
                          <li><a href="#blog">Blog</a>
                            {/*sub menu*/}
                          </li>
                          <li><a href="#contacts">Contacts</a>
                            {/*sub menu*/}
                          </li>
                        </ul>
                      </nav>
                      {/* - - - - - - - - - - - - end Navigation - - - - - - - - - - - - - - - */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* bottom-separator */}
            <div className="bottom-separator" />
          </header>
          {/* - - - - - - - - - - - - end Header - - - - - - - - - - - - - - - */}
          {/* - - - - - - - - - - - - - Content - - - - - - - - - - - - - - - - */}
          <div id="content">
            {/* - - - - - - - - - - - - - Revolution Slider - - - - - - - - - - - - - - - - */}
            <div className="rev-slider-wrapper" style={{zIndex: 0}}>
              <div id="rev-slider" className="rev-slider" data-version={5.0}>
                <ul>
                  <li data-transition="fade" className="align-center">
                    <img src="assets/pic/rsz_b.jpg" className="rev-slidebg" alt="" />	    
                    {/* - - - - - - - - - - - - - Layer 1 - - - - - - - - - - - - - - - - */}	    
                    <div className="tp-caption tp-resizeme scaption-white-text rs-parallaxlevel-1" data-x="center" data-y="top" data-voffset={180} data-whitespace="nowrap" data-frames="[{&quot;delay&quot;:150,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;y:[175%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]" data-responsive_offset="on" data-elementdelay="0.05">Welcome to SuperOwl Kindergarten!
                    </div>
                    {/* - - - - - - - - - - - - - End of Layer 1 - - - - - - - - - - - - - - - - */}	    
                    {/* - - - - - - - - - - - - - Layer 2 - - - - - - - - - - - - - - - - */}	    
                    <div className="tp-caption tp-resizeme scaption-white-large rs-parallaxlevel-2" data-x="center" data-y="top" data-voffset={225} data-frames="[{&quot;delay&quot;:450,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;y:[175%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]">Where Learning <br /> is Serious Fun
                    </div>
                    {/* - - - - - - - - - - - - - End of Layer 2 - - - - - - - - - - - - - - - - */}	        	    
                    {/* - - - - - - - - - - - - - Layer 3 - - - - - - - - - - - - - - - - */}	    
                    <div className="tp-caption tp-resizeme rs-parallaxlevel-3" data-x="center" data-y="top" data-voffset={420} data-whitespace="nowrap" data-frames="[{&quot;delay&quot;:750,&quot;speed&quot;:2500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[-100%];z:0;rX:0deg;rY:0deg;rZ:0deg;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;300&quot;,&quot;ease&quot;:&quot;Power1.easeInOut&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;&quot;}]">
                      <a href="#" className="btn btn-big type-2 btn-style-7">Read More</a>
                      <a href="#" className="btn btn-big">Enrol Now</a>
                    </div>
                    {/* - - - - - - - - - - - - - End of Layer 3 - - - - - - - - - - - - - - - - */} 
                  </li>
                  <li data-transition="fade" className="align-center">
                    <img src="assets/pic/rsz_e.jpg" className="rev-slidebg" alt="" />	    
                    {/* - - - - - - - - - - - - - Layer 1 - - - - - - - - - - - - - - - - */}	    
                    <div className="tp-caption tp-resizeme scaption-white-text rs-parallaxlevel-1" data-x="center" data-y="top" data-voffset={180} data-whitespace="nowrap" data-frames="[{&quot;delay&quot;:150,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;y:[175%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]" data-responsive_offset="on" data-elementdelay="0.05">Welcome to superOwl School of Early Learning!
                    </div>
                    {/* - - - - - - - - - - - - - End of Layer 1 - - - - - - - - - - - - - - - - */}	    
                    {/* - - - - - - - - - - - - - Layer 2 - - - - - - - - - - - - - - - - */}	    
                    <div className="tp-caption tp-resizeme scaption-white-large rs-parallaxlevel-2" data-x="center" data-y="top" data-voffset={225} data-frames="[{&quot;delay&quot;:450,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;y:[175%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]">A Pace to Explore, <br /> Imaging and Learn
                    </div>
                    {/* - - - - - - - - - - - - - End of Layer 2 - - - - - - - - - - - - - - - - */}	        	    
                    {/* - - - - - - - - - - - - - Layer 3 - - - - - - - - - - - - - - - - */}	    
                    <div className="tp-caption tp-resizeme rs-parallaxlevel-3" data-x="center" data-y="top" data-voffset={420} data-whitespace="nowrap" data-frames="[{&quot;delay&quot;:550,&quot;speed&quot;:2500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[-100%];z:0;rX:0deg;rY:0deg;rZ:0deg;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;300&quot;,&quot;ease&quot;:&quot;Power1.easeInOut&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;&quot;}]">
                      <a href="#" className="btn btn-big type-2 btn-style-7">Read More</a>
                      <a href="#" className="btn btn-big">Enrol Now</a>
                    </div>
                    {/* - - - - - - - - - - - - - End of Layer 3 - - - - - - - - - - - - - - - - */} 
                  </li>
                  <li data-transition="fade" className="align-center">
                    <img src="assets/pic/rsz_c.jpg" className="rev-slidebg" alt="" />	    
                    {/* - - - - - - - - - - - - - Layer 1 - - - - - - - - - - - - - - - - */}	    
                    <div className="tp-caption tp-resizeme scaption-white-text rs-parallaxlevel-1" data-x="center" data-y="top" data-voffset={180} data-whitespace="nowrap" data-frames="[{&quot;delay&quot;:150,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;y:[175%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]" data-responsive_offset="on" data-elementdelay="0.05">Welcome to SuperOwl Kindergarten!
                    </div>
                    {/* - - - - - - - - - - - - - End of Layer 1 - - - - - - - - - - - - - - - - */}	    
                    {/* - - - - - - - - - - - - - Layer 2 - - - - - - - - - - - - - - - - */}	    
                    <div className="tp-caption tp-resizeme scaption-white-large rs-parallaxlevel-2" data-x="center" data-y="top" data-voffset={225} data-frames="[{&quot;delay&quot;:450,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;y:[175%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]">Where Learning <br /> is Serious Fun
                    </div>
                    {/* - - - - - - - - - - - - - End of Layer 2 - - - - - - - - - - - - - - - - */}	        	    
                    {/* - - - - - - - - - - - - - Layer 3 - - - - - - - - - - - - - - - - */}	    
                    <div className="tp-caption tp-resizeme rs-parallaxlevel-3" data-x="center" data-y="top" data-voffset={420} data-whitespace="nowrap" data-frames="[{&quot;delay&quot;:750,&quot;speed&quot;:2500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[-100%];z:0;rX:0deg;rY:0deg;rZ:0deg;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;300&quot;,&quot;ease&quot;:&quot;Power1.easeInOut&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;&quot;}]">
                      <a href="#" className="btn btn-big type-2 btn-style-7">Read More</a>
                      <a href="#" className="btn btn-big">Enrol Now</a>
                    </div>
                    {/* - - - - - - - - - - - - - End of Layer 3 - - - - - - - - - - - - - - - - */} 
                  </li>
                </ul>
              </div>
            </div>
            {/* - - - - - - - - - - - - - End of Slider - - - - - - - - - - - - - - - - */}
            {/* page-section */}
            {/*/ content-element */}
            <div className="page-section">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 wow animated fadeIn slower">
                    <img src="assets/pic/rsz_j.jpg" alt="" />
                  </div>
                  <div className="col-md-6 wow animated fadeIn slower" id="about">
                    <h3>Welcome to SuperOwl <br /> School of Early Learning</h3>
                    <p className="text-size-medium">Donec eget tellus non erat lacinia fermentum. Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euismod in, auctor ut, ligula. </p>
                    {/* signature */}
                    <div className="signature">
                      <img src="assets/images/signa.png" alt="" />	    					
                      <span>Principal and Owner</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="page-section">
              <div className="container ">
                <div className="row">
                  <div className="col-md-6 wow animated fadeIn slower">
                    <h3>Welcome to SuperOwl <br /> School of Early Learning</h3>
                    <p className="text-size-medium">Donec eget tellus non erat lacinia fermentum. Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euismod in, auctor ut, ligula. </p>
                    {/* signature */}
                    <div className="signature">
                      <img src="assets/images/signa.png" alt="" />	    					
                      <span>Principal and Owner</span>
                    </div>
                  </div>
                  <div className="col-md-6 wow animated fadeIn slower">
                    <img src="assets/pic/rsz_h.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="section-with-carousel " id="services">
              <div className="comment-section align-center">
                <div className="container">
                  <h2 className="section-title" style={{marginBottom: '80px'}}>Our Services</h2>
                  {/* - - - - - - - - - - - - Owl-Carousel - - - - - - - - - - - - - - - */}
                  <div className="carousel-type-1 overlap" style={{zIndex: 100}}>
                    <div className="owl-carousel testimonial type-2" data-max-items={3} data-item-margin={30} data-autoplay="true">
                      {/* Slide */}				          
                      <div className="item-carousel">
                        {/* Carousel Item */}
                        <div className="welcome-col">
                          <div className="welcome-item wow animated zoomIn slower">
                            <div>
                              <div className="welcome-img">
                                <img src="assets/pic/care.jpg" alt="" />
                              </div>
                              <div className="welcome-content" style={{width: '100%', height: '350px'}}>
                                <svg className="bigHalfCircle" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none">
                                  <path d="M0 100 C40 0 60 0 100 100 Z" />
                                </svg>
                                <h4 className="welcome-title">Child Care</h4>
                                <p>Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis.</p>
                                <a href="#" className="btn type-2 btn-style-7 read">Read More</a>
                                <span className="licon-baby-bottle" />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /Carousel Item */} 
                      </div>
                      {/* /Slide */}
                      {/* Slide */}				          
                      <div className="item-carousel">
                        {/* Carousel Item */}
                        <div className="welcome-col">
                          <div className="welcome-item style-2 wow animated zoomIn slower">
                            <div className>
                              <div className="welcome-img">
                                <img src="assets/pic/rsz_x.jpg" alt="" />
                              </div>
                              <div className="welcome-content" style={{width: '100%', height: '350px'}}>
                                <svg className="bigHalfCircle" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none">
                                  <path d="M0 100 C40 0 60 0 100 100 Z" />
                                </svg>
                                <h4 className="welcome-title">Healthy Meals</h4>
                                <p>Quisque diam lorem, interdum vitae, dapibus ac, scelerisque vitae, pede. Donec eget tellus non erat lacinia fermentum. Auctor pulvinar. </p>
                                <a href="#" className="btn type-2 btn-style-7">Read More</a>
                                <span className="licon-platter" />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /Carousel Item */} 
                      </div>
                      {/* /Slide */}
                      {/* Slide */}				          
                      <div className="item-carousel">
                        {/* Carousel Item */}
                        <div className="welcome-col">
                          <div className="welcome-item style-3 wow animated zoomIn slower">
                            <div className>
                              <div className="welcome-img">
                                <img src="assets/pic/rsz_k.jpg" alt="" />
                              </div>
                              <div className="welcome-content" style={{width: '100%', height: '350px'}}>
                                <svg className="bigHalfCircle" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none">
                                  <path d="M0 100 C40 0 60 0 100 100 Z" />
                                </svg>
                                <h4 className="welcome-title">Active Learning</h4>
                                <p>Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet, tincidunt ac, viverra sed, nulla. Donec porta diam.</p>
                                <a href="#" className="btn type-2 btn-style-7">Read More</a>
                                <span className="licon-graduation-hat" />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /Carousel Item */} 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="page-section">
              <div className="container-fluid">
                <div className="align-center">
                  <h2 className="section-title" style={{marginBottom: '80px'}}>Why Choose Us</h2>
                  <div className="icons-box type-2 fx-col-4 wow animated fadeIn slower">
                    {/* - - - - - - - - - - - - - Icon Box Item - - - - - - - - - - - - - - - - */}				
                    <div className="icons-wrap">
                      <div className="icons-item">
                        <div className="item-box"> <i className="licon-baby-bottle" />
                          <h4 className="icons-box-title">
                            Child Care
                          </h4>
                          <p>
                            Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus.
                          </p>
                          <a href="#" className="btn type-2 btn-style-6">Read More</a>
                        </div>
                      </div>
                    </div>
                    {/* - - - - - - - - - - - - - Icon Box Item - - - - - - - - - - - - - - - - */}				
                    <div className="icons-wrap">
                      <div className="icons-item">
                        <div className="item-box"> <i className="licon-platter" />
                          <h4 className="icons-box-title">
                            Health Meals
                          </h4>
                          <p>
                            Quisque diam lorem, interdum vitae, dapibus ac, scelerisque vitae, pede. 
                          </p>
                          <a href="#" className="btn type-2 btn-style-6">Read More</a>
                        </div>
                      </div>
                    </div>
                    {/* - - - - - - - - - - - - - Icon Box Item - - - - - - - - - - - - - - - - */}				
                    <div className="icons-wrap">
                      <div className="icons-item">
                        <div className="item-box"> <i className="licon-graduation-hat" />
                          <h4 className="icons-box-title">
                            Learning &amp; Fun
                          </h4>
                          <p>
                            Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna.
                          </p>
                          <a href="#" className="btn type-2 btn-style-6">Read More</a>
                        </div>
                      </div>
                    </div>
                    {/* - - - - - - - - - - - - - Icon Box Item - - - - - - - - - - - - - - - - */}				
                    <div className="icons-wrap">
                      <div className="icons-item">
                        <div className="item-box"> <i className="licon-football" />
                          <h4 className="icons-box-title">
                            Physical Activity
                          </h4>
                          <p>
                            Quisque diam lorem, interdum vitae, dapibus ac, scelerisque vitae, pede. 
                          </p>
                          <a href="#" className="btn type-2 btn-style-6" id="blog">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="page-section-bg align-center">
              <div className="container">
                <h2 className="section-title type2">Our Blog</h2>
                {/* welcome area */}
                <div className="welcome-section blog-type fx-col-3">
                  {/* welcome element */}
                  <div className="welcome-col wow animated slideInLeft slower">
                    <div className="welcome-item" style={{display: 'block', width: '100%', height: '500px'}}>
                      <div className="welcome-inner">
                        <div className="welcome-img" style={{display: 'block', width: '360px', height: '240px'}}>
                          <img src="assets/pic/bab.jpg" alt="" />
                          <time className="entry-date" dateTime="2016-08-20">
                            <span>20</span>aug
                          </time>
                        </div>
                        <div className="welcome-content">
                          <svg className="bigHalfCircle" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 100 C40 0 60 0 100 100 Z" />
                          </svg>
                          <div className="entry">
                            {/* - - - - - - - - - - - - - Entry body - - - - - - - - - - - - - - - - */}
                            <div className="entry-body">
                              <h5 className="entry-title"><a href="#">Vestibulum Ante Ipsum</a></h5>
                              <p>Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euismod in, auctor ut, ligula. </p>
                            </div>
                            {/* - - - - - - - - - - - - - End of Entry body - - - - - - - - - - - - - - - - */}
                            {/* - - - - - - - - - - - - - Entry meta - - - - - - - - - - - - - - - - */}
                            <div className="entry-meta">
                              <div className="entry-byline"><a href="#">Admin</a></div>
                              <a href="#" className="entry-news">News</a>
                              <a href="#" className="entry-comments-link">3</a>
                            </div>
                            {/* - - - - - - - - - - - - - Entry meta - - - - - - - - - - - - - - - - */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* welcome element */}
                  <div className="welcome-col wow animated fadeIn slower">
                    <div className="welcome-item" style={{display: 'block', width: '100%', height: '500px'}}>
                      <div className="welcome-inner">
                        <div className="welcome-img" style={{display: 'block', width: '360px', height: '240px'}}>
                          <img src="assets/pic/rsz_l.jpg" alt="" />
                          <time className="entry-date" dateTime="2016-08-17">
                            <span>17</span>aug
                          </time>
                        </div>
                        <div className="welcome-content">
                          <svg className="bigHalfCircle" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 100 C40 0 60 0 100 100 Z" />
                          </svg>
                          <div className="entry">
                            {/* - - - - - - - - - - - - - Entry body - - - - - - - - - - - - - - - - */}
                            <div className="entry-body">
                              <h5 className="entry-title"><a href="#">Donec Eget Tellus</a></h5>
                              <p>Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis quis, lobortis dignissim, pulvinar ac, lorem. </p>
                            </div>
                            {/* - - - - - - - - - - - - - End of Entry body - - - - - - - - - - - - - - - - */}
                            {/* - - - - - - - - - - - - - Entry meta - - - - - - - - - - - - - - - - */}
                            <div className="entry-meta">
                              <div className="entry-byline"><a href="#">Admin</a></div>
                              <a href="#" className="entry-news">Announcements</a>
                              <a href="#" className="entry-comments-link">0</a>
                            </div>
                            {/* - - - - - - - - - - - - - Entry meta - - - - - - - - - - - - - - - - */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* welcome element */}
                  <div className="welcome-col wow animated slideInRight slower">
                    <div className="welcome-item" style={{display: 'block', width: '100%', height: '500px'}}>
                      <div className="welcome-inner">
                        <div className="welcome-img" style={{display: 'block', width: '360px', height: '240px'}}>
                          <img src="assets/pic/ba.jpg" alt="" />
                          <time className="entry-date" dateTime="2016-08-10">
                            <span>10</span>aug
                          </time>
                        </div>
                        <div className="welcome-content">
                          <svg className="bigHalfCircle" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 100 C40 0 60 0 100 100 Z" />
                          </svg>
                          <div className="entry">
                            {/* - - - - - - - - - - - - - Entry body - - - - - - - - - - - - - - - - */}
                            <div className="entry-body">
                              <h5 className="entry-title"><a href="#">Nulla Venenatis</a></h5>
                              <p>Vestibulum sed ante. Donec sagittis euismod purus.Sed ut perspiciatis sit voluptatem accusantium.</p>
                            </div>
                            {/* - - - - - - - - - - - - - End of Entry body - - - - - - - - - - - - - - - - */}
                            {/* - - - - - - - - - - - - - Entry meta - - - - - - - - - - - - - - - - */}
                            <div className="entry-meta">
                              <div className="entry-byline"><a href="#">Admin</a></div>
                              <a href="#" className="entry-news">News</a>
                              <a href="#" className="entry-comments-link">7</a>
                            </div>
                            {/* - - - - - - - - - - - - - Entry meta - - - - - - - - - - - - - - - - */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-with-carousel with-bg">
              <div className="row" style={{backgroundColor: 'white'}}>
                <div className="col-md-6">
                  <div className="img-holder">
                    <img src="assets/pic/as.jpg" alt="" align="right" style={{borderTopRightRadius: '350px', borderBottomRightRadius: '300px'}} />
                  </div>
                </div>
                <div className="col-md-6" style={{backgroundColor: 'white'}}>
                  <div className="testimonial-section align-center">
                    <h2 className="section-title" style={{color: 'black'}}>What Parents Say</h2>
                    {/* - - - - - - - - - - - - Owl-Carousel - - - - - - - - - - - - - - - */}
                    <div className="carousel-type-1">
                      <div className="owl-carousel" data-max-items={1} data-autoplay="true">
                        {/* Slide */}				          
                        <div className="item-carousel">
                          {/* Carousel Item */}				          
                          <div className="testimonial type-2">
                            <div className="author-box">
                              <a href="#" className="avatar"><img src="assets/images/e.jpg" alt="" /></a>
                            </div>
                            <div className="testimonial-holder">
                              <blockquote>
                                <p>
                                  “Donec eget tellus non erat lacinia fermentum. Donec in <br /> velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia <br /> est. Proin dictum elementum velit.”
                                </p>
                              </blockquote>
                            </div>
                            <div className="author-box">
                              <div className="author-info">
                                <span className="author-name">Amanda Johnson</span>
                              </div>
                            </div>
                          </div>
                          {/* /Carousel Item */} 
                        </div>
                        {/* /Slide */}				          
                        {/* Slide */}				          
                        <div className="item-carousel">
                          {/* Carousel Item */}				          
                          <div className="testimonial type-2">
                            <div className="author-box">
                              <a href="#" className="avatar"><img src="assets/images/f.jpg" alt="" /></a>
                            </div>
                            <div className="testimonial-holder">
                              <blockquote>
                                <p>
                                  “Donec eget tellus non erat lacinia fermentum. Donec in <br /> velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia <br /> est. Proin dictum elementum velit.”
                                </p>
                              </blockquote>
                            </div>
                            <div className="author-box">
                              <div className="author-info">
                                <span className="author-name">Amanda Johnson</span>
                              </div>
                            </div>
                          </div>
                          {/* /Carousel Item */} 
                        </div>
                        {/* /Slide */}
                        {/* Slide */}				          
                        <div className="item-carousel">
                          {/* Carousel Item */}				          
                          <div className="testimonial type-2">
                            <div className="author-box">
                              <a href="#" className="avatar"><img src="assets/images/h.jpg" alt="" /></a>
                            </div>
                            <div className="testimonial-holder">
                              <blockquote>
                                <p>
                                  “Donec eget tellus non erat lacinia fermentum. Donec in <br /> velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia <br /> est. Proin dictum elementum velit.”
                                </p>
                              </blockquote>
                            </div>
                            <div className="author-box">
                              <div className="author-info">
                                <span className="author-name">Amanda Johnson</span>
                              </div>
                            </div>
                          </div>
                          {/* /Carousel Item */} 
                        </div>
                        {/* /Slide */}	
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="call-out type-2">
              <div className="container">
                <div className="row table-row">
                  <div className="col-sm-8">
                    <h2>Enrol Your Child For 2017-2018</h2>
                    <p>Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. </p>
                  </div>
                  <div className="col-sm-4">
                    <div className="align-right">
                      <div className="button-holder enroll">
                        <a href="https://forms.gle/DDpZ73GhCu5sN6he6" className="btn btn-big" target="_blank" id="contacts">Enrol Now!</a>
                        <p>Or Call <span>855-605-8080</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="holder-bg type-3 parallax-section" data-bg="assets/pic/avc.jpg">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <h2 className="section-title" style={{color: 'black'}}>Frequently Asked Questions</h2>
                    <div className="accordion style-2">
                      {/*accordion item*/}		        
                      <div className="accordion-item">
                        <h6 className="a-title">Ut tellus dolor, dapibus eget?</h6>
                        <div className="a-content">
                          <p>
                            Donec eget tellus non erat lacinia fermentum. Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. 
                          </p>
                          <p>
                            Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euismod in, auctor ut, ligula.
                          </p>
                        </div>
                      </div>
                      {/*accordion item*/}		        
                      <div className="accordion-item">
                        <h6 className="a-title active">In pede mi, aliquet sit amet, euismod?</h6>
                        <div className="a-content">
                          <p>
                            Donec eget tellus non erat lacinia fermentum. Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante.  
                          </p>
                          <p>
                            Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euismod in, auctor ut, ligula.
                          </p>
                        </div>
                      </div>
                      {/*accordion item*/}		        
                      <div className="accordion-item">
                        <h6 className="a-title">Quis autem vel eum?</h6>
                        <div className="a-content">
                          <p>
                            Donec eget tellus non erat lacinia fermentum. Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. 
                          </p>
                          <p>
                            Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euismod in, auctor ut, ligula.
                          </p>
                        </div>
                      </div>
                      {/*accordion item*/}		        
                      <div className="accordion-item">
                        <h6 className="a-title">Proin dictum elementum velit?</h6>
                        <div className="a-content">
                          <p>
                            Donec eget tellus non erat lacinia fermentum. Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. 
                          </p>
                          <p>
                            Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euismod in, auctor ut, ligula.
                          </p>
                        </div>
                      </div>
                      {/*accordion item*/}		        
                      <div className="accordion-item">
                        <h6 className="a-title">Aenean auctor wisi et urna?</h6>
                        <div className="a-content">
                          <p>
                            Donec eget tellus non erat lacinia fermentum. Donec in velit vel ipsum auctor pulvinar. Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. 
                          </p>
                          <p>
                            Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euismod in, auctor ut, ligula.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="title-holder">
                      <h2 className="section-title" style={{color: 'black'}}>Enrol Your Child For 2017-2018</h2>
                      <p>Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat.</p>
                    </div>
                    <form>
                      <input type="text" placeholder="Parent’s name" />
                      <input type="text" placeholder="Phone" />
                      <input type="email" placeholder="Email" />
                      <textarea rows={5} placeholder="Message" defaultValue={""} />
                      <a href="#" className="btn">Submit</a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* - - - - - - - - - - - - end Content - - - - - - - - - - - - - - - */}
          {/* - - - - - - - - - - - - - Footer - - - - - - - - - - - - - - - - */}
          <footer id="footer" className="footer">
            {/* Top footer */}
            <div className="top-footer">
              <div className="container">
                <div className="icons-box fx-col-4">
                  {/* - - - - - - - - - - - - - Icon Box Item - - - - - - - - - - - - - - - - */}				
                  <div className="icons-wrap">
                    <div className="icons-item">
                      <div className="item-box"> <i className="licon-map-marker" />
                        <h5 className="icons-box-title">
                          <a href="#">Location</a>
                        </h5>
                        <p>
                          9870 St Vincent Place, <br /> Glasgow, DC 45 Fr 45
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* - - - - - - - - - - - - - Icon Box Item - - - - - - - - - - - - - - - - */}				
                  <div className="icons-wrap">
                    <div className="icons-item">
                      <div className="item-box"><i className="licon-clock3" />
                        <h5 className="icons-box-title">
                          <a href="#">Opening Hours</a>
                        </h5>
                        <p>
                          Monday – Friday <br /> 8:00 AM – 5:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* - - - - - - - - - - - - - Icon Box Item - - - - - - - - - - - - - - - - */}				
                  <div className="icons-wrap">
                    <div className="icons-item">
                      <div className="item-box"> <i className="licon-smartphone" />
                        <h5 className="icons-box-title">
                          <a href="#">Contact Us</a>
                        </h5>
                        <p>
                          +1 800 559 6580 <br /> <a href="mailto:#" className="link-text">mail@companyname.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* - - - - - - - - - - - - - Icon Box Item - - - - - - - - - - - - - - - - */}				
                  <div className="icons-wrap">
                    <div className="icons-item">
                      <div className="item-box"> <i className="licon-share2" />
                        <h5 className="icons-box-title">
                          <a href="#">Stay Connected</a>
                        </h5>
                        <ul className="social-icons style-2">
                          <li className="fb-icon"><a href="#"><i className="icon-facebook" /></a></li>
                          <li className="google-icon"><a href="#"><i className="icon-gplus" /></a></li>
                          <li className="tweet-icon"><a href="#"><i className="icon-twitter" /></a></li>
                          <li className="insta-icon"><a href="#"><i className="icon-instagram-4" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Copyright */}
            <div className="copyright-section">
              <div className="container">
                <p className="copyright">Copyright <span>Educase</span> © 2020. All Rights Reserved</p>
              </div>
            </div>
          </footer>
          <div id="footer-scroll" />
          {/* - - - - - - - - - - - - end Footer - - - - - - - - - - - - - - - */}
        </div>
            </div>
        )
    }
}
export default Home