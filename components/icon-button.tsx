import { cn } from "@/lib/utils";

interface IconButtonProps {
  onclick: () => void;
  icon: React.ReactElement;
  className?: string;
}

const IconButton = (props: IconButtonProps) => {
  return (
    <button
      onClick={props.onclick}
      className={cn(
        "rounded-full flex items-center bg-white border shadow-md p-2 hover:scale-110 transition",
        props.className
      )}
    >
      {props.icon}
    </button>
  );
};

export default IconButton;
