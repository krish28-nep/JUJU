<?php
// header section
include 'header.php';
?>
<!------------------------------ End  header section  ------------------------------>
<div class="navBottom">
  <h3 class="menuItem active">Matka-Dhau</h3>
  <h3 class="menuItem">Kalla-Dhau</h3>
  <h3 class="menuItem">Special Combo</h3>
  <h3 class="menuItem">Ghee</h3>
  <h3 class="menuItem">Milk</h3>
</div>
</nav>
<!-- main content -->
<div class="slider">
  <div class="sliderWrapper">
    <div class="sliderItem" style="--bg-color: green">
      <img src="image/matka-dhau.png" alt="" class="sliderImage" />
      <div class="slideBg"></div>
      <h1 class="sliderTitle">Matka-Dhau</h1>
      <br />
      <h2 class="sliderPrice">RS 300</h2>
      <a href="#product">
        <button class="buyButton" data-index="0">BUY NOW!</button>
      </a>
    </div>
    <div class="sliderItem" style="--bg-color: rebeccapurple">
      <img src="image/matka-dhau.png" alt="" class="sliderImage" />
      <div class="slideBg"></div>
      <h1 class="sliderTitle">Kalla-Dhau</h1>
      <br />
      <h2 class="sliderPrice">RS 250</h2>
      <a href="#product">
        <button class="buyButton" data-index="1">BUY NOW!</button>
      </a>
    </div>
    <div class="sliderItem" style="--bg-color: teal">
      <img src="image/matka-dhau.png" alt="" class="sliderImage" />
      <div class="slideBg"></div>
      <h1 class="sliderTitle">
        Combo <br />Matka-Dhau<br />
        + Milk
      </h1>
      <br />
      <h2 class="sliderPrice">RS 380</h2>
      <a href="#product">
        <button class="buyButton" data-index="2">BUY NOW!</button>
      </a>
    </div>
    <div class="sliderItem" style="--bg-color: cornflowerblue">
      <img src="image/matka-dhau.png" alt="" class="sliderImage" />
      <div class="slideBg"></div>
      <h1 class="sliderTitle">Ghee</h1>
      <br />
      <h2 class="sliderPrice">RS 1200</h2>
      <a href="#product">
        <button class="buyButton" data-index="3">BUY NOW!</button>
      </a>
    </div>
    <div class="sliderItem" style="--bg-color: goldenrod">
      <img src="image/matka-dhau.png" alt="" class="sliderImage" />
      <div class="slideBg"></div>
      <h1 class="sliderTitle">Milk</h1>
      <br />
      <h2 class="sliderPrice">RS 110</h2>
      <a href="#product">
        <button class="buyButton" data-index="4">BUY NOW!</button>
      </a>
    </div>
  </div>
</div>
<div class="features">
  <div class="feature">
    <i class="fa-solid fa-truck-fast"></i>
    <span class="featureTitle">FREE SHIPPING!</span>
    <span class="featuredDisc">Free NationWide Shipping on all orders.</span>
  </div>

  <div class="feature">
    <i class="fa-regular fa-address-card"></i>

    <span class="featureTitle">ABOUT US!</span>
    <span class="featuredDisc">We are available 24/7.</span>
  </div>

  <div class="feature">
    <i class="fa-solid fa-paper-plane"></i>
    <span class="featureTitle">CONTACT US!</span>
    <span class="featuredDisc">Keep in touch via email and support system.</span>
  </div>
</div>
<div class="product" id="product">
  <img src="image/matka-dhau.png" alt="Matka-Dhau" class="productImg" />
  <div class="productDetail">
    <h1 class="productTitle">MATKA DHAU</h1>
    <h2 class="productPrice">RS 300</h2>
    <div class="productDisc">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Exercitationem dolorem vitae totam eaque similique, nostrum illum quos
      quaerat tempora nulla non sapiente reprehenderit architecto, quidem
      animi dolorum pariatur. Accusantium, cum.
    </div>
    <div class="sizes">
      <div class="size">1ltr</div>
      <div class="size">3ltr</div>
      <div class="size">4ltr</div>
    </div>
    <button class="productButton">BUY NOW!!</button>
    <button class="productButton">ADD TO CART</button>
  </div>
</div>
<!------------------------------  Footer section  ------------------------------>
<?php include("footer.php"); ?>
<!------------------------------ End  Footer section  ------------------------------>