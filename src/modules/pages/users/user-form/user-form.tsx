import { useForm } from "react-hook-form";
import { INewUser } from "../../../../model/user";
import { defaultUser } from "../../../../utils/user.utils";

export const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: defaultUser,
  });

  const onSubmit = (data: INewUser) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Add a new user</h1>

      <form>
        <div className="row">
          <label htmlFor="firstName">Insert first name</label>
          <input
            id="firstName"
            {...register("firstName", {
              required: { value: true, message: "Field required" },
              minLength: { value: 3, message: "Min 3 char allowed" },
              maxLength: { value: 10, message: "Max 10 char allowed" },
            })}
            placeholder="First name"
          />
          {errors.firstName && errors.firstName?.message}
        </div>

        <div className="row">
          <label htmlFor="lastName">Insert last name</label>
          <input
            id="lastName"
            {...register("lastName", { required: true })}
            placeholder="Last name"
          />
        </div>

        <button disabled={!isValid} onClick={handleSubmit(onSubmit)}>
          Send
        </button>
      </form>
    </div>
  );
};
