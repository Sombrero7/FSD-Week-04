// This function should retrieve all the project objects from projects array.
// It should then traverse over the array to create individual cards displaying each project details.
function loadProjects() {
  const projectsContainer = document.getElementById("projects");
  projectsContainer.innerHTML = ""; // Clear existing projects

  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("card");

    projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <span><strong>${project.title}</strong></span>
      <span>${project.description}</span>
    `;

    projectsContainer.appendChild(projectCard);
  });
}

// This function should return the projectId of the new project
function newProjectId() {
  return projects.length + 1; // Increment ID based on array length
}

function saveNewProject() {
  // Get the new project details by using the DOM elements
  const titleInput = document.getElementById("title").value;
  const descInput = document.getElementById("desc").value;
  const imageInput = document.getElementById("image").value;

  // Validate inputs (optional)
  if (!titleInput || !descInput || !imageInput) {
    alert("Please fill out all fields!");
    return;
  }

  // Create a new project object
  const newProject = {
    id: newProjectId(),
    title: titleInput,
    description: descInput,
    image: imageInput,
  };

  // Add the new project object to the projects array
  projects.push(newProject);

  // Load the projects after adding the new project
  loadProjects();

  // Clear the values of the New Project Details Form after adding the new project
  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("image").value = "";
}