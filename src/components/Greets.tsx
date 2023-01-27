type PropsType = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greets = (props: PropsType) => {
  const { messageCount = 0 } = props;

  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name} you have ${props.messageCount} unread messages.`
          : `Welcome Guest`}
      </h2>
    </div>
  );
};
