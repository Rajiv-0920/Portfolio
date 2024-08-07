const menuEl = document.getElementById("menu");
const listEl = document.getElementById("list");
const overlayEl = document.getElementById("overlay");
const linkEl = document.querySelectorAll(".item a");

linkEl.forEach(link => {
    if (screen.width <= 850) {
        link.addEventListener("click", menuToggle);
    }
})
overlayEl.addEventListener("click", menuToggle);
menuEl.addEventListener("click", menuToggle);

function menuToggle() {
    listEl.classList.toggle("show-menu");
    menuEl.classList.toggle("fa-x");
    overlayEl.classList.toggle("overlay");
}

const projects =
    [
        {
            projectImageURL: "./assets/rest-country.png",
            projectName: "REST Countries API with color theme switcher",
            projectTags: ["HTML", "CSS", "JS"],
            projectURL: "https://rajiv-0920.github.io/Rest-Countries-Api-With-Color-Theme-Switcher-Master/",
            codeURL: "https://github.com/Rajiv-0920/Rest-Countries-Api-With-Color-Theme-Switcher-Master.git",
            challengeBy: "Frontend Mentor",
            challengeByURL: "https://www.frontendmentor.io/"
        },
        {
            projectImageURL: "./assets/manage.png",
            projectName: "Manage Landing Page",
            projectTags: ["HTML", "CSS", "JS"],
            projectURL: "https://rajiv-0920.github.io/Manage-landing-page/",
            codeURL: "https://github.com/Rajiv-0920/Manage-landing-page.git",
            challengeBy: "Frontend Mentor",
            challengeByURL: "https://www.frontendmentor.io/"
        },
        {
            projectImageURL: "./assets/blogr.png",
            projectName: "Blogr Landing Page",
            projectTags: ["HTML", "CSS", "JS"],
            projectURL: "https://Rajiv-0920.github.io/Blogr-landing-page",
            codeURL: "https://github.com/Rajiv-0920/Blogr-landing-page.git",
            challengeBy: "Frontend Mentor",
            challengeByURL: "https://www.frontendmentor.io/"
        },
        {
            projectImageURL: "./assets/rock-paper-scissor.png",
            projectName: "Rock Paper Scissor Game",
            projectTags: ["HTML", "CSS", "JS"],
            projectURL: "https://rajiv-0920.github.io/Rock-Paper-Scissors/",
            codeURL: "https://github.com/Rajiv-0920/Rock-Paper-Scissors.git",
            challengeBy: "Frontend Mentor",
            challengeByURL: "https://www.frontendmentor.io/"
        },
        {
            projectImageURL: "./assets/easybank.png",
            projectName: "Easy Bank Landing Page",
            projectTags: ["HTML", "CSS"],
            projectURL: "https://rajiv-0920.github.io/Easybank-landing-page/",
            codeURL: "https://github.com/Rajiv-0920/Easybank-landing-page.git",
            challengeBy: "Frontend Mentor",
            challengeByURL: "https://www.frontendmentor.io/"
        },
        {
            projectImageURL: "./assets/NFT.png",
            projectName: "NFT Landing Page",
            projectTags: ["HTML", "CSS", "JS"],
            projectURL: "https://rajiv-0920.github.io/NFT-Landing-Page/",
            codeURL: "https://github.com/Rajiv-0920/NFT-Landing-Page.git",
            challengeBy: "Lorem picsum",
            challengeByURL: "#"
        },
        {
            projectImageURL: "./assets/translator.png",
            projectName: "Language Translator",
            projectTags: ["HTML", "CSS", "JS"],
            projectURL: "https://rajiv-0920.github.io/Language-Translator/",
            codeURL: "https://github.com/Rajiv-0920/Language-Translator.git",
            challengeBy: "Lorem picsum",
            challengeByURL: "#"
        },
        {
            projectImageURL: "./assets/qr-code.png",
            projectName: "QR Code Generator",
            projectTags: ["HTML", "CSS", "JS"],
            projectURL: "https://rajiv-0920.github.io/QR-Code-Generator/",
            codeURL: "https://github.com/Rajiv-0920/QR-Code-Generator.git",
            challengeBy: "Lorem picsum",
            challengeByURL: "#"
        },
        {
            projectImageURL: "./assets/wordcounter.png",
            projectName: "Word & Character Counter",
            projectTags: ["HTML", "CSS", "JS"],
            projectURL: "https://rajiv-0920.github.io/Word-Count/",
            codeURL: "https://github.com/Rajiv-0920/Word-Count.git",
            challengeBy: "Lorem picsum",
            challengeByURL: "#"
        },
        {
            projectImageURL: "./assets/tic-tac-toe.png",
            projectName: "Tic Tac Toe Game",
            projectTags: ["HTML", "CSS", "JS"],
            projectURL: "https://rajiv-0920.github.io/Tic-Tac-Toe/",
            codeURL: "https://github.com/Rajiv-0920/Tic-Tac-Toe.git",
            challengeBy: "Lorem picsum",
            challengeByURL: "#"
        },
        {
            projectImageURL: "./assets/github.png",
            projectName: "Github User Search",
            projectTags: ["HTML", "CSS", "JS"],
            projectURL: "https://rajiv-0920.github.io/Github-user-search/",
            codeURL: "https://github.com/Rajiv-0920/Github-user-search.git",
            challengeBy: "Frontend Mentor",
            challengeByURL: "https://www.frontendmentor.io/"
        },
    ]


const projectsEl = document.getElementById("projects");
const loadMoreEl = document.getElementById("load-more");
let currentItem = 0;
loadProjects();

loadMoreEl.addEventListener("click", () => {
    loadProjects();
})

function loadProjects() {
    for (var i = currentItem; i < currentItem + 3; i++) {
        if (i === projects.length) {
            loadMoreEl.disabled = "true";
            break;
        }
        var li = document.createElement("li");
        li.classList.add("project");
        li.innerHTML = `
                        <div class="pro-img">
                            <img src="${projects[i].projectImageURL}" loading="lazy" alt="${projects[i].projectName} image">
                        </div>
                        <h3 class="pro-title">${projects[i].projectName}</h3>
                        <ul class="tags">
                        </ul >
            <p>Challenged by <a href="${projects[i].challengeByURL}" class="front-end">${projects[i].challengeBy}</a></p>
            <div class="actions">
                <a href="${projects[i].projectURL}" class="btn primary">View
                    Project</a>
                <a href="${projects[i].codeURL}" class="btn secondary">View
                    code</a>
            </div>`;
        projectsEl.appendChild(li);
    }
    const tagsEl = document.querySelectorAll(".tags");
    for (var i = currentItem; i < currentItem + 3; i++) {
        if (i === projects.length)
            break
        for (var j = 0; j < projects[i].projectTags.length; j++) {
            var li = document.createElement("li");
            li.classList.add("tag", projects[i].projectTags[j].toLowerCase());
            li.innerText = projects[i].projectTags[j];
            tagsEl[i].appendChild(li);
        }
    }
    currentItem += 3;
}

