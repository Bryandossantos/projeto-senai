<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $host = 'localhost';
    $usuario = 'root';
    $senha = '';
    $banco = 'meu_banco';


    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Falha na conexão com o banco de dados: " . $conn->connect_error);
    }

    $filial = $_POST['filial'];
    $gerente = $_POST['gerente'];
    $question1 = $_POST['question1'];
    $question2 = $_POST['question2'];
    $question3 = $_POST['question3'];
    $question4 = $_POST['question4'];
    $question5 = $_POST['question5'];
    $question6 = $_POST['question6'];
    $question7 = $_POST['question7'];
    $question8 = $_POST['question8'];
    $question9 = $_POST['question9'];
    $question10 = $_POST['question10'];
    $options = $_POST['options'];

    $sql = "INSERT INTO respostas (filial, gerente, question1, question2, question3, question4, question5, question6, question7, question8, options) VALUES ('$filial', '$gerente', '$question1', '$question2', '$question3', '$question4', '$question5', '$question6', '$question7', '$question8', '$question9', '$question10', '$options')";

    if ($conn->query($sql) === TRUE) {
        echo "Respostas inseridas com sucesso!";
    } else {
        echo "Erro ao inserir respostas: " . $conn->error;
    }

    $conn->close();
}
?>