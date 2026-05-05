<?php
class AlunoModel {
    private $nome;
    private $idade;
    private $curso;

    public function __construct($nome, $idade, $curso) {
        $this->nome = $nome;
        $this->idade = $idade;
        $this->curso = $curso;
    }

    public function save() {
        $pdo = new PDO('sqlite:database.sqlite');
        $stmt = $pdo->prepare("INSERT INTO alunos (nome, idade, curso) VALUES (?, ?, ?)");
        return $stmt->execute([$this->nome, $this->idade, $this->curso]);
    }
}