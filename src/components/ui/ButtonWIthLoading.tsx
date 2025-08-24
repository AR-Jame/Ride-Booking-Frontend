import { Button } from "./button";

interface IProps {
    text: string
}

const ButtonWIthLoading = ({ text, onClick, isLoading }: IProps) => {
    return (
        <Button >
            {text}
        </Button>
    );
};

export default ButtonWIthLoading;