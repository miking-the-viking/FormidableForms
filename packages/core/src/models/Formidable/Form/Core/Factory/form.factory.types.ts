import { IFormidableFormProps } from '@/models/Formidable/Form/Core/form.props.interface';
import { FormType } from '@/models/Formidable/Form/Core/form.type.enum';
/**
 * A Form Factory Object must at least have the discriminator property: `formType`
 */
export type FormFactoryObject = Partial<IFormidableFormProps> & {
    formType: FormType;
};
