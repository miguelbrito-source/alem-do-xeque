<?php
require_once 'model.php';
require_once 'service.php';

class MatriculaController {
    public function processarMatricula($post) {
        try {
            // 1. Validar regras de negócio
            MatriculaService::validar($post['idade'], $post['curso']);

            // 2. Instanciar Model e Salvar
            $aluno = new AlunoModel($post['nome'], $post['idade'], $post['curso']);
            $aluno->save();

            echo "✅ Matrícula de " . htmlspecialchars($post['nome']) . " realizada com sucesso!";
        } catch (Exception $e) {
            echo "⚠️ Falha na Matrícula: " . $e->getMessage();
        }
    }
}   