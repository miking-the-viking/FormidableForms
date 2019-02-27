import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';
import { FieldType } from '@/models/Formidable/Field/field.abstract';

/**
 * Basic form config for intial sample
 */
const simpleRegistrationFormConfig: FormidableBasicForm = {
    fields: [
        {
            fieldType: FieldType.Email,
            value: null,
            label: 'Email',
            required: true,
            name: 'email'
        },
        {
            fieldType: FieldType.Password,
            value: null,
            label: 'Password',
            required: true,
            name: 'password',
            minLength: 5
        },
        {
            fieldType: FieldType.Text,
            value: null,
            label: 'Username',
            required: true,
            name: 'username',
            minLength: 5
        }
    ]
};

export default simpleRegistrationFormConfig;
