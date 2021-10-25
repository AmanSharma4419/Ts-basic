import { type } from "os";

type personDetails = {
  personInfo: {
    firstName: string;
    lastName: string;
  };
};
export const Person = (props: personDetails) => {
  const { firstName, lastName } = props.personInfo;
  return (
    <>
      <h1>
        Hello my name is {firstName}
        {lastName}
      </h1>
    </>
  );
};
