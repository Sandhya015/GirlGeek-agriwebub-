function showProductInfo(title, description, price, image, contactName, emailAddress) {
    document.getElementById('product-title').innerText = title;
    document.getElementById('product-description').innerText = description;
    document.getElementById('product-price').innerText = price;
    document.getElementById('product-image').src = image;
    document.getElementById('contact-details').innerText = "Contact: " + contactName;
    document.getElementById('email-address').innerText = "Email: " + emailAddress;
    document.getElementById('product-info').style.display = 'block';
  }
  
  function hideProductInfo() {
    document.getElementById('product-info').style.display = 'none';
  }
//   window.addEventListener("click", function(event) {
//     var modal = document.getElementById("productDetailsModal");
//     if (event.target == modal) {
//         closeModal();
//     }
// });  
