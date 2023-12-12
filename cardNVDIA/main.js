// main.js
document.addEventListener('DOMContentLoaded', function () {
    // Kiểm tra xem có dữ liệu trong Local Storage hay không
    var userEmail = localStorage.getItem('userEmail');

    if (userEmail) {
        // Nếu đã đăng nhập, hiển thị phần tử và đặt nội dung
        var userSpan = document.getElementById('user-email');
        userSpan.style.display = 'inline'; // Hiển thị phần tử
        userSpan.innerText = 'Welcome, ' + userEmail;
    }
});

function toggleLogin() {
    if (isLoggedIn()) {
        // Nếu đã đăng nhập, thực hiện đăng xuất
        localStorage.removeItem('userEmail');
        updateUI();
    } else {
        // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
        window.location.href = 'login.html';
    }
}

function updateUI() {
    var userSpan = document.getElementById('user-email');
    var loginButton = document.querySelector('button');

    if (isLoggedIn()) {
        userSpan.style.display = 'inline';
        loginButton.innerText = 'Đăng xuất';
    } else {
        userSpan.style.display = 'none';
        loginButton.innerText = 'Đăng nhập';
    }
}

function isLoggedIn() {
    return localStorage.getItem('userEmail') !== null;
}
// main.js
function login() {
    // Lấy giá trị email từ input
    var userEmail = document.getElementById('email').value;

    // Kiểm tra nếu email không trống
    if (userEmail !== '') {
        // Lưu trạng thái đăng nhập và thông tin người dùng
        localStorage.setItem('userEmail', userEmail);

        // Chuyển hướng về trang chính
        window.location.href = 'index.html';
    } else {
        // Hiển thị thông báo lỗi nếu email trống
        alert('Vui lòng nhập địa chỉ email.');
    }
}
