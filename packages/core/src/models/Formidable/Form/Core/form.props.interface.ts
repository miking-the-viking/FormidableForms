import { IFormidableFieldProps } from '@/models/Formidable/Field/Core/field.props.interface';

/**
 * Basic Props for a Formidable Form
 */
export interface IFormidableFormProps {
    fields: Array<IFormidableFieldProps<any>>;
}
