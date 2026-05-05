<?php
class MatriculaService {
    public static function validar($idade, $curso) {
        if ($idade < 16) {
            throw new Exception("Idade mínima para qualquer curso é 16 anos.");
        }
        
        if ($curso === "IA Avançada" && $idade < 18) {
            throw new Exception("O curso de IA Avançada exige maioridade.");
        }

        return true; // Dados aprovados
    }
}