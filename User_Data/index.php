<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation - Easy Tutorials YouTube Channel</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c4254e24a8.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
  <div class="container">
    <form action="saveData.php" method="get">
      <i class="fas fa-paper-plane"></i>

      <div class="input-group">
        <label>Full Name</label>
        <input type="text" placeholder="Enter your name" id="contact-name" name="name" onkeyup="validateName()">
        <span id="name-error"></span>
      </div>
      
      <div class="input-group">
        <label>Phone No.</label>
        <input type="tel" placeholder="123 456 7890" id="phone" name="phone" onkeyup="validatePhone()">
        <span id="phone-error"></span>
      </div>
      
      <div class="input-group">
        <label>Email Id</label>
        <input type="email" placeholder="Enter Email" id="email" name="email" onkeyup="validateEmail()">
        <span id="email-error"></span>
      </div>   
      
      <div class="input-group">
        <label>Your Message</label>
        <textarea rows="5" placeholder="Enter your message" id="message" name="message" onkeyup="validateMessage()"></textarea>
        <span id="message-error"></span>
      </div>
        <input type="hidden" name="action" value="registrationFrom"/>
      <button type="submit">Submit</button>
      <span id="submit-error"></span>
   
  </form>


  
  </div>
  <script src="script.js"></script>
</body>
</html>