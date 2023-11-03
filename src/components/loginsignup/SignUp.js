import React from 'react'
import { useForm } from 'react-hook-form'

function SignUp() {


    const { register, handleSubmit, formState: { errors } } = useForm();

  

    const onSubmit = (data) => {
        localStorage.setItem(data.email, JSON.stringify({ 
            name: data.name, password: data.password 
        }));
        console.log(JSON.parse(localStorage.getItem(data.email)));
      };


    return (
        <div className='container'>
            
            <p className="title">Registration Form</p>
 
            <form className="sign-up" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} />
                <input type="email" {...register("email", { required: true })} />
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
                <input type="password" {...register("password")} />
                <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
            </form>
        
        </div>
    )
}

export default SignUp