import { FieldType } from '@formidableforms/core/lib/models/field/core/field.types.enum';
import { FormType } from '@formidableforms/core/lib/models/form/core';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import FormidableForm from '../components/FormidableForm.vue';

const formStories = storiesOf('FormidableForm', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
formStories.addDecorator(withKnobs);

formStories.add('with text', () => ({
    components: { FormidableForm },
    data() {
        return {
            form: {
                type: FormType.Basic,
                fields: [
                    {
                        fieldType: FieldType.Text,
                        value: '',
                        label: 'Text Field'
                        // disabled: boolean('disabled', false),
                        // hidden: boolean('hidden', false),
                        // required: boolean('required', false)
                    }
                ]
            }
        };
    },
    template: '<FormidableForm :form="form" />'
}));
