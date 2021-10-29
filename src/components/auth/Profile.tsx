export type ProfileProps = {
  name: string;
};
export const Profile = ({ name }: ProfileProps) => {
  return (
    <>
      <p>Welcome {name} to homepage...</p>
    </>
  );
};
