import { IFormidableDateProps } from '../../field/date/date.props.interface';
import { FormidableDate } from '../../field/date/FormidableDate';
import { IFormidableEmailProps } from '../../field/email/email.props.interface';
import { FormidableEmail } from '../../field/email/FormidableEmail';
import { IFormidableFileProps } from '../../field/file/file.props.interface';
import { FormidableFile } from '../../field/file/FormidableFile';
import { FormidableLink } from '../../field/link/FormidableLink';
import { IFormidableLinkProps } from '../../field/link/link.props.interface';
import { FormidableNumber } from '../../field/number/FormidableNumber';
import { IFormidableNumberProps } from '../../field/number/number.props.interface';
import { FormidableNumberRange } from '../../field/numberRange/FormidableNumberRange';
import { IFormidableNumberRangeProps } from '../../field/numberRange/numberRange.props.interface';
import { FormidablePassword } from '../../field/password/FormidablePassword';
import { IFormidablePasswordProps } from '../../field/password/password.props.interface';
import { FormidableText } from '../../field/text/FormidableText';
import { IFormidableTextProps } from '../../field/text/text.props.interface';
import { FormidableTextarea } from '../../field/textarea/FormidableTextarea';
import { IFormidableTextareaProps } from '../../field/textarea/textarea.props.interface';
import { FormidableBasicForm } from '../Basic/FormidableBasicForm';
import { FormidableWizardForm } from '../Wizard/FormidableWizardForm';

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
