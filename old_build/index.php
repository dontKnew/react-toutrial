<?php
$routes = $_SERVER['REQUEST_URI'];
switch($routes){
    case '/':
        $title = "Home Page - Server";
        $keywords = "Home Page Keywords - Server";
        $description = "Home page Description - Server";
        break;
    case '/contact':
        $title = "Contact Page - Server";
        $keywords = "Contact Page Keywords - Server";
        $description = "Contact page Description - Server";
        break;

    case '/about':
            $title = "About Page - Server";
            $keywords = "About Page Keywords - Server";
            $description = "About page Description - Server";
            break;
    case '/api':
        $title = "Api Page - Server";
        $keywords = "Api Page Keywords - Server";
        $description = "Api page Description - Server";
        break;
    default :
        $title  = "404 Erorr - Server";
        $keywords = "Page Not Found, Error - Server";
        $description = "Page Not Found Description - Server";
        break;
}
?>
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <link rel="icon" href="" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="keywords" content="<?=$keywords?>" />
    <meta name="description" content="<?=$description?>" />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <title><?=$title?></title>
    <script defer="defer" src="/static/js/main.cace2cfd.js"></script>
    <link href="/static/css/main.0ba73d62.css" rel="stylesheet">
</head>

<body><noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
</body>

</html>