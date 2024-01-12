type GreetProps = {
    name: string;
    age: number;
    isMale: boolean
};

const Greet = ( props: GreetProps) => {
    return <div> Hello {props.name}</div>;
};

export default Greet;