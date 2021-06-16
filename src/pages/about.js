import React from 'react'
import Layout from '../components/Layout'

const About = () => {

  return (
    <Layout>
      
      <div>
        <h1>Resume</h1>
        <div className="resume" >
        <h1><center>Zhongyu Zhang</center></h1>
        <center>
        <p><strong>Phone:</strong> 1-5875966983 <a href="https://github.com/zzygith" target ="_blank" rel="noreferrer"><strong>Github:</strong> github.com/zzygith</a><br/>
        <a href="https://www.linkedin.com/in/zhongyu-zhang-profile" target ="_blank" rel="noreferrer"><strong>Linkedin:</strong> linkedin.com/in/zhongyu-zhang-profile</a> <a href="mailto: zhangzhongyu98@gmail.com" target ="_blank" rel="noreferrer"><strong>Email:</strong> zhangzhongyu98@gmail.com</a></p>
        </center>
        <h2>Education</h2>
        <hr/>
        <br/>
        <div>
        <div>
        <a href="https://www.ualberta.ca/index.html" target ="_blank" rel="noreferrer"><h3 style={{ display: "inline-block" }}>University of Alberta</h3></a>&emsp;
              <span>(2020.09-2022.05)</span>
              <span style={{ float:"right"}}>
          Edmonton, Alberta, Canada
          </span>
          </div>
          <br/>
          <div>
          Master's Degree&emsp;Electrical and Computer Engineering
          </div>
          <br/>
          <div>
              <a href="https://www.en.sdu.edu.cn" target ="_blank" rel="noreferrer"><h3 style={{ display: "inline-block" }}>Shandong University</h3></a>&emsp;
              <span>(2016.09-2020.06)</span>
              <span style={{float:"right"}}>
          Jinan, Shandong, China
          </span>
          </div>
          <br/>
        <div>
        Bachelor‘s Degree&emsp;Automation
        </div>
        </div>
        <br/>
        <h2>Skills</h2>
        <hr/>
          <br />
          <div>
        <ul style={{listStylePosition:'inside'}}>
        <li>HTML5 / CSS3 / Flexbox / Grid / BootStrap / Layui</li>
        </ul>
        <br/>
        <ul style={{listStylePosition:'inside'}}>
        <li>JavaScript / JQuery / React / Redux / Styled Component / Storybook / Gatsby / GraphQL / Git / Python</li>
          </ul>
          </div>
          <br />
        <h2>Project</h2>
        <hr/>
        <br/>
        <h3>Instant Messaging UI</h3>
        <p><em>React &#x26; React Router &#x26; React Spring &#x26; Styled Component &#x26; Storybook</em></p>
        <p>Demo URL：<a href="https://chatui-show.netlify.app">https://chatui-show.netlify.app</a></p>
        <ul style={{listStylePosition:'inside'}}>
        <li>Used React + Hooks to develop a single-page chat application UI including 30+ components</li>
        <li>Built a three-column layout including navbar, message list and chat list by CSS-in-JS Grid, Flexbox</li>
        <li>Used React Spring to create animation and React Router to navigate</li>
        <li>Designed App UI with Storybook</li>
        </ul>
        <br/>
        <h3>Portfolio Site</h3>
        <p><em>GatsbyJS &#x26; CSS Modules &#x26; GraphQL</em></p>
        <p>Demo URL：<a href="https://zhongyublog.netlify.app/">https://zhongyublog.netlify.app/</a></p>
        <ul style={{listStylePosition:'inside'}}>
        <li>Converted my original portfolio from an HTML file to a React app using GatsbyJS and CSS Modules</li>
        <li>Used GraphQL to access markdown and other data</li>
        </ul>
        <br/>
        <h3>Backstage Management</h3>
        <p><em>HTML &#x26; CSS &#x26; Javascript &#x26; JQuery</em></p>
        <p>Demo URL：<a href="https://zhongyublog.netlify.app/">https://zhongyublog.netlify.app/</a></p>
        <ul style={{listStylePosition:'inside'}}>
        <li>Built a basic front-end user interface that allows webmaster to add, modify and remove content</li>
        <li>Third-party APIs used to verify or change user information, create drafts or publish articles</li>
        </ul>
        <br/>
        <h3>2D Human-Pose Estimation In Realtime</h3>
        <p><em>Python &#x26; OpenCV &#x26; OpenPose</em></p>
        <ul style={{listStylePosition:'inside'}}>
        <li>Used the OpenPose algorithm to detect the pose of human</li>
        <li>Calculated the angle between Neck-Nose line and Neck-Crotch line to correct student’s sitting position</li>
        </ul>
        <br/>
        <h3>Recognition and Classification of Paper-Plastic Bags</h3>
        <p><em>Python &#x26; OpenCV &#x26; SIFT &#x26; FLANN &#x26; CART tree</em></p>
        <ul style={{listStylePosition:'inside'}}>
        <li>Used the SIFT algorithm and FLANN fast matching to achieve the classification of different bags.</li>
        <li>Detected rectangles to identify the stacking by Hough transform line detection algorithm</li>
        <li>Extracted the printing defects outline by Template Matching and classified them by CART tree</li>
        </ul>

        </div>
      </div>
      
    </Layout>
  );
}
 
export default About
