document.addEventListener("DOMContentLoaded", function () {
    // Xử lý click chuyển đổi trạng thái active của các chấm màu sắc (GIỮ NGUYÊN)
    const colorDots = document.querySelectorAll(".color-dots-wrapper .color-dot");
    colorDots.forEach(dot => {
        dot.addEventListener("click", function () {
            colorDots.forEach(el => el.classList.remove("active-dot"));
            this.classList.add("active-dot");
        });
    });

    // Xử lý sự kiện đăng ký nhận Newsletter ở Footer (GIỮ NGUYÊN)
    const signUpBtn = document.getElementById("btnSignUp");
    const emailInput = document.querySelector(".form-control-pb");
    if (signUpBtn && emailInput) {
        signUpBtn.addEventListener("click", function (e) {
            e.preventDefault();
            if (emailInput.value.trim() !== "") {
                alert("Đăng ký thành công!");
                emailInput.value = "";
            }
        });
    }

    // BỔ SUNG: Xử lý logic Click chạy Slider (Chuyển đổi ảnh giữa 1.jpg và các ảnh khác nếu cần)
    const prevArrow = document.querySelector(".prev-arrow");
    const nextArrow = document.querySelector(".next-arrow");
    const desktopImg = document.querySelector(".hero-section img.d-none.d-md-block");

    // Mảng danh sách ảnh để test slider chạy qua lại (bạn thay đổi tên file ảnh tương ứng nếu có nhé)
    const images = ["public/images/1.jpg", "public/images/8.jpg"]; 
    let currentIndex = 0;

    if (prevArrow && nextArrow && desktopImg) {
        nextArrow.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % images.length;
            desktopImg.src = images[currentIndex];
        });

        prevArrow.addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            desktopImg.src = images[currentIndex];
        });
    }
});