import { Callout } from "@radix-ui/themes";
import { Info } from "lucide-react";

const CalloutErrorMessage = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <Callout.Root color="red" className="mb-3">
      <Callout.Icon>
        <Info />
      </Callout.Icon>
      <Callout.Text>{errorMessage}</Callout.Text>
    </Callout.Root>
  );
};

export default CalloutErrorMessage;
