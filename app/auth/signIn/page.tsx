"use client";
import { Box, Button, Text, TextField } from "@radix-ui/themes";
import { LogIn } from "lucide-react";
import { useForm } from "react-hook-form";
import FormHeading from "../_components/FormHeading";

interface SignInFormData {
  email: string;
  password: string;
}
const SignInPage = () => {
  const { register, handleSubmit } = useForm<SignInFormData>();

  const onSubmit = (data: SignInFormData) => {
    console.log(data);
  };
  return (
    <div className="max-w-96 border p-4 bg-slate-100 mx-auto rounded-xl mt-10 space-y-4">
      <FormHeading
        title="Login to your account"
        description="Welcome back! please enter your details"
      />
      <form className="space-y-7" onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Text as="p" mb={"2"}>
            Email
          </Text>
          <TextField.Root>
            <TextField.Input
              placeholder="example@gmail.com"
              {...register("email")}
            />
          </TextField.Root>
        </Box>
        <Box>
          <Text as="p" mb={"2"}>
            Password
          </Text>
          <TextField.Root>
            <TextField.Input placeholder="Password" {...register("password")} />
          </TextField.Root>
        </Box>
        <Box className="text-center mt-5">
          <Button>
            <LogIn size={17} />
            Sign In
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default SignInPage;
