import { render } from '@testing-library/react';
import Contador from '@/components/layout/Eventos';

test("O componente deve permanecer igual", () => {
    const { container } = render(<Contador />);
    expect(container.firstChild).toMatchSnapshot();
});