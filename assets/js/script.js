const root = document.querySelector('#root');
const navbar = document.querySelector('nav');
const homeTarget = document.querySelector('li.active');

const homePage = () => {
  return `
    <div id="title-card">
      <div id="title-card-content">
        <h4>Hello, I'm</h4>
        <h1 class="large-font">Jason <br> Williams</h1>
        <div class="div-bar">
        </div>
        <h5>Software Engineer</h5>
      </div>
      <img 
        id="headshot" 
        src="assets/images/IMG_9151_cropped_1000px.jpg" 
        alt="Jason Williams" 
        class="img-circle" />
    </div>
    
    <div id="about-me">
      <div class="sub-card left">
        <div>
          <h2>About Me</h2>
          <div class="div-bar"></div>
          <p>
            I am a software engineer looking to break into the software development industry. After 
            completing the immersive coding bootcamp at Fullstack Academy in April 2021, It is now 
            my passion to continue learning, growing, and taking on new challenges as a professional 
            developer. I am seeking employment with a company that not only pushes the boundaries of 
            technology but also inspires me to be the best software engineer I can be.
          </p>
        </div>
      </div>
      <div class="sub-card right">
        
      </div>
    </div>
    
    <div id="contact">
      <h1>Contact.... </h1>
    </div>
  `
}

const aboutPage = () => {
  return `
    <div id="about-me">
      <div class="sub-card left">
        <div>
          <h2>About Me</h2>
          <div class="div-bar"></div>
          <p>
            I am a software engineer looking to break into the software development industry. After 
            completing the immersive coding bootcamp at Fullstack Academy in April 2021, It has become 
            my passion to continue learning, growing, and taking on new challenges as a professional 
            developer. I am seeking employment with a company that not only pushes the boundaries of 
            technology but also inspires me to be the best software engineer I can be.
          </p>
        </div>
      </div>
    </div>
  `
}

const contactPage = () => {
  return `
    <div class="div-bar"></div>
    <div class="div-bar"></div>
    <div class="div-bar"></div>
    <div class="div-bar"></div>
  `
}

window.addEventListener('hashchange', ()=> {
  const curHash = window.location.hash.slice(1)
  if (curHash === 'about') {
    return root.innerHTML = aboutPage();
  }
  if (curHash === 'contact') {
    return root.innerHTML = contactPage();
  }
  else {
    root.innerHTML = homePage();
  }
})

let selected = homeTarget;

const toggleSelected = () => {
  
}

navbar.addEventListener('click', (ev)=> {
  const parentNode = ev.target.parentNode;
  if (parentNode.tagName === 'LI' && selected !== parentNode) {
    selected.className = '';
    selected = parentNode;
    selected.className = 'active';
  }
})



root.innerHTML = homePage();

