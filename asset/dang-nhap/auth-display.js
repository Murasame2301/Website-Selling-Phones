document.addEventListener("DOMContentLoaded", function () {
  const authSection = document.getElementById("auth-section");
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

  if (!authSection || !currentUser) return;

  const displayName = currentUser.fullName || currentUser.userName;
  const avatarPath = "./asset/default-avatar.jpg";

  authSection.innerHTML = `
    <div class="user-info">
      <img class="user-avatar" src="${avatarPath}" alt="avatar" />
      <span class="user-name">${displayName}</span>
      <a class="header-log__item logout-btn" href="#" id="logoutBtn">Đăng xuất</a>
    </div>
  `;

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function (e) {
      e.preventDefault();
      sessionStorage.removeItem("currentUser");
      window.location.reload();
    });
  }
});
