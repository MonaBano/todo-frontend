import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addTodo } from "../api/Todo";

const validationSchema = Yup.object().shape({
  task: Yup.string()
   .min(3, 'Todo must be at least 3 characters')
   .required('Required'),
 });

const AddTodo = () => {
  return (
    <div>
      <Formik
        initialValues={{
          task: ""
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
                console.log("Values", values)
                addTodo(values)
        }}
      
      >
        <Form>
          <label htmlFor="task" className="block text-md font-bold mb-2">
          Todo:</label>
          <Field id="task" name="task" placeholder="Enter Task" />
          <ErrorMessage className='' name="task" />

          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddTodo;
