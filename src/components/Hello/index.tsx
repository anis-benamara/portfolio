type HelloProps = {
  name: string;
};

const Hello = (props: HelloProps) => {
  return <div role="greeting">Hello {props.name}</div>;
};

export default Hello;
