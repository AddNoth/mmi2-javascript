<?php
require 'connexion.php';

// Grab the variables form the JSON
$Post_title= $_GET['title'];
$Post_description= $_GET['description'];

// SQL request to the Database
$request = "INSERT INTO post SET title='$Post_title', description='$Post_description'";
$result = $bdd->query($request);
?>