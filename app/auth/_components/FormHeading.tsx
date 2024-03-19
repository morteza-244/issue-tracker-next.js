import { Box, Heading, Text } from "@radix-ui/themes";

interface FormHeadingProps {
  title: string;
  description: string;
}

const FormHeading = ({ title, description }: FormHeadingProps) => {
  return (
    <Box className="text-center">
      <Heading size={{ initial: "5", sm: "6" }} mb={"2"}>
        {title}
      </Heading>
      <Text size={{ initial: "2", sm: "3" }}>{description}</Text>
    </Box>
  );
};

export default FormHeading;
