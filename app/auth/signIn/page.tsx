"use client";
import { ErrorMessage, Link, Spinner } from "@/app/components";
import { signInUserSchema, TSignInFormData } from "@/app/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Flex, Text, TextField } from "@radix-ui/themes";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CalloutErrorMessage from "../_components/CalloutErrorMessage";
import FormHeading from "../_components/FormHeading";

const SignInPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const onSubmit = async (data: TSignInFormData) => {
    try {
      setIsSubmitting(true);
      const user = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (!user?.ok) {
        setError("Invalid User");
        setIsSubmitting(false);
        return;
      }
      router.push("/");
    } catch (error) {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="max-w-96 p-4 bg-slate-100 mx-auto rounded-xl mt-10 space-y-4">
      <FormHeading
        title="Login to your account"
        description="Welcome back! please enter your details"
      />
      {error && <CalloutErrorMessage errorMessage={error} />}
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
        <Flex direction={"column"} gap={"3"} mt={"5"} className="text-center">
          <Button disabled={isSubmitting}>
            {isSubmitting ? <Spinner /> : "Sign In"}
          </Button>
          <Link href="/auth/signUp">Don't have an account?Sign Up</Link>
        </Flex>
      </form>
    </div>
  );
};

export default SignInPage;
