<?php
//http://scratchextproxy.x10.mx/pretty-scratch-js.php
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/css');

$url = 'https://raw.githubusercontent.com/GrannyCookies/pretty-scratch/gh-pages/src/main.js';

echo file_get_contents($url);
?>
