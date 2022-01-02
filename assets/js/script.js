const root = document.querySelector('#root');

let hash = '';

window.addEventListener('hashchange', ()=> {
  const curHash = window.location.hash.slice(1)
  if (curHash !== hash) {
    hash = curHash;
  }
  if (hash === 'about') {
    return root.innerHTML = `
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
        <div class="sub-card right">
          <p>
            Currently I am a lead technician at a security company based out of New Jersey. Here, I 
            troubleshoot all different kinds of problems, whether it is related to programming, 
            hardware, or connectivity, my purpose is to solve problems. I also relieve responsibilities 
            of my direct manager and some roles in other departments by offering full independent 
            service which includes designing, analyzing, building, and repairing systems from local 
            system devices to the internet of things. In order to better serve customers and the 
            company, I&#39;ve sought multiple certifications in Fire Alarm Systems and assorted 
            intrusion and access control systems.
          </p>
        </div>
      </div>
    `
  }
  if (hash === 'contact') {
    console.log('contact')
  }
  else {
    root.innerHTML = `
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
          src="public/images/IMG_9151_cropped_1000px.jpg" 
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
          <p>
            Currently I am a lead technician at a security company based out of New Jersey. Here, I 
            troubleshoot all different kinds of problems, whether it is related to programming, 
            hardware, or connectivity, my purpose is to solve problems. I also relieve responsibilities 
            of my direct manager and some roles in other departments by offering full independent 
            service which includes designing, analyzing, building, and repairing systems from local 
            system devices to the internet of things. In order to better serve customers and the 
            company, I&#39;ve sought multiple certifications in Fire Alarm Systems and assorted 
            intrusion and access control systems.
          </p>
        </div>
      </div>
      
      <div id="contact">
        <h1>Contact.... </h1>
      </div>
    `
  }
})


// table.addEventListener('mousedown', (ev)=> {
//   let active = true;
//     if (ev.target.tagName === 'TD' && active) ev.target.className = selColor;
//   table.addEventListener('mouseover', (ev)=> {
//     if (ev.target.tagName === 'TD' && active) ev.target.className = selColor;
//   })
//   table.addEventListener('mouseup', (ev)=> {
//     active = false;
//   })
// })

// const makeRow = () => {
//   const newRow = document.createElement('tr');
//   const pixel = document.createElement('td');
  
//   newRow.innerHTML = `
//     <td></td>
//     <td></td>
//     <td></td>
//   `
//   table.appendChild(newRow);
// }

// const button = document.querySelector('button');
// button.addEventListener('click', ()=> {
//   makeRow();
// })

// const colorSelector = document.querySelector('select');
// let selColor = '';

// colorSelector.addEventListener('change', (ev)=> {
//   selColor = ev.target.value;
// })
