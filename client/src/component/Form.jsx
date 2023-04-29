import { useForm } from "@mantine/form";
import { NumberInput, TextInput, Button, Box } from "@mantine/core";
import axios from "axios";

function Form() {
  const form = useForm({
    initialValues: { name: "", email: "", age: 0, password: "" },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      age: (value) =>
        value < 18 ? "You must be at least 18 to register" : null,
    },
    password: (value) =>
      value.length < 8 ? "Name must have at least 2 letters" : null,
  });

  const submitData = async (data) => {
    try {
      const result = await axios.post("http://localhost:8000/user", data);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box maw={320} mx="auto" mb={100}>
      <form
        onSubmit={form.onSubmit((values) => {
          console.log(values);
          submitData(values);
          form.reset();
        })}
      >
        <TextInput
          label="Name"
          placeholder="Name"
          {...form.getInputProps("name")}
        />
        <TextInput
          mt="sm"
          label="Email"
          placeholder="Email"
          {...form.getInputProps("email")}
        />
        <NumberInput
          mt="sm"
          label="Age"
          placeholder="Age"
          min={0}
          max={99}
          {...form.getInputProps("age")}
        />
        <TextInput
          mt="sm"
          label="Password"
          placeholder="Password"
          {...form.getInputProps("password")}
        />
        <Button type="submit" mt="sm">
          Submit
        </Button>
      </form>
    </Box>
  );
}
export default Form;
