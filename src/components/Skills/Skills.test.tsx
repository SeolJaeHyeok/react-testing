import {render, screen} from "@testing-library/react"
import Skills from "./Skills";

describe('Skills', () => {
  const skills = ['html', 'css', 'javascript'];

  test('올바르게 Skills 컴포넌트를 렌더링한다.', () => {
    render(<Skills skills={skills}/>)

    const listEl = screen.getByRole('list');
    expect(listEl).toBeInTheDocument();
  });

  test('Skills 아이템 목록을 렌더링한다.', () => {
    render(<Skills skills={skills}/>);

    const listEls = screen.getAllByRole('listitem');
    expect(listEls).toHaveLength(skills.length)
  })
})