import { fireEvent, render, screen } from '@testing-library/react';
import App, { replaceCamelCaseToSpace } from './App';

test('Change to Midnight Blue가 적힌 버튼을 렌더링한다.', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });

  // https://github.com/testing-library/jest-dom/issues/461
  // toHavestyle Issue, 통과되어서는 안되는 테스트가 통과가 된다.

  // 잘못된 구문
  // 성공
  expect(colorButton).toHaveStyle({
    backgroundColor: 'MediumVioletRed',
  });

  // 성공
  expect(colorButton).toHaveStyle({
    backgroundColor: '이렇게 들어가도 돼?',
  });

  // solution : camelCase 대신 kebab-case 사용
  // 올바른 구문
  // 성공
  expect(colorButton).toHaveStyle({
    'background-color': 'MediumVioletRed',
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
test('버튼을 클릭하면 Midnight Blue색으로 변경된다.', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });

  // Click Event 발생
  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({
    'background-color': 'MidnightBlue',
  });

  expect(colorButton).toHaveTextContent('Change to Medium Violet Red');
});

test('체크박스 초기 조건을 테스트한다.', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });

  // 버튼이 disabled 되어있는가
  expect(colorButton).toBeEnabled();

  // 체크박스가 체크되어있지 않는가
  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
});

test('체크박스를 처음 클릭했을 때 활성 상태로 변화하고 두 번째 클릭했을 때 비활성 상태로 변경', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });

  // 버튼의 초기 상태 - 활성화
  expect(colorButton).toBeEnabled();

  // 체크박스 활성화 - 버튼 상태 비활성화
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  // 체크 박스 비활성화 - 버튼 상태 활성화
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test('체크박스 두 번 클릭 시 버튼 색상 회색 다음 빨강색으로 변경', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  const checkbox = screen.getByRole('checkbox', {
    name: 'Disable Button',
  });

  // 체크 박스 활성화 -> 버튼 비활성화 및 색상 변경(gray)
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({
    'background-color': 'gray',
  });

  // 체크 박스 비활성화 -> 버튼 활성화 및 색상 변경(red)
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({
    'background-color': 'MediumVioletRed',
  });
});

test('체크박스 두 번 클릭 시 버튼 색상 회색 다음 파랑색으로 변경', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  const checkbox = screen.getByRole('checkbox', {
    name: 'Disable Button',
  });

  // 버튼 배경색 파랑색으로 변경
  fireEvent.click(colorButton);

  // 체크 박스 비활성화 -> 버튼 활성화 및 색상 변경(red)
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({
    'background-color': 'gray',
  });

  // 체크 박스 비활성화 -> 버튼 활성화 및 색상 변경(blue)
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({
    'background-color': 'MidnightBlue',
  });
});

describe('CamelCase로 이루어진 색상을 띄어쓰기로 구분한다.', () => {
  test('주어진 색상 내 Camel Case로 이루어진 대문자가 하나도 없는 경우를 테스트한다.', () => {
    expect(replaceCamelCaseToSpace('Red')).toBe('Red');
  });

  test('글자 내에 Camel Case로 이루어진 대문자가 하나인 경우를 테스트한다.', () => {
    expect(replaceCamelCaseToSpace('MidnightBlue')).toBe('Midnight Blue');
  });

  test('글자 내에 Camel Case로 이루어진 대문자가 여러 개인 경우를 테스트한다.', () => {
    expect(replaceCamelCaseToSpace('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
