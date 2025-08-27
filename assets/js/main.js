function updateProfile(profileData) {
  const profilePhoto = document.getElementById("profile.photo");
  profilePhoto.src = profileData.photo;
  profilePhoto.alt = profileData.name;

  const profileName = document.getElementById("profile.name");
  profileName.innerText = profileData.name;

  const profileJob = document.getElementById("profile.job");
  profileJob.innerText = profileData.job;
  const profileLocation = document.getElementById("profile.location");
  profileLocation.innerText = profileData.location;

  const profilePhone = document.getElementById("profile.phone");
  profilePhone.innerText = profileData.phone;

  const profileEmail = document.getElementById("profile.email");
  profileEmail.innerText = profileData.email;
}

function updateSkills(profileData) {
  const skillsList = document.getElementById("skills.list");

  const items = profileData.skills.hardSkills.map((skill) => {
    return `
    <li>
      <img
        src="${skill.logo}"
        alt="${skill.name}"
        title="${skill.name}"
      />
    </li>`;
  });
  skillsList.innerHTML = items.join("");
}

function updateProfileInfo(profileData) {
  updateProfile(profileData);
  updateSkills(profileData);
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
})();
