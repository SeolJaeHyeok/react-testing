import { render, screen } from '@testing-library/react';
import Skills from './Skills';

describe('Skills', () => {
  const skills = ['html', 'css', 'javascript'];

  test('올바르게 Skills 컴포넌트를 렌더링한다.', () => {
    render(<Skills skills={skills} />);

    const listEl = screen.getByRole('list');
    expect(listEl).toBeInTheDocument();
  });

  test('Skills 아이템 목록을 렌더링한다.', () => {
    render(<Skills skills={skills} />);

    const listEls = screen.getAllByRole('listitem');
    expect(listEls).toHaveLength(skills.length);
  });

  test('Login Button을 렌더링한다.', () => {
    render(<Skills skills={skills} />);

    const buttonEl = screen.getByRole('button', {
      name: 'Login',
    });
    expect(buttonEl).toBeInTheDocument();
  });

  test('Start learning Button을 렌더링 하지 않는다.', () => {
    render(<Skills skills={skills} />);

    const startLearningButton = screen.queryByRole(/start learning/i);
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test('Start learning Button이 최후에 렌더링 된다.', async () => {
    render(<Skills skills={skills} />);

    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start learning',
      },
      { timeout: 2000 }
    );
    expect(startLearningButton).toBeInTheDocument();
  });
});
