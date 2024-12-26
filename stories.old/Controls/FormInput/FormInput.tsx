import { cn } from "@/src/utils/cn";
import { Input } from "@mui/base/Input";

const borderColor = "#8a625b";
const darkBorderColor = "sky";

const elementStyles = {
  element: cn(["w-full", "font-sans"]),
};

function FormInput() {
  return (
    <Input
      aria-label="Demo input"
      className="w-full"
      slotProps={{
        input: {
          className: `${elementStyles.element}`,
          type: "text",
        },
      }}
      placeholder="Type something…"
    />
  );
}

export { FormInput };
