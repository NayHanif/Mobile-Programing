<?php
header('Access-Control-Allow-Origin: *');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "minumin";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, judul, isi, tanggal FROM informasi";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row[] = $result->fetch_assoc()) {
    //echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
    $item = $row;
    $json = json_encode($item);
  }
} else {
  echo "0 results";
}
echo $json;
$conn->close();
//reactnative/docs/image
//docs/environment-setup
//reactjs.org
?>
