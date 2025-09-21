import { Loader2Icon } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils"; // if you use it, otherwise remove

// Base props
interface BaseProps {
    isLoading?: boolean;
    text?: string;
    children?: React.ReactNode;
    className?: string;
    fullWidth?: boolean;
}

// If button is submit, no onClick required
interface SubmitButtonProps extends BaseProps {
    type?: "submit";
    onClick?: never;
}

// If button is normal button/reset, onClick required
interface ActionButtonProps extends BaseProps {
    type?: "button" | "reset";
    onClick: () => void;
}

type ButtonWithLoadingProps = SubmitButtonProps | ActionButtonProps;

const ButtonWithLoading = ({
    text,
    children,
    isLoading = false,
    type = "button",
    onClick,
    className,
    fullWidth = true,
}: ButtonWithLoadingProps) => {
    return (
        <Button
            type={type}
            onClick={onClick}
            disabled={isLoading}
            className={cn(fullWidth ? "w-full" : "", className)}
        >
            {isLoading ? (
                <>
                    <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                    Please wait...
                </>
            ) : (
                children || text
            )}
        </Button>
    );
};

export default ButtonWithLoading;
