"use client";
import { Box, Button, Text, TextField } from "@radix-ui/themes";
import { LogIn } from "lucide-react";
import { useForm } from "react-hook-form";
import FormHeading from "../_components/FormHeading";
import { signInUserSchema, TSignInFormData } from "@/app/validations";
import { ErrorMessage } from "@/app/components";
import { zodResolver } from "@hookform/resolvers/zod";

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignInFormData>({
    resolver: zodResolver(signInUserSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: TSignInFormData) => {
    console.log(data);
  };
  return (
    <div className="max-w-96 p-4 bg-slate-100 mx-auto rounded-xl mt-10 space-y-4">
      <FormHeading
        title="Login to your account"
        description="Welcome back! please enter your details"
      />
      <form className="space-y-7" onSubmit={handleSubmit(onSubmit)}>
        <Box className="space-y-2">
          <Text as="p" mb={"2"}>
            Email
          </Text>
          <TextField.Root>
            <TextField.Input
              placeholder="example@gmail.com"
              {...register("email")}
            />
          </TextField.Root>
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </Box>
        <Box className="space-y-2">
          <Text as="p" mb={"2"}>
            Password
          </Text>
          <TextField.Root>
            <TextField.Input placeholder="Password" {...register("password")} />
          </TextField.Root>
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
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
