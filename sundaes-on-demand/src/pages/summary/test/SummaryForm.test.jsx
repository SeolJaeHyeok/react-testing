import { fireEvent, render, screen } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

test('모든 컴포넌트를 올바르게 렌더링한다.', () => {
  render(<SummaryForm />);
  const checkBox = screen.getByRole('checkbox', {
    name: '이용 약관',
  });

  expect(checkBox).not.toBeChecked();

  const confirmButton = screen.getByRole('button', {
    name: '주문 확인',
  });

  expect(confirmButton).toBeDisabled();
});

test('체크 박스 클릭 시 버튼이 활성화되고 클릭 해제 시 버튼이 비활성화된다.', () => {
  render(<SummaryForm />);
  const checkBox = screen.getByRole('checkbox', {
    name: '이용 약관',
  });
  const confirmButton = screen.getByRole('button', {
    name: '주문 확인',
  });

  // initial
  expect(checkBox).not.toBeChecked();
  expect(confirmButton).toBeDisabled();

  // click
  fireEvent.click(checkBox);

  // checked
  expect(checkBox).toBeChecked();
  expect(confirmButton).toBeEnabled();

  // click
  fireEvent.click(checkBox);

  // unchecked
  expect(checkBox).not.toBeChecked();
  expect(confirmButton).toBeDisabled();
});
