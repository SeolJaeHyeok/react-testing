import { render, screen } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

test('모든 컴포넌트를 올바르게 렌더링한다.', () => {
  render(<SummaryForm />);
  const checkBox = screen.getByRole('checkbox', {
    // name: /terms and conditions/i,
    name: /이용약관/,
  });

  expect(checkBox).not.toBeChecked();

  const confirmButton = screen.getByRole('button', {
    name: '주문 확인',
  });

  expect(confirmButton).toBeDisabled();
});

test('체크 박스 클릭 시 버튼이 활성화되고 클릭 해제 시 버튼이 비활성화된다.', async () => {
  render(<SummaryForm />);

  const user = userEvent.setup();

  const checkBox = screen.getByRole('checkbox', {
    // name: /terms and conditions/i,
    name: /이용약관/,
  });
  const confirmButton = screen.getByRole('button', {
    name: '주문 확인',
  });

  // initial
  expect(checkBox).not.toBeChecked();
  expect(confirmButton).toBeDisabled();

  // click
  await user.click(checkBox);

  // checked
  expect(checkBox).toBeChecked();
  expect(confirmButton).toBeEnabled();

  // click
  await user.click(checkBox);

  // unchecked
  expect(checkBox).not.toBeChecked();
  expect(confirmButton).toBeDisabled();
});

test('약관에 마우스를 Hover하면 팝오버가 나온다.', async () => {
  const user = userEvent.setup();

  render(<SummaryForm />);

  // 초기에는 팝오버가 보이지 않음
  const nullPopover = screen.queryByText(/실제로 아이스크림이 배달되지는 않아요ㅠㅠ/); // DOM에 일치하는게 없을 경우 queryBy 사용
  expect(nullPopover).not.toBeInTheDocument();

  // 마우스 커서를 올리면 팝오버가 보임
  const termsAndConditions = screen.getByText(/이용약관/);
  await user.hover(termsAndConditions);
  const popover = screen.getByText(/실제로 아이스크림이 배달되지는 않아요ㅠㅠ/); // DOM에 존재하게 되므로 getBy 사용
  expect(popover).toBeInTheDocument();

  // 마우스 커서가 벗어나면 팝오버가 사라짐
  await user.unhover(termsAndConditions);
  expect(popover).not.toBeInTheDocument();
});
