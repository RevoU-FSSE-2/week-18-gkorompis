
import * as Yup from 'yup';
import { Formik, Form, FormikValues, Field, ErrorMessage } from 'formik';
import { Input, Form as AntdForm } from 'antd';

import { CustomizedFormProps } from '../../utils/types';

const FormItem = AntdForm.Item;

interface Props {
    fields: any[],
    customFormStyles: {
        label: any,
        button: any
    },
    formName: string
}

const TemplateForm = ({fields, customFormStyles, formName }:Props) =>{
    return(
        <Form>
            {
                fields.map((x, key)=>{
                    return(
                        <div key={key}>
                            <FormItem className="app-form-antd-form-item" label={<label style={customFormStyles.label}>{x.label}</label>} labelCol={{ span: 24 }} wrapperCol={{ span: 24 } }>
                            <Field as={Input} name={x.name} placeholder={x.label} style={{margin: "0px"}} type={x.type}/>
                            <div className="form-field-error">
                                <ErrorMessage name={x.name}>
                                     {(msg) => (
                                        <span style={{color: "#C7BCA1"}}>{msg}</span>
                                    )}
                                </ErrorMessage>
                            </div>
                            </FormItem>  
                        </div>                                                         
                    )
                })
            }
            <div className="login-button page-button">
                <button style={customFormStyles.button} type="submit">{formName} </button>
            </div>
        </Form>
    )
};
const CustomizedForm =<T extends FormikValues > ({
    fields,
    initialValues,
    onSubmitFormik,
    validationSchema,
    customFormStyles,
    formName
}:CustomizedFormProps<T>) =>{

    // const [isLoading, setIsLoading] = useState("");
    const yupValidationSchema = Yup.object(validationSchema);
    return (
        <>
            <div className="form">
                <Formik 
                    initialValues={initialValues}
                    onSubmit={onSubmitFormik}
                    validationSchema={yupValidationSchema}
                    onKeyDown={(e:any) => {
                        if (e.key === 'Enter') {
                        return onSubmitFormik;
                        }
                    }}>
                    {() => {return<TemplateForm fields={fields} customFormStyles={customFormStyles} formName={formName}/>}}
                </Formik>
            </div>
        </>
    )
}
export default CustomizedForm;