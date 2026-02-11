import { fireEvent, render, screen } from '@testing-library/react';
import Contador from '@/components/layout/Eventos';

test("Incrementa o contador ao clicar no botão", () => {
    render(<Contador />);
    
    const botao = screen.getByText("Incrementar");
    fireEvent.click(botao);
   
    expect(screen.getByText("Valor: 1")).toBeInTheDocument();
});

