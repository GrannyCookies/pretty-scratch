<?php
//http://scratchextproxy.x10.mx/pretty-scratch.php
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/css');

$url = 'https://raw.githubusercontent.com/GrannyCookies/pretty-scratch/gh-pages/src/main.css';

echo file_get_contents($url);
?>
