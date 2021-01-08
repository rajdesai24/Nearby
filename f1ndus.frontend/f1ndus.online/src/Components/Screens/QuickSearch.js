import React from 'react';
import UserNav from "../Parts/UserNav";
import "../Parts/QuickSearch.css";
import $ from 'jquery';
export default function CenteredGrid() {
  return (
    <>
      <UserNav/>
      <section>
  <div class="resetCards"><a href="#">Restart</a></div>
  <ol class="slider-list">
    <li class="slide">
      <img src="http://lorempixel.com/300/200" alt="img01"/>
      <p class="message">
          John would probably prefer meetings with <span class="subject">an structured agenda</span>.
      </p>    
    </li>
    <li class="slide">
      <img src="http://lorempixel.com/300/200?????" alt="img01"/>
      <p class="message">I think John is very <span class="subject">meticulous and careful</span> at work.</p>
      
    </li>
    <li class="slide">
      <img src="http://lorempixel.com/300/200????" alt="img01"/>
      <p class="message">John seems to be a <span class="subject">creative</span> person.</p>      
    </li>
    <li class="slide">
      <img src="http://lorempixel.com/300/200???" alt="img01"/>
      <p class="message">John needs to have <span class="subject">only an idea of the end goal</span> when working on a new project.</p>
    </li>
    <li class="slide">
        <img src="http://lorempixel.com/300/200??" alt="img01"/>
      <p class="message">John is usually <span class="subject">quiet around new people</span>.</p>
      
    </li>
		<li class="slide">
      <img src="http://lorempixel.com/300/200?" alt="img01"/>
       <p class="message">
          In general, John's workstyle tends to be  <span class="subject">methodical</span>.
      </p>  
      
    </li>
  </ol>
</section>
  <section class="options">
    <a href="#" class="disagree">&larr;No</a> | 
    <a href="#" class="skip">Skip&darr;</a> |
    <a href="#" class="agree">Yes&rarr;</a>
  </section>
  <section class="instructions">
    Swipe Left to REJECT, Right to ACCEPT or Down to SKIP  (or use Arrow Keys: &larr; &rarr; &darr; )
  </section>
    </>
    
  );
}