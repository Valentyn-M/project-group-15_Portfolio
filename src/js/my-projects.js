const projects = [
    {
      title: "Wallet webservice",
      imageMob: "../img/my-projects/mobile/foto-1-mob-1x.jpg",
      imageMob2x: "../img/my-projects/mobile/foto-1-mob-2x.jpg",
      imageTab: "../img/my-projects/tablet/foto-1-tab-1x.jpg",
      imageTab2x: "../img/my-projects/tablet/foto-2-tab-2x.jpg",
      imagePc: "../img/my-projects/pc/foto-1-pc-1x.jpg",
      imagePc2x: "../img/my-projects/pc/foto-1-pc-2x.jpg",
      techStack: "React, JavaScript, Node JS, Git",
      link: "https://valentyn-m.github.io/project-group-15_Portfolio/",
    },
    {
      title: "Green harvest webservice",
      imageMob: "../img/my-projects/mobile/foto-2-mob-1x.jpg",
      imageMob2x: "../img/my-projects/mobile/foto-2-mob-2x.jpg",
      imageTab: "../img/my-projects/tablet/foto-2-tab-1x.jpg",
      imageTab2x: "../img/my-projects/tablet/foto-2-tab-2x.jpg",
      imagePc: "../img/my-projects/pc/foto-2-pc-1x.jpg",
      imagePc2x: "../img/my-projects/pc/foto-2-pc-2x.jpg",
      techStack: "React, JavaScript, Node JS, Git",
      link: "https://valentyn-m.github.io/project-group-15_Portfolio/2",
    },
    {
      title: "English Exellence website",
      imageMob: "../img/my-projects/mobile/foto-3-mob-1x.jpg",
      imageMob2x: "../img/my-projects/mobile/foto-3-mob-2x.jpg",
      imageTab: "../img/my-projects/tablet/foto-3-tab-1x.jpg",
      imageTab2x: "../img/my-projects/tablet/foto-3-tab-2x.jpg",
      imagePc: "../img/my-projects/pc/foto-3-pc-1x.jpg",
      imagePc2x: "../img/my-projects/pc/foto-3-pc-2x.jpg",
      techStack: "React, JavaScript, Node JS, Git",
      link: "https://valentyn-m.github.io/project-group-15_Portfolio/",
    },
   
    {
        title: "power pulse webservice",
        imagePc: "../img/my-projects/pc/foto-4-pc-1x.jpg",
        imagePc2x: "../img/my-projects/pc/foto-4-pc-2x.jpg",
        techStack: "React, JavaScript, Node JS, Git",
        link: "https://valentyn-m.github.io/project-group-15_Portfolio/",
      },

      {
        title: "mimino website",
        imagePc: "../img/my-projects/pc/foto-5-pc-1x.jpg",
        imagePc2x: "../img/my-projects/pc/foto-5-pc-2x.jpg",
        techStack: "React, JavaScript, Node JS, Git",
        link: "https://valentyn-m.github.io/project-group-15_Portfolio/",
      },

      {
        title: "vyshyvanka vibes Landing Page",
        imagePc: "../img/my-projects/pc/foto-6-pc-1x.jpg",
        imagePc2x: "../img/my-projects/pc/foto-6-pc-2x.jpg",
        techStack: "React, JavaScript, Node JS, Git",
        link: "https://valentyn-m.github.io/project-group-15_Portfolio/",
      },

      {
        title: "chego jewelry website",
        imagePc: "../img/my-projects/pc/foto-7-pc-1x.jpg",
        imagePc2x: "../img/my-projects/pc/foto-7-pc-2x.jpg",
        techStack: "React, JavaScript, Node JS, Git",
        link: "https://valentyn-m.github.io/project-group-15_Portfolio/",
      },

      {
        title: "energy flow webservice",
        imagePc: "../img/my-projects/pc/foto-8-pc-1x.jpg",
        imagePc2x: "../img/my-projects/pc/foto-8-pc-2x.jpg",
        techStack: "React, JavaScript, Node JS, Git",
        link: "https://valentyn-m.github.io/project-group-15_Portfolio/",
      },

      {
        title: "fruitbox online store",
        imagePc: "../img/my-projects/pc/foto-9-pc-1x.jpg",
        imagePc2x: "../img/my-projects/pc/foto-9-pc-2x.jpg",
        techStack: "React, JavaScript, Node JS, Git",
        link: "https://valentyn-m.github.io/project-group-15_Portfolio/",
      },

      {
        title: "starlight studio landing page",
        imagePc: "../img/my-projects/pc/foto-10-pc-1x.jpg",
        imagePc2x: "../img/my-projects/pc/foto-10-pc-2x.jpg",
        techStack: "React, JavaScript, Node JS, Git",
        link: "https://valentyn-m.github.io/project-group-15_Portfolio/",
      },

  ];

let currentIndex = 0;
const projectsPerPage = 3;

function loadProjects() {
  const projectsList = document.getElementById("projects-list");
  const remainingProjects = projects.slice(currentIndex, currentIndex + projectsPerPage);

  remainingProjects.forEach((project) => {
    const li = document.createElement("li");
    li.classList.add("my-project-item");

    li.innerHTML = `
      <img
        src="${project.imagePc}"
        srcset="${project.imagePc} 1x, ${project.imagePc2x} 2x"
        alt="${project.title}"
        class="my-projects-image"
        loading="lazy"
      />
      <p class="my-projects-tech-stack"> ${project.techStack}</p>
      <h3 class="my-projects-image-title">${project.title}</h3>      
      <div class="my-projects-btn">
      <a href="${project.link}" target="_blank" rel="noopener no-referrer" aria-label="view the project" class="my-projects-link">visit							<svg class="work-together-contacts-icon" width="24" height="24">
		<svg class="my-projects-icon" width="24" height="24">
			<use href="../img/icons.svg#icon-arrow-visit"></use>
		</svg></a></div>
    `;

    projectsList.appendChild(li);
  });

  currentIndex += projectsPerPage;

  // Приховати кнопку "Load more", якщо всі проєкти завантажені
  if (currentIndex >= projects.length) {
    document.getElementById("load-more").style.display = "none";
  }
}

document.getElementById("load-more").addEventListener("click", loadProjects);


window.addEventListener("load", loadProjects);