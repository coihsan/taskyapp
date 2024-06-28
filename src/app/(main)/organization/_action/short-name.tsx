type NameProps = {
    text: string;
};

const ShortName = ({ text }: NameProps) => {
    if (text.length < 2) {
        return <div>{text}</div>;
    }

    const firstChar = text.charAt(0).toUpperCase();
    const lastChar = text.charAt(text.length - 1).toUpperCase();
    const concatenated = firstChar + lastChar;

    return (
        <div>
            {text}{concatenated}
        </div>
    );
};

export default ShortName;
