import React from 'react'
import './About.css'
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';


export const About = () => {
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
      <div className="header1">
        <h1 className="header_heading">About Us</h1>
      </div>
      <div className="about_content">
        <div className="about_content_c">
          <h1>About Travel Treasures</h1>
          <p>Welcome to Travel Treasures! Founded by Abhinn Sayansh, we share captivating travel stories, guides, and tips to inspire your adventures. Discover hidden gems and popular hotspots through our personal experiences, stunning photography, and practical advice. Join our community to explore diverse cultures and create unforgettable memories. Let's embark on this incredible journey together. Happy Travels! Abhinn Sayansh, Founder, Travel Treasures.</p>
        </div>
        <div className="about_image"></div>
      </div>
      <br />
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

export default About