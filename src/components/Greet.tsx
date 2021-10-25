type Greet = {
  name?: string;
  sirName: string;
  messages: number;
  isLoggedIn: boolean;
};

export const Greet = (props: Greet) => {
  const { name = "Aman", sirName, messages = 10, isLoggedIn } = props;
  return (
    <div>
      {isLoggedIn ? (
        <h2>
          Welcome {name} {sirName} you have {messages} messages inbox
        </h2>
      ) : (
        "Please login first"
      )}{" "}
    </div>
  );
};
