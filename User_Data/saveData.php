<?php 
if($_REQUEST['action']=='registrationFrom'){

$name = $_REQUEST['name'];
$phone = $_REQUEST['phone'];
$email = $_REQUEST['email'];
$message = $_REQUEST['message'];

$conn = mysqli_connect("localhost", "root", "" ,"userData") or die("Connection Failed!");


$sql = "INSERT INTO users(`full_name`, `email`, `messages`) VALUES ('{$name}', '{$email}', '{$message}')";
$result = mysqli_query( $conn , $sql) or die("Query unsuccessful!");
?>
<script>
    window.location.href = "http://localhost/User_Data";
</script>

<?php
mysqli_close($conn);
}
 
?>

