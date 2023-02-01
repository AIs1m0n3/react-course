import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { INewUser } from "../../../../model/user";
import { defaultUser } from "../../../../utils/user.utils";
import { useEffect } from "react";

export const UserForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: defaultUser,
  });

  const watchImage = watch("image");
  const watchLanguage = watch("language");

  const onSubmit = (data: INewUser) => {
    console.log(data);
  };

  const now = dayjs().format("YYYY-MM-DD");

  useEffect(() => {
    setValue("framework", null, { shouldValidate: true });
  }, [watchLanguage]);

  return (
    <div className="user-form">
      <h1>Add a new user</h1>

      <form>
        <div className="row">
          <select
            {...register("language", {
              required: { value: true, message: "Field required" },
            })}
          >
            <option value="">Nome</option>
            <option value="php">PHP</option>
            <option value="js">JS</option>
          </select>
        </div>

        {watchLanguage && (
          <div className="row">
            <select
              {...register("framework", {
                required: { value: true, message: "Field required" },
              })}
            >
              {watchLanguage === "js" ? (
                <>
                  <option value="">Nome</option>
                  <option value="react">React</option>
                  <option value="angular">Angular</option>
                </>
              ) : (
                <>
                  <option value="">Nome</option>
                  <option value="laravel">Laravel</option>
                  <option value="symphony">Symphony</option>
                </>
              )}
            </select>
          </div>
        )}

        <div className="row">
          <label htmlFor="firstName">Insert first name</label>
          <input
            id="firstName"
            {...register("firstName", {
              required: { value: true, message: "Field required" },
              minLength: { value: 2, message: "Min 3 char allowed" },
            })}
            placeholder="First name"
          />
          {errors.firstName && errors.firstName?.message}
        </div>

        <div className="row">
          <label htmlFor="lastName">Insert last name</label>
          <input
            id="lastName"
            {...register("lastName", {
              required: { value: true, message: "Field required" },
              minLength: { value: 2, message: "Min 3 char allowed" },
            })}
            placeholder="Last name"
          />
          {errors.lastName && errors.lastName.message}
        </div>

        <div className="row">
          <label htmlFor="email">Insert email</label>
          <input
            id="email"
            {...register("email", {
              required: { value: true, message: "Field required" },
              pattern: {
                value: /^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email not valid",
              },
            })}
            placeholder="Email"
          />
          {errors.email && errors.email.message}
        </div>

        <div className="row">
          <label htmlFor="birthdate">Insert birthdate</label>
          <input
            id="birthdate"
            type="date"
            max={now}
            {...register("birthDate", {
              required: { value: true, message: "Field required" },
            })}
            placeholder="Birthdate"
          />
          {errors.birthDate && errors.birthDate.message}
        </div>

        <div className="row">
          <label htmlFor="image">Insert image url</label>
          <input
            id="image"
            {...register("image", {
              required: { value: true, message: "Field required" },
            })}
            placeholder="Image"
          />
          {errors.image && errors.image.message}
        </div>

        <div className="row">
          {watchImage && (
            <img className="preview-image" src={watchImage} alt="" />
          )}
        </div>

        <button disabled={!isValid} onClick={handleSubmit(onSubmit)}>
          Send
        </button>
      </form>
    </div>
  );
};
