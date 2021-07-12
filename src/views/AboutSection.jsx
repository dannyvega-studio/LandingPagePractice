//Basic Imports//
import React from 'react';

function AboutSection() {

    return(
    <div>
        <title>UV Landing Page Excersice || ABOUT SECTION</title>
    <section class="text-white text-center  bg-success">
    <div class="d-flex w-100 p-5 flex-column justify-content-center">
    <div><h3>ABOUT</h3>
      <p>--------<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
      </svg>--------</p>
    </div>
    <div class="d-flex flex-column flex-md-row m-4 justify-content-around">
      <div class="p-5">Freelancer is a freee boostrap theme created by Satart Bostrap. the download
        includes the complete source files including HTML, CSS, and JavaScript as well
        as optional SASS  stylesheets for easy customization.</div>
      <div class="p-5">You can create your own custom avatar for the masthead,change the icon in the dividers, and 
        add your email address to the contact form to make it fully fuunctional!</div>
    </div>
    <div>
      <button type="button" class="btn btn-outline-warning text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
        </svg> Free download</button></div>
    </div>
    </section>
        </div>
        
    );
}

export default AboutSection;