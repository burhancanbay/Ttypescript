type InputPropsType = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputPropsType) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return <input type="text" value={props.value} onChange={handleInputChange} />;
};
