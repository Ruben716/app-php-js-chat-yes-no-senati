<?php

header("Access-Control-Allow-Origin: *");

$metodo = $_SERVER['REQUEST_METHOD'];

$respuesta =[];
switch ($metodo) {
    case 'GET':
        $respuesta = ['mensaje' => 'El método HTTP utilizado es GET',
                        'data' =>$_GET];
        break;
    
    default:
        # code...
        break;
}
echo json_encode($respuesta);