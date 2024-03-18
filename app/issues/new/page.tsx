"use client";
import { TIssueFormData } from "@/app/validations";
import { Button, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<TIssueFormData>();
  const onSubmit = async (data: TIssueFormData) => {
    try {
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="max-w-xl space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <TextField.Root>
        <TextField.Input placeholder="Title" {...register("title")} />
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => <SimpleMDE {...field} />}
      />
      <Button>Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
