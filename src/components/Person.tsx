import { PersonPropsType } from "./Person.types";

export const Person = (props: PersonPropsType) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};
