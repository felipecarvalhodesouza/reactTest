import { render, screen } from "@testing-library/react";
import React from "react";

// Jest

test('Quando o input está vazio, novos participantes não podem ser adicionados', () => {
    
    render(<Formulario />)
    //Encontrar no DOM o input

    const input = screen.getByPlaceholderText('Insira os nomes dos participante');

    //Encontrar o botão

    const botao = screen.getByRole('button')

    //Garantir que o input esteja no documento

    expect(input).toBeInTheDocument()

    //Garantir que o botão esteja desabilitado

    expect(botao).toBeDisabled();
})