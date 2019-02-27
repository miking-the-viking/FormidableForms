import {
    FormidableForm,
    FormType
} from '@/models/Formidable/Form/form.abstract';
import Validator from '@/models/Validator';
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { FormidableBasicForm } from '@/models/Formidable/Form/FormidableBasicForm';
import { FormidableWizardForm } from '@/models/Formidable/Form/FormidableWizardForm';
import { ValidationError } from 'class-validator/validation/ValidationError';
import { FieldType } from '@/models/Formidable/Field/field.abstract';
import { isBasicForm, isWizardForm } from './Utils';

export type FormTypes = FormidableBasicForm | FormidableWizardForm;

export enum FormState {
    Error = 'error',
    Disabled = 'disabled',
    Focused = 'focused',
    Loading = 'loading',
    Valid = 'valid',
    Submitted = 'submitted'
}

export const FORM_STATE_CLASSES = {
    [FormState.Error]: 'is-danger',
    [FormState.Valid]: 'is-success'
};

export const FORM_CONSTRUCTORS = {
    [FormType.Basic]: {
        ctor: FormidableBasicForm
    },
    [FormType.Wizard]: {
        ctor: FormidableWizardForm
    }
};

/**
 * FormMixin provides core FormidableForm functionalities to a FormidableForm Vue component such as
 * Validation and state classes
 */
@Component
export default class FormMixin extends Vue {
    /**
     * Form Validator
     */
    protected validator!: Validator<FormTypes>;

    protected readonly FieldType = FieldType;
    protected validationErrors: ValidationError[] = [];
    protected hasAllNecessaryData: boolean = false;

    @Prop({
        required: true
    })
    protected form!: FormidableBasicForm | FormidableWizardForm;

    /**
     * boolean value to indicate if the form should be validated on create, or only upon change/user input
     */
    @Prop({ default: false })
    protected immediate!: boolean;

    constructor(...args: any[]) {
        super(args);

        const ctor = this.formCtor();
        // tslint:disable-next-line:no-console
        console.log('initializing validator with: ', ctor, this.form);
        this.validator = new Validator<FormTypes>(ctor, this.form);
    }

    /**
     * Convenience method to quickly retrieve the valid boolean from the Form's Validator
     */
    get isValid() {
        return this.validator.isValid;
    }

    /**
     * Computed Vue class object based on the form state and restricted to a set of enums
     */
    get formClasses() {
        return {
            'is-danger': !this.isValid,
            'is-success': this.isValid && this.hasAllNecessaryData
        };
    }

    public formCtor() {
        const mappedCtor = FORM_CONSTRUCTORS[this.form.formType];
        if (mappedCtor) {
            return mappedCtor.ctor;
        }
        throw new Error(`Unknown form type: ${this.form!.formType}`);
    }

    @Watch('form', {
        deep: true
    })
    protected async validateForm() {
        // tslint:disable-next-line:no-console
        console.log('form updated, validating', JSON.stringify(this.form));
        this.validator.setForm(this.form);
        this.validator.validate();
    }

    protected getFieldErrors(index: number): ValidationError[] | undefined {
        if (!this.validationErrors || this.validationErrors.length === 0) {
            return;
        }
        const fieldErr = this.validationErrors.find(
            (valErr) => valErr.property === 'fields'
        );
        if (!fieldErr) {
            return;
        }
        const indexErr = fieldErr.children.find(
            (valErr) => parseInt(valErr.property, 10) === index
        );
        return indexErr ? indexErr.children : undefined;
    }
}
