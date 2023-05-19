import { screen, render } from '@testing-library/react';
import Options from '../Options';

test('서버로부터 각 Scoop의 이미지를 화면에 올바르게 보여준다.', async () => {
  render(<Options optionType='scoops' />);

  // 이미지 가져오기
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // 이미지의 Alt Text 확인
  const altText = scoopImages.map((el) => el.alt);
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});
