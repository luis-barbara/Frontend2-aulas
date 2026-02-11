import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Saudacao from '../src/components/layout/Saudacao';

test("Renderiza a saudação corretamente", () => {
    render(<Saudacao nome="João" />);
    expect(screen.getByText("Olá, João!")).toBeInTheDocument(); 
});