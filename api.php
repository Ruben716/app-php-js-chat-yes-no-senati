<?php

header("Access-Control-Allow-Origin: *");

$metodo = $_SERVER['REQUEST_METHOD'];
//*ruben daniel   */
$respuesta =[];
switch ($metodo) {
    case 'GET':
        $respuesta = ['mensaje' => 'El método HTTP utilizado es GET',
                        'data' =>$_GET];
        break;

    case 'POST': 
        $data_entrate = json_decode(file_get_contents('php://input'), true);
        $respuesta = ['mensaje' => 'El método HTTP utilizado es POST',
                        'data' => $data_entrate];
        break;

    
    default:
        # code...
        break;
}
echo json_encode($respuesta);