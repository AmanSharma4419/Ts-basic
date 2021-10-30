import { Greet } from "components/Greet";

export const Custom = (props: React.ComponentProps<typeof Greet>) => {
  console.log(props, "in the props");
  return (
    <>
      <p>Props from another components {props.messages}</p>
    </>
  );
};
