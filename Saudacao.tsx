import React from "react";

interface SaudacaoProp {
    nome: String;
    idade: Number;
}

const Saudacao: React.FC<SaudacaoProp> = ({ nome = "Visitante", idade}) => {
    const idadeMensagem = idade !== undefined
    ? idade >= 18
        ? "Você é maior de idade."
        : "Você é menor de idade."
    : "Idade não informada.";
    return(
        <div>
            <h4>Olá, {nome}!</h4>
            <p>{idadeMensagem}</p>
        </div>
    )
}

export default Saudacao;