function open(address){
    var add = document.querySelectorAll(address);
    add.forEach(
        (value) => {
            value.onclick = () => {
                var box = value.nextElementSibling; 
                if(box.style.display === "none") box.style.display = "block";
                else box.style.display = "none";
            }
        }
    )
}


function slider() {
    var url = ['./asset/trangchu/images/slider1.jpg','./asset/trangchu/images/slider2.jpg','./asset/trangchu/images/slider3.jpg','./asset/trangchu/images/slider4.jpg'];
    var container = document.querySelector('.slider__link-img');
    var sliderText = document.querySelectorAll('.slider-item');
    var i=0;

    setInterval(
        () => {
            sliderText[i].classList.remove('slider-item--active');
            i = (i+1)%url.length;
            container.src = url[i];
            sliderText[i].classList.add('slider-item--active');
        }
    ,4000)
}
slider();

function main(){
    open('.question-item__tittle');
}

document.addEventListener('DOMContentLoaded', function () {
    const authSection = document.getElementById("auth-section");
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

    if (currentUser) {
        authSection.innerHTML = `
            <div class="user-menu">
                <img src="./asset/trangchu/images/default-avatar.jpg" 
                    alt="avatar" 
                    class="avatar" 
                    onclick="toggleMenu()" />
                <p class="username">${currentUser.userName}</p>
                <div id="menu" class="dropdown hidden">
                    <a href="./gio-hang.html">Giỏ hàng của bạn</a>
                    <a href="./dang-nhap.html" onclick="logout()">Đăng xuất</a>
                </div>
            </div>
        `;
    }
});

function toggleMenu() {
    document.getElementById("menu").classList.toggle("hidden");
}

function logout() {
    sessionStorage.removeItem("currentUser");
    window.location.href = "./index.html"; // quay lại trang chủ
}


main();
