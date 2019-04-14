import { IFormidableFieldProps } from '@/models/field/core/field.props.interface';

/**
 * Basic Props for a Formidable Form
 */
export interface IFormidableFormProps {
    fields: Array<IFormidableFieldProps<any>>;
}
