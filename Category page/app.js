
// dropdown filter
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


// lọc giá 
$(function() {
  var products = [
    {
      name: "T-Shirt With Tape Details",
      price: 145.00
    },
    {
      name: "Hoodie",
      price: 180.00
    },
    {
      name: "Jeans",
      price: 120.00
    },
    {
      name: "Jeans",
      price: 240.00
    },
    {
      name: "Jeans",
      price: 180.00
    },
    {
      name: "Jeans",
      price: 130.00
    },
    {
      name: "Jeans",
      price: 212.00
    },
    {
      name: "Jeans",
      price: 145.00
    },
    {
      name: "Jeans",
      price: 180.00
    },
    // Add more products here
  ];

  function filterProducts(minPrice, maxPrice) {
    $(".new-product-item").each(function() {
      var productPrice = parseFloat($(this).find(".gia span").text().replace("$", ""));
      
      if (productPrice >= minPrice && productPrice <= maxPrice) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }

  $("#price-slider").slider({
    range: true,
    min: 100.00,
    max: 500.00,
    values: [100.00, 500.00], // Đặt giá trị mặc định cho thanh trượt
    slide: function(event, ui) {
      var minPrice = ui.values[0];
      var maxPrice = ui.values[1];

      $("#min-price").text('$' + minPrice);
      $("#max-price").text('$' + maxPrice);

      filterProducts(minPrice, maxPrice);
    },
    change: function(event, ui) {
      var minPrice = ui.values[0];
      var maxPrice = ui.values[1];

      filterProducts(minPrice, maxPrice);
    }
  });

  var initialMinPrice = $("#price-slider").slider("values", 0);
  var initialMaxPrice = $("#price-slider").slider("values", 1);

  $("#min-price").text('$' + initialMinPrice);
  $("#max-price").text('$' + initialMaxPrice);

  filterProducts(initialMinPrice, initialMaxPrice);
});


// color
const buttonColorContainer = document.querySelector('.button-color');
let selectedButton = null;

buttonColorContainer.addEventListener('click', function(event) {
  const targetButton = event.target;
  
  // Kiểm tra xem phần tử nhấp vào có là nút không
  if (targetButton.tagName === 'BUTTON') {
    if (selectedButton) {
      // Xóa dấu tích của nút đã chọn trước đó (nếu có)
      selectedButton.innerHTML = '';
    }

    // Thêm dấu tích vào nút đang được chọn
    targetButton.innerHTML = '<i class="fa-solid fa-check"></i>';

    // Lưu nút đang được chọn vào biến selectedButton
    selectedButton = targetButton;
  }
});


// Clothe type
const clotheTypeButton = document.querySelector('.wrap-item_filter button');
const applyFilterButton = document.querySelector('.apply-filter button');
const sportsItem = document.querySelector('.sports-item');
const filtersContainer = document.querySelector('.filters');

clotheTypeButton.addEventListener('click', function() {
  sportsItem.classList.toggle('expanded');
  if (sportsItem.classList.contains('expanded')) {
    const contentHeight = sportsItem.querySelector('.content').offsetHeight;
    applyFilterButton.style.transform = `translateY(${contentHeight}px)`;
    filtersContainer.style.height = `${filtersContainer.offsetHeight + contentHeight}px`;
  } else {
    applyFilterButton.style.transform = '';
    filtersContainer.style.height = '';
  }
});


// button size
const buttons = document.querySelectorAll('.wrap-size button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    buttons.forEach(btn => {
      btn.classList.remove('background-black');
    });
    this.classList.add('background-black');
  });
});

// responsive
const btnOpen = document.getElementById('btnOpen');
const btnClose = document.querySelector('.closebtn');

function openNav() {
  if (window.innerWidth <= 739) {
    document.getElementById("mySidepanel").style.top = "110px";
    document.getElementById("mySidepanel").style.visibility = "visible";
    btnClose.style.display = "block";
  }
}

function closeNav() {
  if (window.innerWidth <= 739) {
    document.getElementById("mySidepanel").style.top = "200px";
    document.getElementById("mySidepanel").style.visibility = "hidden";
    btnClose.style.display = "none";
  }
}

function handleResize() {
  if (window.innerWidth <= 739) {
    openNav();
  } else {
    closeNav();
  }
}

btnOpen.addEventListener('click', openNav);
btnClose.addEventListener('click', closeNav);
window.addEventListener('resize', handleResize);

// Gọi hàm handleResize khi trang được tải để kiểm tra trạng thái ban đầu của màn hình
window.addEventListener('load', handleResize);
