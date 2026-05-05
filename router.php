<?php
require_once 'controller.php';
require_once 'middleware.php';

class Router {
    public function handleRequest() {
        $metodo = $_SERVER['REQUEST_METHOD'];

        if ($metodo === 'GET') {
            include 'view.php'; // Mostra o formulário
        } elseif ($metodo === 'POST') {
            Middleware::handle($_POST); // Segurança primeiro
            $controller = new MatriculaController();
            $controller->processarMatricula($_POST);
        }
    }
}