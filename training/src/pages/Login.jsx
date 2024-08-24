import React from 'react';
import {Formik,Form,Field,ErrorMessage} from "formik";
import * as Yup from "yup";
// import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import API from '../services/API';
const Login = () => {
  
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    userName:Yup.string().required("Username is required"),
    email:Yup.string().email("invalid email").required("Email is required"),
    password:Yup.string().min(6,"password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = async(values, { setSubmitting }) => {
    try {
      const res = await API.post(`auth/login`,values);
      console.log(res);
      if(res?.status === 201){
        localStorage.setItem("token",res.data.token);
        localStorage.setItem("user_id",res.data.userId);
        toast.success(res.data.message,{
           position:"top-center",
        });
    navigate("/Home");
    setSubmitting(false);
      }
     else{
      toast.error(res?.data?.message,{
        position:"top-center",
       });
       setSubmitting(false);
     }
    } catch (error) {
      console.log(error);
      toast.error(error.res.data.message,{
       position:"top-center",
      });
      setSubmitting(false);
    }
      
      };

 
  return (
    <>
    <div className="w-full h-screen flex items-center justify-center bg-indigo-300">
<div className="min-h-fit w-2/5 p-4 border-2 border-black justify-center items-center rounded-3xl bg-white">
  <Formik 
  initialValues={{userName:'',email:'',password:''}}
  validationSchema={validationSchema }
  onSubmit={handleSubmit}
  >
    {({
      values,
      errors,
      touched,
      isSubmitting,
    }) =>(
      <Form>
         <h1 className='justify-center items-center ml-16'>Login here</h1>

      <div className="justify-center items-center pl-16 mt-10"> 
      <Field type="text"className="w-4/5 h-14 border-1 rounded-xl pl-4 text-base outline-none mb-4 border-black"  name="userName" placeholder="Enter your Name"/>
      <ErrorMessage name='userName'className="items-center justify-center text-red-600" component="p"/>
        <Field type="email"className="w-4/5 h-14 border-1 rounded-xl pl-4 text-base outline-none mb-4 border-black" name="email" placeholder="Enter your Email..."/>
      <ErrorMessage name='email'className="items-center justify-center text-red-600" component="p"/>
       <Field type="password"className="w-4/5 h-14 border-1 rounded-xl pl-4 text-base outline-none mb-4 border-black"  name="password" placeholder="Enter your password"/>
       <ErrorMessage name='password' className="items-center justify-center text-red-600" component="p"/>
     <button type="submit" className="w-4/5 h-14 border-1 rounded-xl pl-4 text-3xl text-white bg-indigo-300 outline-none mb-4 border-black" >Login</button></div>
      </Form>
    )}
  </Formik>
</div>
    </div>
    </>
  )
}

export default Login