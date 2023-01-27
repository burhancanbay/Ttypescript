type HeadingPropsType = {
  children: string;
};

export const Heading = (props: HeadingPropsType) => {
  return (
    <div>
      <h2>{props.children}</h2>
    </div>
  );
};
