<?php
//
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Content-Type: applicatiopn/json");
header("Content-Type: text/html; charset=iso-8859-1");

    require_once 'connection.php';
    require_once './model/ContactModel.php';
    require_once './controller/ContactController.php';
    require_once './router.php';

    date_default_timezone_set('America/Sao_Paulo');

    $router = (new Router())->router();

    echo json_encode($router);