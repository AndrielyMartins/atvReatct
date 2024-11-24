import React from "react";

interface MensagemProps {
    texto: String
}

const Mensagem: React.FC<MensagemProps> = ({texto}) => {
    return <p>{texto}</p>
}
export default Mensagem