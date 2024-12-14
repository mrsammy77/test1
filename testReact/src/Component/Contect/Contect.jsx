import { useForm } from "react-hook-form";
import { notification } from "antd";
import '../Contect/Contect.css'
export default function App() {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (value) => {
    api.open({
      message: value,
      description:
        'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
      duration: 3,
    });
  }
  const onSubmit = (data) => {
    console.log(data);
    openNotification('Form Submit');

  };




  return (
    <div className="form">
      {contextHolder}
      {


        <form className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="userName"
            {...register("firstName", { required: true })}
            aria-invalid={errors.firstName ? "true" : "false"}
          />

          {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}


          <input placeholder="Email"
            {...register("mail", { required: "Email Address is required" })}
            aria-invalid={errors.mail ? "true" : "false"}
          />
          {errors.mail && <p role="alert">{errors.mail?.message}</p>}


          <input placeholder="Password"
            {...register("password", { required: "Password is required" })}
            aria-invalid={errors.mail ? "true" : "false"}
          />
          {errors.password && <p role="alert">{errors.password?.message}</p>}

          <input className="button" type="Submit" />
        </form>


      }
    </div>
  );
}