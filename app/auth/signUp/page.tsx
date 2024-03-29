"use client";
import { ErrorMessage, Link, Spinner } from "@/app/components";
import { signUpUserSchema, TSignUpFormData } from "@/app/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Flex, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CalloutErrorMessage from "../_components/CalloutErrorMessage";
import FormHeading from "../_components/FormHeading";

const SignUpPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUpFormData>({
    resolver: zodResolver(signUpUserSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = async (data: TSignUpFormData) => {
    try {
      setIsSubmitting(true);
      await axios.post("/api/auth/signup", data);
      router.push("/auth/signIn");
    } catch (error) {
      setIsSubmitting(false);
      setError("Sorry, Email already exists.");
    }
  };

  return (
    <div className="max-w-96 p-4 bg-slate-100 mx-auto rounded-xl mt-10 space-y-4">
      <FormHeading
        title="Create a new account"
        description="To use Issue Tracker, please enter your details"
      />
      {error && <CalloutErrorMessage errorMessage={error} />}
      <form className="space-y-7" onSubmit={handleSubmit(onSubmit)}>
        <Box className="space-y-2">
          <Text as="p" mb={"2"}>
            Name
          </Text>
          <TextField.Root>
            <TextField.Input placeholder="John" {...register("name")} />
          </TextField.Root>
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </Box>
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
        <Flex direction={"column"} gap={"3"} mt={"5"} className="text-center">
          <Button disabled={isSubmitting}>
            {isSubmitting ? <Spinner /> : "Create Account"}
          </Button>
          <Link href="/auth/signIn">Already have an account?SignIn</Link>
        </Flex>
      </form>
    </div>
  );
};

export default SignUpPage;
