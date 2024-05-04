import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CreateProjectFormValues } from "@/packages/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface CreateProjectFormProps {
  onSubmit: (v: CreateProjectFormValues) => Promise<void>;
  isLoading?: boolean;
}

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
});

export const CreateProjectForm: React.FC<CreateProjectFormProps> = ({
  onSubmit,
  isLoading = false,
}) => {
  const form = useForm<CreateProjectFormValues>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
  });

  return (
    <Form {...form}>
      <form
        name="create-project"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="h-20">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter project name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe your project" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          {isLoading ? (
            <div className="flex">
              loading...
              <Icons.Spinner className="ml-2 h-4 w-4 animate-spin" />
            </div>
          ) : (
            <div>Submit</div>
          )}
        </Button>
      </form>
    </Form>
  );
};
