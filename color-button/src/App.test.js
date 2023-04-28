import { render, screen } from '@testing-library/react';
import App from './App';

test('Change to Blue가 적힌 버튼을 렌더링한다.', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {
    name: 'Change to Blue',
  });

  // https://github.com/testing-library/jest-dom/issues/461
  // toHavestyle Issue, 통과되어서는 안되는 테스트가 통과가 된다.

  // 잘못된 구문
  // 성공
  expect(colorButton).toHaveStyle({
    backgroundColor: 'red',
  });

  // 성공
  expect(colorButton).toHaveStyle({
    backgroundColor: '이렇게 들어가도 돼?',
  });

  // solution : camelCase 대신 kebab-case 사용
  // 올바른 구문
  // 성공
  expect(colorButton).toHaveStyle({
    'background-color': 'red',
  });

  // 실패
  expect(colorButton).toHaveStyle({
    'background-color': '이건 실패해야지',
  });
});

test('버튼을 클릭하면 파란색으로 변경된다.', () => {});
