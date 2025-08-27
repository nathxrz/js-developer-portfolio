function updateProfileInfo(profileData) {
  const profilePhoto = document.querySelector(".profile-photo");
  profilePhoto.setAttribute("src", profileData.photo);
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
})();
