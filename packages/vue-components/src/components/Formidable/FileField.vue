<template lang="pug">
md-field(:class="feedbackClass")
    label(v-if="value.label") {{value.label}}
    md-file(type="file" :class="feedbackClass" :accept="acceptedFileTypes")
    FeedbackText(:validationErrors="validationErrors" :valueIsSubmittable="isSubmittable")
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { ValidationError } from 'class-validator';

import {
    FormidableFile,
    FileType,
    FormidableField
} from '@formidableforms/core';

import FeedbackText from './components/FeedbackText.vue';
import { FormidableFieldComponent } from './FormidableFieldComponent.abstract';
import { MdField, MdFile } from 'vue-material/dist/components';

@Component({
    components: {
        FeedbackText,
        MdField,
        MdFile
    }
})
export default class FileField extends FormidableFieldComponent<
    FormidableFile
> {
    get acceptedFileTypes() {
        switch (this.value.fileType) {
            case FileType.Audio:
                return 'audio/*';
            case FileType.Image:
                return 'image/*';
            case FileType.Video:
                return 'video/*';
            case FileType.PDF:
                return '.pdf';
            default:
                return null;
        }
    }
}
</script>
