
     import { projects } from './database.js';
     import {preventDownloadImg} from './index.js';
    const params = new URLSearchParams(window.location.search);
    const projectName = params.get('project') || params.get('name'); 

    const project = projects.find(p => p.name === projectName) || projects[0];

    const titleEl = document.getElementById('projectTitle');
    const summaryEl = document.getElementById('projectSummary');
    const mainImageEl = document.getElementById('mainImage');
    const thumbsEl = document.getElementById('thumbs');
    const descEl = document.getElementById('projectDescription');
    const techTagsEl = document.getElementById('techTags');
    const liveBtn = document.getElementById('liveBtn');
    const codeBtn = document.getElementById('codeBtn');
    const projectTypeEl = document.getElementById('projectType');

    titleEl.textContent = project.name;
    summaryEl.textContent = project.summary;
    descEl.innerHTML = project.description;

    function setMainImage(src, alt) {
      mainImageEl.innerHTML = '';
      const img = document.createElement('img');
      img.src = src;
      img.alt = alt || project.name;
      mainImageEl.appendChild(img);
    }

    thumbsEl.innerHTML = '';
    project.images.forEach((imgSrc, i) => {
      const t = document.createElement('img');
      t.src = imgSrc;
      t.alt = project.name + ' ' + (i + 1);
      if (i === 0) t.classList.add('active');
      t.addEventListener('click', () => {
        thumbsEl.querySelectorAll('img').forEach(n => n.classList.remove('active'));
        t.classList.add('active');
        setMainImage(imgSrc);
      });
      thumbsEl.appendChild(t);
    });

    setMainImage(project.images[0], project.name);

    techTagsEl.innerHTML = '';
    project.technology.split(',').map(s => s.trim()).forEach(tech => {
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = tech;
      techTagsEl.appendChild(tag);
    });

    const encoded = encodeURIComponent(project.name);
    liveBtn.href = project.demo || '#'; 
    codeBtn.href = project.sourceCodeLink || '#';
    if (!project.sourceCodeLink) {
      codeBtn.style.opacity = 0.65;
      codeBtn.style.pointerEvents = 'none';
    }
     if (!project.demo) {
      liveBtn.style.opacity = 0.65;
      liveBtn.style.pointerEvents = 'none';
    }

    projectTypeEl.textContent = project.isTrainProject ? 'Training / Demo Project' : 'Production / Client Project';
    preventDownloadImg();