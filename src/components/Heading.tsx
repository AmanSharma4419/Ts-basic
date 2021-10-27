import { type } from "os";

type HeadingData = {
  children: string;
};
export const Heading = (props: HeadingData) => {
    console.log(props,"in the props")
  return (
    <>
      <p>{props.children}</p>
    </>
  );
};
