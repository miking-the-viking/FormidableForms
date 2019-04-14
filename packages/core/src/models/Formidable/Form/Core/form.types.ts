import { IFormidableDateProps } from '@/models/Formidable/Field/Date/date.props.interface';
import { FormidableDate } from '@/models/Formidable/Field/Date/FormidableDate';
import { IFormidableEmailProps } from '@/models/Formidable/Field/Email/email.props.interface';
import { FormidableEmail } from '@/models/Formidable/Field/Email/FormidableEmail';
import { IFormidableFileProps } from '@/models/Formidable/Field/File/file.props.interface';
import { FormidableFile } from '@/models/Formidable/Field/File/FormidableFile';
import { FormidableLink } from '@/models/Formidable/Field/Link/FormidableLink';
import { IFormidableLinkProps } from '@/models/Formidable/Field/Link/link.props.interface';
import { FormidableNumber } from '@/models/Formidable/Field/Number/FormidableNumber';
import { IFormidableNumberProps } from '@/models/Formidable/Field/Number/number.props.interface';
import { FormidableNumberRange } from '@/models/Formidable/Field/NumberRange/FormidableNumberRange';
import { IFormidableNumberRangeProps } from '@/models/Formidable/Field/NumberRange/numberRange.props.interface';
import { FormidablePassword } from '@/models/Formidable/Field/Password/FormidablePassword';
import { IFormidablePasswordProps } from '@/models/Formidable/Field/Password/password.props.interface';
import { FormidableText } from '@/models/Formidable/Field/Text/FormidableText';
import { IFormidableTextProps } from '@/models/Formidable/Field/Text/text.props.interface';
import { FormidableTextarea } from '@/models/Formidable/Field/Textarea/FormidableTextarea';
import { IFormidableTextareaProps } from '@/models/Formidable/Field/Textarea/textarea.props.interface';
import { FormidableBasicForm } from '@/models/Formidable/Form/Basic/FormidableBasicForm';
import { FormidableWizardForm } from '@/models/Formidable/Form/Wizard/FormidableWizardForm';

export type FormTypes = FormidableBasicForm | FormidableWizardForm;

export type FieldConfigType =
    | IFormidableNumberProps
    | IFormidableTextProps
    | IFormidableTextareaProps
    | IFormidableLinkProps
    | IFormidableEmailProps
    | IFormidablePasswordProps
    | IFormidableNumberRangeProps
    | IFormidableDateProps
    | IFormidableFileProps;

export type FieldCtorType =
    | FormidableNumber
    | FormidableText
    | FormidableTextarea
    | FormidableLink
    | FormidableEmail
    | FormidablePassword
    | FormidableNumberRange
    | FormidableDate
    | FormidableFile;
