import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('Change to Blue가 적힌 버튼을 렌더링한다.', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {
    name: 'Change to blue',
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
  // expect(colorButton).toHaveStyle({
  //   'background-color': '이건 실패해야지',
  // });
});

// Unit Test의 경우 테스트 당 하나의 단언문으로 작성하는 것이 더 적절할 수 있다.
// 각 테스트의 단언문이 하나일 때 장점은 하나의 테스트가 실패하면 아래의 다른 테스트들이 수행되지 않는다는 점이다.
// 반면 기능 테스트는 버튼을 클릭하고 체크박스를 선택하고 폼에 입력하는 일련의 과정을 테스트 하는 것이기 때문에
// 여러 테스트들이 describe 혹은 it 함수 안에서 작성이 되는 것이 적절하다.
test('버튼을 클릭하면 파란색으로 변경된다.', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', {
    name: 'Change to blue',
  });

  // Click Event 발생
  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({
    'background-color': 'blue',
  });

  expect(colorButton).toHaveTextContent('Change to red');
});

test('체크박스 초기 조건을 테스트한다.', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {
    name: 'Change to blue',
  });

  // 버튼이 disabled 되어있는가
  expect(colorButton).toBeEnabled();

  // 체크박스가 체크되어있지 않는가
  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
});
