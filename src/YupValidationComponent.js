// import { useFormik, Formik , Field,Form, ErrorMessage } from "formik"
// import * as yup from 'yup';

// export default function YupValidationComponent(){

//     return(
//         <div className="container-fluid">
//             <h2>Register User</h2>
//             <Formik initialValues={
//                 {
//                     UserName:'',
//                     Email:'',
//                     Age:'',
//                     City:''
//                 } }
//                 validationSchema={
//                     yup.object({
//                         UserName: yup.string().min(4,'Name too Short').max(10,'Name too long').required(),
//                         Email: yup.string().required('Invalid Email'),
//                         Age: yup.number().required('Age Required'),
//                         City: yup.string()
//                     })
//                 }
//                 onSubmit={
//                     values=>{
//                     alert(JSON.stringify(values))
//                 }}
//                 >

//                 <Form>
//                     {
//                         <div>
//                             <dl>
//                             <dt>User Name</dt>
//                             <dd> <Field name="UserName" type="text"></Field></dd>
//                             <dd className="text-danger"><ErrorMessage name="UserName"></ErrorMessage></dd>

//                             <dt>Email</dt>
//                             <dd> <Field name="Email" type="text"></Field></dd>
//                             <dd className="text-danger"><ErrorMessage name="Email"></ErrorMessage></dd>

//                             <dt>Age</dt>
//                             <dd><Field name="Age" type="text"></Field></dd>
//                             <dd className="text-danger"><ErrorMessage name="Age"></ErrorMessage></dd>
                            
//                             <dt>City</dt>
//                             <dd><Field name="City" as="select">
//                                 <option>Delhi</option>
//                                 <option>HYD</option>
//                                 </Field></dd>
//                         </dl>
//                         <button>Register</button>
//                         </div>
//                     }
//                 </Form>
//             </Formik>
//         </div>
//     )
// }



//EX 2

import { useFormik, Formik , Field,Form, ErrorMessage } from "formik"
import * as yup from 'yup';

export default function YupValidationComponent(){

    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <Formik initialValues={
                {
                    UserName:'',
                    Email:'',
                    Age:'',
                    City:''
                } }
                validationSchema={
                    yup.object({
                        UserName: yup.string().min(4,'Name too Short').max(10,'Name too long').required(),
                        Email: yup.string().required('Invalid Email'),
                        Age: yup.number().required('Age Required'),
                        City: yup.string()
                    })
                }
                onSubmit={
                    values=>{
                    alert(JSON.stringify(values))
                }}
                >
                    {
                        props =>
                            
                <Form>
                {
                    <div>
                        <dl>
                        <dt>User Name</dt>
                        <dd> <Field name="UserName" type="text"></Field></dd>
                        <dd className="text-danger"><ErrorMessage name="UserName"></ErrorMessage></dd>

                        <dt>Email</dt>
                        <dd> <Field name="Email" type="text"></Field></dd>
                        <dd className="text-danger"><ErrorMessage name="Email"></ErrorMessage></dd>

                        <dt>Age</dt>
                        <dd><Field name="Age" type="text"></Field></dd>
                        <dd className="text-danger"><ErrorMessage name="Age"></ErrorMessage></dd>
                        
                        <dt>City</dt>
                        <dd><Field name="City" as="select">
                            <option>Delhi</option>
                            <option>HYD</option>
                            </Field></dd>
                    </dl>
                    <button disabled={(props.isValid)?false:true}>Register</button>
                    </div>
                }
            </Form>
                        
                    }

            </Formik>
        </div>
    )
}