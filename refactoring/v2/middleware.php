<?php
class Middleware {
    public static function handle($dados) {
        if (empty($dados['nome']) || empty($dados['idade']) || empty($dados['curso'])) {
            die("❌ Erro: Todos os campos são obrigatórios.");
        }

        if (!is_numeric($dados['idade'])) {
            die("❌ Erro: A idade deve ser um número.");
        }
    }
}