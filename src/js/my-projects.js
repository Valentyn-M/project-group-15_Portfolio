import iziToast from 'izitoast';

// import pathImages from "../img/my-projects";
import iconArrow from "../img/icons.svg";

const imagePath = '../img/my-projects/';

import imageMob from '../img/my-projects/mobile/foto-1-mob-1x.jpg';
import imageMob2x from '../img/my-projects/mobile/foto-1-mob-2x.jpg';
import imageTab from '../img/my-projects/pc/foto-1-pc-1x.jpg';
import imageTab2x from '../img/my-projects/pc/foto-1-pc-2x.jpg';
import imagePc from '../img/my-projects/pc/foto-1-pc-1x.jpg';
import imagePc2x from '../img/my-projects/pc/foto-1-pc-2x.jpg';
const projects = [
	{
		title: "Wallet webservice",
		imageMob: imageMob,
		imageMob2x: imageMob2x,
		imageTab: imageTab,
		imageTab2x: imageTab2x,
		imagePc: imagePc,
		imagePc2x: imagePc2x,
		// imageMob: `${pathImages}/mobile/foto-1-mob-1x.jpg"`,
		// imageMob2x: `${pathImages}/mobile/foto-1-mob-2x.jpg"`,
		// imageTab: `${pathImages}/pc/foto-1-pc-1x.jpg`,
		// imageTab2x: `${pathImages}/pc/foto-1-pc-1x.jpg`,
		// imagePc: `${pathImages}/pc/foto-1-pc-1x.jpg`,
		// imagePc2x: `${pathImages}/pc/foto-1-pc-2x.jpg`,
		techStack: "React, JavaScript, Node JS, Git",
		link: "https://valentyn-m.github.io/project-group-15_Portfolio/",
	},
	{
		title: "Green harvest webservice",
		imageMob: `${imagePath}mobile/foto-2-mob-1x.jpg"`,
		imageMob2x: `${imagePath}mobile/foto-2-mob-2x.jpg"`,
		imageTab: `${imagePath}pc/foto-2-pc-1x.jpg`,
		imageTab2x: `${imagePath}pc/foto-2-pc-1x.jpg`,
		imagePc: `${imagePath}pc/foto-2-pc-1x.jpg`,
		imagePc2x: `${imagePath}pc/foto-2-pc-2x.jpg`,
		techStack: "React, JavaScript, Node JS, Git",
		link: "https://valentyn-m.github.io/project-group-15_Portfolio/",
	},
	{
		title: "English Exellence website",
		imageMob: `${imagePath}mobile/foto-3-mob-1x.jpg"`,
		imageMob2x: `${imagePath}mobile/foto-3-mob-2x.jpg"`,
		imageTab: `${imagePath}pc/foto-3-pc-1x.jpg`,
		imageTab2x: `${imagePath}pc/foto-3-pc-1x.jpg`,
		imagePc: `${imagePath}pc/foto-3-pc-1x.jpg`,
		imagePc2x: `${imagePath}pc/foto-3-pc-2x.jpg`,
		techStack: "React, JavaScript, Node JS, Git",
		link: "https://valentyn-m.github.io/project-group-15_Portfolio/",
	},
	{
		title: "power pulse webservice",
		imageMob: `${imagePath}mobile/foto-4-mob-1x.jpg"`,
		imageMob2x: `${imagePath}mobile/foto-4-mob-2x.jpg"`,
		imageTab: `${imagePath}pc/foto-4-pc-1x.jpg`,
		imageTab2x: `${imagePath}pc/foto-4-pc-1x.jpg`,
		imagePc: `${imagePath}pc/foto-4-pc-1x.jpg`,
		imagePc2x: `${imagePath}pc/foto-4-pc-2x.jpg`,
		techStack: "React, JavaScript, Node JS, Git",
		link: "https://valentyn-m.github.io/project-group-15_Portfolio/",
	},
	{
		title: "mimino website",
		imageMob: `${imagePath}mobile/foto-5-mob-1x.jpg"`,
		imageMob2x: `${imagePath}mobile/foto-5-mob-2x.jpg"`,
		imageTab: `${imagePath}pc/foto-5-pc-1x.jpg`,
		imageTab2x: `${imagePath}pc/foto-5-pc-1x.jpg`,
		imagePc: `${imagePath}pc/foto-5-pc-1x.jpg`,
		imagePc2x: `${imagePath}pc/foto-5-pc-2x.jpg`,
		techStack: "React, JavaScript, Node JS, Git",
		link: "https://valentyn-m.github.io/project-group-15_Portfolio/",
	},
	{
		title: "vyshyvanka vibes Landing Page",
		imageMob: `${imagePath}mobile/foto-6-mob-1x.jpg"`,
		imageMob2x: `${imagePath}mobile/foto-6-mob-2x.jpg"`,
		imageTab: `${imagePath}pc/foto-6-pc-1x.jpg`,
		imageTab2x: `${imagePath}pc/foto-6-pc-1x.jpg`,
		imagePc: `${imagePath}pc/foto-6-pc-1x.jpg`,
		imagePc2x: `${imagePath}pc/foto-6-pc-2x.jpg`,
		techStack: "React, JavaScript, Node JS, Git",
		link: "https://valentyn-m.github.io/project-group-15_Portfolio/",
	},
	{
		title: "chego jewelry website",
		imageMob: `${imagePath}mobile/foto-7-mob-1x.jpg"`,
		imageMob2x: `${imagePath}mobile/foto-7-mob-2x.jpg"`,
		imageTab: `${imagePath}pc/foto-7-pc-1x.jpg`,
		imageTab2x: `${imagePath}pc/foto-7-pc-1x.jpg`,
		imagePc: `${imagePath}pc/foto-7-pc-1x.jpg`,
		imagePc2x: `${imagePath}pc/foto-7-pc-2x.jpg`,
		techStack: "React, JavaScript, Node JS, Git",
		link: "https://valentyn-m.github.io/project-group-15_Portfolio/",
	},
	{
		title: "energy flow webservice",
		imageMob: `${imagePath}mobile/foto-8-mob-1x.jpg"`,
		imageMob2x: `${imagePath}mobile/foto-8-mob-2x.jpg"`,
		imageTab: `${imagePath}pc/foto-8-pc-1x.jpg`,
		imageTab2x: `${imagePath}pc/foto-8-pc-1x.jpg`,
		imagePc: `${imagePath}pc/foto-8-pc-1x.jpg`,
		imagePc2x: `${imagePath}pc/foto-8-pc-2x.jpg`,
		techStack: "React, JavaScript, Node JS, Git",
		link: "https://valentyn-m.github.io/project-group-15_Portfolio/",
	},
	{
		title: "fruitbox online store",
		imageMob: `${imagePath}mobile/foto-9-mob-1x.jpg"`,
		imageMob2x: `${imagePath}mobile/foto-9-mob-2x.jpg"`,
		imageTab: `${imagePath}pc/foto-9-pc-1x.jpg`,
		imageTab2x: `${imagePath}pc/foto-9-pc-1x.jpg`,
		imagePc: `${imagePath}pc/foto-9-pc-1x.jpg`,
		imagePc2x: `${imagePath}pc/foto-9-pc-2x.jpg`,
		techStack: "React, JavaScript, Node JS, Git",
		link: "https://valentyn-m.github.io/project-group-15_Portfolio/",
	},
	{
		title: "starlight studio landing page",
		imageMob: `${imagePath}mobile/foto-10-mob-1x.jpg"`,
		imageMob2x: `${imagePath}mobile/foto-10-mob-2x.jpg"`,
		imageTab: `${imagePath}pc/foto-10-pc-1x.jpg`,
		imageTab2x: `${imagePath}pc/foto-10-pc-1x.jpg`,
		imagePc: `${imagePath}pc/foto-10-pc-1x.jpg`,
		imagePc2x: `${imagePath}pc/foto-10-pc-2x.jpg`,
		techStack: "React, JavaScript, Node JS, Git",
		link: "https://valentyn-m.github.io/project-group-15_Portfolio/",
	},

];

