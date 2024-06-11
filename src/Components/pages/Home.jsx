import React from 'react';
import video from '../images/video.mp4';
import './Home.css';
import topplaces from '../pages/topPlace';
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';


export const Home = () => {
  function Submit(e){
    const formEle = document.querySelector(".news_form")
    e.preventDefault()
    const formData = new FormData(formEle)
    fetch("https://script.google.com/macros/s/AKfycbw2QzpT4AsyEGnRnEl7dBUD6hsEI3ZU3XcyxbXj_Uh8KYLoxxYu2eTJntGrL-5xgyTwaw/exec",{
      method:"POST",
      body: formData
    }).then((res)=>res.json()).then((data)=>{
      console.log(data)
    }).catch((error)=>console.log(error));
  }
  return (
    <>
    <div className='header'>
      <video src={video} autoPlay muted loop className='video'></video>
      <div className="content">
        <h1>Welcome To</h1>
        <p><span>Travel</span> Tresure</p>
      </div>
    </div>
    <div className="main_container">
        <div className="man_container">
          <div className="man_container_para">
            <h1 className="para_heading">Exploring The World Since 2020</h1>
            <p className="para_paragraph">Discovering hidden gems and unique cultures, one adventure at a time.</p>
            <button className='button' onClick={topplaces}><p>Read Me</p></button>
          </div>
          <div className="man_container_img">

          </div>
        </div>
        <div className="blog">
          <h1 className='blog_header'>Feature Blog <spam>Post</spam></h1>
          <div className="blog_container">
            <div className="blog_post"><div className="post_container"></div><h1>Best Places To Visit In Kerela</h1></div>
            <div className="blog_post2"><div className="post_container2"></div><h1>Best Hill Station In India</h1></div>
            <div className="blog_post3"><div className="post_container3"></div><h1>Best Places To Visit Maharashtra</h1></div>
          </div>
          <div className="blog_conainer1">
            <div className="blog_post"><div className="post_container4"></div><h1>Best Beaches In India</h1></div>
            <div className="blog_post2"><div className="post_container5"></div><h1>Best Places To Visit In Jaipur</h1></div>
            <div className="blog_post3"><div className="post_container6"></div><h1>Best National Park In India</h1></div>
          </div>
        </div>
      </div>
      <div className='gh' >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.24719688548!2d77.06032211217199!3d28.44196377566837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d188ea675f3df%3A0xcd582b3a1d2197bf!2sApex%20Apartment%2C%20Sector%2045%2C%20Gurgaon!5e0!3m2!1sen!2sin!4v1717251122066!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{border:"0"}} 
            allowfullscreen=""  
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      <div className="news">
          <div className="news_content">
            <h1 className='news_heading'>FINDING THE PERFECT TRAILS TO VISIT IS EASY WITH NEWSLETTER</h1>
            <p className="news_para">Get the best travel tips and top trails directly in your inbox.</p>
            <form className='news_form' onSubmit={(e)=>Submit(e)}>
              <input type="text" name="Name" placeholder='Name' className='name'/>
              <input type="text" name="Email" placeholder='E-Mail' className='email' />
              <input type="submit" value="Submit" className="news_button" />
            </form>
          </div>
          <div className="news_image"></div>
        </div>
        <footer className="footer">
          <div className="footer_conter_top">
            <img src={logo} alt="logo" className='logo'/>
            <h1 className='footer_header'>Based in India is a blog by Abhinn Sayansh. <br/>His posts explore outdoor experiences through photos and diaries with tips & tricks.</h1>
          </div>
          <div className='footer_container'>
            <div className="footer_container1">
              <h1 className="footer_container1_header">ABOUT THE BLOG</h1>
              <p className="footer_container1_Para">Sharing unique travel experiences, practical tips, and inspiring stories from around the world.</p>
            </div>
            <div className="footer_container2">
              <h1 className="footer_container2_header">
                Subscribe
              </h1>
              <form className='news_form1' onSubmit={(e)=>Submit(e)}>
                <input type="text" name="Name" placeholder='Name' className='name1'/>
                <input type="text" name="Email" placeholder='E-Mail' className='email1' />
                <input type="submit" value="Submit" className="news_button1" />
              </form>
            </div>
            <div className="footer_container3">
              <h1 className="footer_container3_header">Title Bar</h1>
            <ul className= "nav-menu1">
                <li><NavLink to='/' >Home</NavLink></li>
                <li><NavLink to='/topplaces'>Top Places</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
            </ul> 
            </div>
            <br />
            <div className="copywrite1">
              <h1 className="copywrite_header1">All rights reserved by Abhinn Sayansh. Copywrite © 2024.</h1>
            </div>
          </div>
          <div className="copywrite">
              <h1 className="copywrite_header">All rights reserved by Abhinn Sayansh. Copywrite © 2024.</h1>
            </div>
        </footer>
    </>
  )
}
export default Home