import { useEffect, useState } from 'react';
import { SkillsProps } from './Skills.types';

export default function Skills(props: SkillsProps) {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1500);
  }, []);

  return (
    <>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {isLoggedIn ? <button>Start learning</button> : <button onClick={() => setIsLoggedIn(true)}>Login</button>}
    </>
  );
}
