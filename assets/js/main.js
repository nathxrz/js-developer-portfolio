function renderList(elementId, items) {
  const element = document.getElementById(elementId);
  element.innerHTML = items.join("");
}

function updateProfile(profileData) {
  const profilePhoto = document.getElementById("profile.photo");
  profilePhoto.src = profileData.photo;

  const profileName = document.getElementById("profile.name");
  profileName.innerText = profileData.name;

  const profileJob = document.getElementById("profile.job");
  profileJob.innerText = profileData.job;
  const profileLocation = document.getElementById("profile.location");
  profileLocation.innerText = profileData.location;

  const profilePhone = document.getElementById("profile.phone");
  profilePhone.innerText = profileData.phone;
  profilePhone.href = `tel:${profileData.phone}`;

  const profileEmail = document.getElementById("profile.email");
  profileEmail.innerText = profileData.email;
  profileEmail.href = `mailto:${profileData.email}`;
}

function updateHardSkills(profileData) {
  const items = profileData.skills.hardSkills.map(
    (skill) =>
      `<li> <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}" /> </li>`
  );

  renderList("hardSkills.list", items);
}

function updateSoftSkills(profileData) {
  const items = profileData.skills.softSkills.map(
    (skill) => `<li> ${skill} </li>`
  );

  renderList("softSkills.list", items);
}

function updateLanguages(profileData) {
  const items = profileData.languages.map((language) => `<li>${language}</li>`);
  renderList("languages.list", items);
}

function updatePortfolio(profileData) {
  const items = profileData.portfolio.map(
    (project) =>
      `<li> <h3 class="title github">${project.name}</h3><a href="${project.url}" target="_blank">${project.url}</a></li>`
  );
  renderList("portfolio.list", items);
}

function updateProfessionalExperience(profileData) {
  const items = profileData.professionalExperience.map(
    (experience) =>
      `<li><h3 class="title">${experience.name}</h3><p class="period">${experience.period}</p><p>${experience.description}</p></li>`
  );
  renderList("experience.list", items);
}

async function init() {
  const profileData = await fetchProfileData();
  const updaters = {
    profile: updateProfile,
    hardSkills: updateHardSkills,
    softSkills: updateSoftSkills,
    languages: updateLanguages,
    portfolio: updatePortfolio,
    professionalExperience: updateProfessionalExperience,
  };

  Object.values(updaters).forEach((updateFunction) =>
    updateFunction(profileData)
  );
}

init();
