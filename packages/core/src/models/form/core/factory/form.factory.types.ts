import { IFormidableFormProps } from '../form.props.interface';
import { FormType } from '../form.type.enum';
/**
 * A Form Factory Object must at least have the discriminator property: `formType`
 */
export type FormFactoryObject = Partial<IFormidableFormProps> & {
    formType: FormType;
};