let currentIndex = 0;
const projectsPerPage = 3;


function loadProjects() {
	const projectsList = document.querySelector(".my-projects-list");;
	const remainingProjects = projects.slice(currentIndex, currentIndex + projectsPerPage);

	let projectsHTML = remainingProjects.map((project) => {
		return `
    <li class="my-project-item">
        <div class="my-projects-box-image">
        <picture>
        <source srcset="${project.imagePc} 1x, ${project.imagePc2x} 2x" media="(min-width: 1280px)" />
        <source srcset="${project.imageTab} 1x, ${project.imageTab2x} 2x" media="(min-width: 768px)" />
        <source srcset="${project.imageMob} 1x, ${project.imageMob2x} 2x" media="(min-width: 360px)" />
        <img src="${project.imageMob}" alt="${project.title}" width="320" height="194" class="my-projects-image" loading="lazy"/>
        </picture>
        </div>
        <p class="my-projects-tech-stack"> ${project.techStack}</p>
        <div class="my-projects-title-link">
        <h3 class="my-projects-image-title">${project.title}</h3>      
        <a href="${project.link}" target="_blank" rel="noopener no-referrer" aria-label="view the project" class="my-projects-link">
            Visit <svg class="my-projects-icon" width="24" height="24">
            <use href="${iconArrow}#icon-arrow-visit"></use>
            </svg>
        </a>
        </div>
    </li>`;
	}).join('');

	projectsList.innerHTML += projectsHTML;

	currentIndex += projectsPerPage;

	if (currentIndex >= projects.length) {
		document.querySelector(".load-more-btn").style.display = "none";
		iziToast.info({
			backgroundColor: 'rgba(0, 176, 104, 1)',
			title: 'More projects',
			message: 'GitHub Linkedin Instagram Facebook',
			position: 'bottomCenter',
			icon: false,
			timeout: 5000,
			titleColor: 'rgba(255, 255, 255, 1)',
			titleSize: '16px',
			messageColor: 'rgba(255, 255, 255, 1)',
		});
	}

}

document.querySelector(".load-more-btn").addEventListener("click", loadProjects);


window.addEventListener("load", loadProjects);