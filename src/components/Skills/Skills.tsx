import { SkillsProps } from "./Skills.types";

export default function Skills(props: SkillsProps) {
  const {skills} = props;

  return <>
    <ul>
      {skills.map((skill) => <li key={skill}>{skill}</li>)}
    </ul>
  </>
}