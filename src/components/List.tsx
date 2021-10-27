type listData = {
  list: { first: string; last: string; }[];
};

export const List = (props: listData) => {
  return (
    <>
      <p>Listing content</p>

      {props.list.map((val, index) => {
        return (
          <>
            <li key={index}>
              {val.first}
              {val.last}
            </li>
          </>
        );
      })}
    </>
  );
};
