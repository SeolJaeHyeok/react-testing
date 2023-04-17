import { useState } from "react";
import { SkillsProps } from "./Skills.types";

export default function Skills(props: SkillsProps) {
  const {skills} = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <>
    <ul>
      {skills.map((skill) => <li key={skill}>{skill}</li>)}
    </ul>
    {isLoggedIn ? <button>Start learning</button> : <button onClick={() => setIsLoggedIn(true)}>Login</button>}
  </>
}