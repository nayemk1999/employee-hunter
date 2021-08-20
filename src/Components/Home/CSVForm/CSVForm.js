import React from 'react'
import { useForm } from "react-hook-form";
export default function CSVForm() {
    const {
        register,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div>
            <h1 className='p-5'>This is CSVForm Section</h1>
            <form onSubmit={onSubmit}>
                <input
                    required
                    className="form-control"
                    id="fast-name"
                    defaultValue=""
                    placeholder="Enter your first name"
                    {...register("fast-name", { required: true })}
                />{" "}
                <br />
                {errors.name && (
                    <span className="text-error">This field is required</span>
                )}
                <input
                    required
                    id="last-name"
                    className="form-control"
                    placeholder="Enter your last name"
                    {...register("last-name", { required: true })}
                />
                <br />
                {errors.email && (
                    <span className="text-error">This field is required</span>
                )}
                <input
                    required
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                    {...register("last-name", { required: true })}
                />
                <br />
                {errors.email && (
                    <span className="text-error">This field is required</span>
                )}
                <textarea
                    required
                    className="form-control"
                    id='text-area'
                    type="text-area"
                    placeholder="Please write somethings."
                    {...register("text-area", { required: true })}
                />
                <br />
                {errors.message && (
                    <span className="text-error">This field is required</span>
                )}{" "}
                <br />
                <input className="btn btn-success" value="Send CSV file" type="submit" />
                {/* <p style={{ color: email ? "green" : "red", fontWeight: "bold" }}>
                {email && "Successfully send your valuable message.."}
            </p>
            <p style={{ color: email === false && "red", fontWeight: "bold" }}>
                {email === false && "Please Try again.."}
            </p> */}
            </form>
        </div>

    )
}
