document.addEventListener('DOMContentLoaded', function() {
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            const projectsSection = document.getElementById('projects-content');
            data.projects.forEach(project => {
                const projectCard = createProjectCard(project);
                projectsSection.appendChild(projectCard);
            });
        })
        .catch(error => console.error('Erro ao carregar os projetos:', error));
});

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';

    const wrapper = document.createElement('div');
    wrapper.className = 'project-wrapper';

    const img = document.createElement('img');
    img.className = 'img-project';
    img.src = project.image;
    img.alt = project.name.pt;

    const details = document.createElement('div');
    details.className = 'project-details';

    const title = document.createElement('h1');
    title.className = 'project-title';
    title.textContent = project.name.pt;

    const description = document.createElement('p');
    description.className = 'project-description';
    description.textContent = project.description.pt;

    const linkWrapper = document.createElement('div');
    linkWrapper.className = 'project-link-wrapper';

    const demoLink = createLink(project.links.demo, '/assets/images/link.png', 'Demo');
    const githubLink = createLink(project.links.github, '/assets/images/github.png', 'GitHub');
    const docLink = createLink(project.links.documentation, '/assets/images/picture.png', 'Documentação');

    linkWrapper.appendChild(demoLink);
    linkWrapper.appendChild(githubLink);
    linkWrapper.appendChild(docLink);

    details.appendChild(title);
    details.appendChild(description);
    details.appendChild(linkWrapper);

    const dataList = document.createElement('ul');
    dataList.className = 'project-data';
    project.technologies.forEach(tech => {
        const techItem = document.createElement('li');
        techItem.className = 'list-itens-project';
        techItem.textContent = tech;
        dataList.appendChild(techItem);
    });

    wrapper.appendChild(img);
    wrapper.appendChild(details);
    wrapper.appendChild(dataList);

    card.appendChild(wrapper);

    return card;
}

function createLink(href, iconSrc, altText) {
    const link = document.createElement('a');
    link.className = 'project-link';
    link.href = href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    const icon = document.createElement('img');
    icon.className = 'project-link-img';
    icon.src = iconSrc;
    icon.alt = altText;

    link.appendChild(icon);
    return link;
}