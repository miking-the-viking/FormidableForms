import { IFormidableDateProps } from '@/models/field/date/date.props.interface';
import { FormidableDate } from '@/models/field/date/FormidableDate';
import { IFormidableEmailProps } from '@/models/field/email/email.props.interface';
import { FormidableEmail } from '@/models/field/email/FormidableEmail';
import { IFormidableFileProps } from '@/models/field/file/file.props.interface';
import { FormidableFile } from '@/models/field/file/FormidableFile';
import { FormidableLink } from '@/models/field/link/FormidableLink';
import { IFormidableLinkProps } from '@/models/field/link/link.props.interface';
import { FormidableNumber } from '@/models/field/number/FormidableNumber';
import { IFormidableNumberProps } from '@/models/field/number/number.props.interface';
import { FormidableNumberRange } from '@/models/field/numberRange/FormidableNumberRange';
import { IFormidableNumberRangeProps } from '@/models/field/numberRange/numberRange.props.interface';
import { FormidablePassword } from '@/models/field/password/FormidablePassword';
import { IFormidablePasswordProps } from '@/models/field/password/password.props.interface';
import { FormidableText } from '@/models/field/text/FormidableText';
import { IFormidableTextProps } from '@/models/field/text/text.props.interface';
import { FormidableTextarea } from '@/models/field/textarea/FormidableTextarea';
import { IFormidableTextareaProps } from '@/models/field/textarea/textarea.props.interface';
import { FormidableBasicForm } from '@/models/form/Basic/FormidableBasicForm';
import { FormidableWizardForm } from '@/models/form/Wizard/FormidableWizardForm';

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
