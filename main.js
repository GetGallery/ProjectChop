let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 9000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};



// JavaScript to handle modal functionality
const menuModal = document.getElementById("menuModal");
const menuTitle = document.getElementById("menuTitle");
const closeModal = document.querySelector(".close");

// Function to open modal and set menu title
function openModal(menuName) {
    menuModal.style.display = "block";
    menuTitle.textContent = menuName;
}

// Close modal when 'x' is clicked
closeModal.onclick = function() {
    menuModal.style.display = "none";
}

// Close modal when clicking outside of modal
window.onclick = function(event) {
    if (event.target == menuModal) {
        menuModal.style.display = "none";
    }
}

// Add event listeners to each menu item
document.querySelectorAll(".product-card").forEach(item => {
    item.onclick = function() {
        const menuName = this.querySelector("h3").textContent.trim();
        openModal(menuName);
    }
});


//////////////////////////////////////////////////



// เปิด modal และตั้งชื่อเมนู
function openModal(menuName) {
    document.getElementById("menuModal").style.display = "block";
    document.getElementById("menuTitle").textContent = menuName;
}



// สั่งซื้อและบันทึกข้อมูลใน Local Storage
function placeOrder() {
    const menuName = document.getElementById("menuTitle").textContent;
    const customerName = document.getElementById("nameInput").value;
    const phoneNumber = document.getElementById("phoneInput").value;

    if (customerName && phoneNumber) {
        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        orders.push({ menu: menuName, name: customerName, phone: phoneNumber });
        localStorage.setItem("orders", JSON.stringify(orders));

        alert("บันทึกคำสั่งซื้อสำเร็จ!");
        
        document.getElementById("nameInput").value = "";
        document.getElementById("phoneInput").value = "";

        // เปลี่ยนไปที่หน้า order.html
        window.location.href = "order.html";
    } else {
        alert("กรุณากรอกชื่อและเบอร์โทรให้ครบถ้วน");
    }
}

