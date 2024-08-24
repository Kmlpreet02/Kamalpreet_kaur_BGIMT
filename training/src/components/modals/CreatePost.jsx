import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Formik,Form,Field,ErrorMessage} from "formik";
import * as Yup from "yup";
import { toast } from 'react-toastify';
import API from '../../services/API';
const CreatePost = ({show,handleClose,setItems}) => {
    const handleSubmit = async(values,{setSubmitting,resetForm}) => {
        const formData = new FormData();
        formData.append("title",values.title);
        formData.append("description",values.description);
        formData.append("image",values.image);
        try {
          const res = await API.post("posts",formData,{
            headers:{
              "Content-Type": "multipart/form-data",
            },
          });
          console.log(res);
          if(res.status === 201){
            toast.success("Post Created Successfully",{
              position:"top-center",
            });
            setItems((prevItems) => [...prevItems,res?.data]);
            resetForm(); 
          }
          resetForm();
        } catch (error) {
          console.error("Error uploading file:",error);
        }
        finally{
          setSubmitting(false);
        }
        
    };
  return (
   <>
   

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Formik 
         initialValues={{title:"",description:"",image:""}}
         validationSchema ={Yup.object({
           title:Yup.string().required("Title is required"),
           description:Yup.string().required("Description is required"),
           image:Yup.string().required("Image is required"),
         })}
         onSubmit={handleSubmit}>
{({ setFieldValue,values,erroes,touched,isSubmitting}) => (
    <Form>
        <div> <Field type="text"  name="title" placeholder="Enter your Title" className="p-4"/>
        <ErrorMessage name='title' component="div"/></div>
        <div> <Field type="text" name="description" placeholder="Enter Description"  className="p-4"/>
        <ErrorMessage name='description' component="div"/></div>
         <div><input type="file" name="image" placeholder="Enter Image Name" onChange={(event) => {
          setFieldValue("image",event.currentTarget.files[0]);
         }}
          className="p-4"/>
         <ErrorMessage name='image' component="div"/></div>
        <div> <Button type='submit'  className="p-4" variant="primary" disabled={isSubmitting}>Create</Button></div>
    </Form>
)}
         </Formik>
        </Modal.Body>
        {/* <Modal.Footer> */}
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          {/* <Button type='submit' variant="primary">Create</Button> */}
        {/* </Modal.Footer> */}
      </Modal> 
   </>
  )
}

export default CreatePost