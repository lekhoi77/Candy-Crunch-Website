document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('signupForm');
    const btnSignup = document.getElementById('btnSignup');

    // --- 1. HIỆU ỨNG ANIMATION CHO NÚT (RIPPLE EFFECT) ---
    btnSignup.addEventListener('click', function(e) {
        // Tạo thẻ span làm hiệu ứng sóng
        let ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        
        // Tính toán vị trí click
        let rect = btnSignup.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        // Thêm vào nút
        btnSignup.appendChild(ripple);

        // Xóa thẻ span sau khi chạy xong animation (600ms)
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });

    // --- 2. XỬ LÝ SUBMIT VÀ LƯU LOCAL STORAGE ---
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Ngăn trang web load lại

        // Lấy dữ liệu từ các ô input
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPass = document.getElementById('confirm_password').value;

        // Validate: Kiểm tra mật khẩu
        if (password !== confirmPass) {
            alert('Mật khẩu nhập lại không khớp!');
            return;
        }

        if (password.length < 6) {
            alert('Mật khẩu phải có ít nhất 6 ký tự!');
            return;
        }

        // Tạo đối tượng User
        const user = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            username: username,
            password: password, // Lưu ý: Thực tế không nên lưu pass chưa mã hóa vào LocalStorage
            createdAt: new Date().toISOString()
        };

        // --- LƯU VÀO LOCAL STORAGE ---
        // Lấy danh sách user cũ (nếu có), nếu không thì tạo mảng rỗng
        let usersList = JSON.parse(localStorage.getItem('candy_crunch_users')) || [];
        
        // Thêm user mới vào danh sách
        usersList.push(user);
        
        // Lưu ngược lại vào LocalStorage
        localStorage.setItem('candy_crunch_users', JSON.stringify(usersList));

        // Thông báo thành công
        alert('Đăng ký thành công! Dữ liệu đã được lưu vào Local Storage.');
        
        // Reset form
        form.reset();
        
        // (Tùy chọn) In ra console để kiểm tra
        console.log("Danh sách User hiện tại:", usersList);
    });
});