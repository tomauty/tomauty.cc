const IMAGE_COUNT = 10;

const links = {
    "presence": {
		"github": "https://github.com/tomauty",
		"twitter": "https://twitter.com/seasonsreverse",
		"instagram": "https://instagram.com/seasonsreverse",
		"this site": "https://tomauty.cc",
    },
    "work": {
        "resume": "",
		"linked in": "https://www.linkedin.com/in/tom-auty-71648430/",
    },
    "writing": {
        "soon": "",
    },
};

function init() {
    // good morning
    const hour = new Date().getHours();
    let hourString = 'morning';
    if (hour >= 12 && hour < 18) { hourString = 'afternoon'; }
    if (hour >= 18) { hourString = 'evening'; }
    document.getElementById("hourText").textContent = 'good ' + hourString;

    // what are you seeing
    const image = document.getElementById('look');
    const imageIndex = Math.ceil(Math.random() * IMAGE_COUNT);
    const src = 'mages/' + imageIndex + '.png';
    image.setAttribute('src', src);

    // where are you going
    const linkList = document.getElementById("links");
    let section;
    Object.keys(links).forEach(sectionName => {

        const sectionContainer = document.createElement('div');
        sectionContainer.setAttribute('style', 'display: flex; flex-direction: column; margin-right: 50px;');

        linkList.appendChild(sectionContainer);

        section = document.createElement('h2');
        section.innerHTML = sectionName;
        sectionContainer.appendChild(section);

        Object.keys(links[sectionName]).forEach(linkName => {
            const link = document.createElement('a');
            link.setAttribute('href', links[sectionName][linkName]);
            link.innerHTML = linkName;
			link.setAttribute('target', '_blank');
            sectionContainer.appendChild(link);
        });
    });
}

setTimeout(init, 1);

