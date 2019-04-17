import { IFormidableFieldProps } from '../../field/core/field.props.interface';

/**
 * Basic Props for a Formidable Form
 */
export interface IFormidableFormProps {
    fields: Array<IFormidableFieldProps<any>>;
}
