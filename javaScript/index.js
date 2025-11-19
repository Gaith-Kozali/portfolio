import { projects } from './database.js';
onload = function () {
  
  const sentences = [
    "Flutter Developer crafting smooth & beautiful mobile apps.",
    "Expanding into .NET — building clean and solid backend systems.",
    "Mastering HTML & CSS — creating modern and responsive UI designs."
  ];


  let index = 0;
  const typingEl = document.getElementById("typing");

  function showSentence() { 
    typingEl.textContent = sentences[index];
    typingEl.style.opacity = 1;
    setTimeout(() => {

      typingEl.style.opacity = 0;

      index = (index + 1) % sentences.length;

      setTimeout(showSentence, 1000);

    }, 4000); 
  }

  showSentence();
  projectFun();
};





let projectFun = function(){

const container = document.querySelector(".projects__content");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "projects__card"; 

  card.innerHTML = `
    <img src="${project.images[0]}" alt="${project.name} UI" />
    <div class="details">
      <h3>${project.name}</h3>
      <p>${project.summary}</p>
      <a href="project_page.html?project=${encodeURIComponent(project.name)}" 
         class="btn btn--project-card">More details</a>
    </div>
  `;

  container.appendChild(card);
});

}


