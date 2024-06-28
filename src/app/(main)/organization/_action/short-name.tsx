type NameProps = {
    text: string;
};

const ShortName = ({ text }: NameProps) => {
    return (
        <div>
            {text.length < 2 ? text : `${text.charAt(0).toUpperCase()}${text.charAt(text.length - 1).toUpperCase()}`}
        </div>
    );
};

export default ShortName;
