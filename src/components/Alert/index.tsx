import { ReactNode } from "react";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
} from "react-icons/fa";
import { cva, type VariantProps } from "class-variance-authority";

const alertVariants = cva(
  "flex items-center px-4 py-3 rounded relative text-sm",
  {
    variants: {
      type: {
        success: "bg-green-100 border border-green-400 text-green-700",
        error: "bg-red-100 border border-red-400 text-red-700",
        warning: "bg-sky-100 border border-sky-400 text-sky-700",
      },
    },
    defaultVariants: {
      type: "error",
    },
  }
);

interface AlertProps extends VariantProps<typeof alertVariants> {
  message: string;
  type?: "success" | "error" | "warning";
}

const Alert = ({ message, type = "error" }: AlertProps) => {
  let Icon: ReactNode;

  switch (type) {
    case "success":
      Icon = <FaCheckCircle className="text-green-500 mr-3" />;
      break;
    case "warning":
      Icon = <FaInfoCircle className="text-sky-500 mr-3" />;
      break;
    case "error":
    default:
      Icon = <FaExclamationCircle className="text-red-500 mr-3" />;
      break;
  }

  return (
    <div className={alertVariants({ type })} role="alert">
      {Icon}
      <div>
        <strong className="font-bold capitalize">{type}:</strong>
        <span className="block sm:inline ml-1">{message}</span>
      </div>
    </div>
  );
};

export default Alert;
