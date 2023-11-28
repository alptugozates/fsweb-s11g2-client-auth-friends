import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";



export default function LoginForm({ setCheck }) {
    const history = useHistory();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        defaultValues: {
            username: "workintech",
            password: "wecandoit",
        },
    });

    const onSubmit = (data) => {
        axios
            .post("http://localhost:9000/api/login", data)
            .then((res) => {
                localStorage.setItem("s11g2", res.data.token);
                setCheck(true);
                history.push("/friends");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h1 className="text-5xl font-bold">SIGN IN</h1>
            <form
                className="flex justify-start flex-col mt-5 text-start ml-40 mb-20"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="input-container">
                    <label className="label" htmlFor="username">
                        USERNAME
                    </label>
                    <input
                        className="input-field"
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                        {...register("username", { required: "This field is required." })}
                    />
                    {errors.username && (
                        <span className="error-message">{errors.username.message}</span>
                    )}
                </div>
                <div className="input-container">
                    <label className="label" htmlFor="password">
                        PASSWORD
                    </label>
                    <input
                        className="input-field"
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        {...register("password", { required: "This field is required." })}
                    />
                    {errors.password && (
                        <span className="error-message">{errors.password.message}</span>
                    )}
                </div>
                <button
                    className="border p-3 bg-black text-white pl-16 pr-16 ml-1 mt-3 font-bold mr-36"
                    type="submit"
                >
                    SUBMIT
                </button>
            </form>
        </div>
    );
}