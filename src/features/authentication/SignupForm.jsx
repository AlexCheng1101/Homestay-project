import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="名稱" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "此欄位為必填" })}
        />
      </FormRow>

      <FormRow label="電子郵件" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "此欄位為必填",
            pattern: { value: /\S+@\S+\.\S+/, message: "請輸入有效電子信箱" },
          })}
        />
      </FormRow>

      <FormRow
        label="密碼(至少8個字元)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "此欄位為必填",
            minLength: { value: 8, message: "請輸入至少8個字元" },
          })}
        />
      </FormRow>

      <FormRow label="確認密碼" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "此欄位為必填",
            validate: (value) => value === getValues().password || "密碼不一致",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" disabled={isLoading}>
          取消
        </Button>
        <Button>新增使用者</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
