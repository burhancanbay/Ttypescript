type StatusPropsType = {
  status: "loading" | "success" | "error";
};

export const Status = (props: StatusPropsType) => {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfuly";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};
