<template lang="pug">
md-field(:class="feedbackClass")
    label(v-if="value.label") {{value.label}}
    md-file(type="file" :class="feedbackClass" :accept="acceptedFileTypes")
    FeedbackText(:validationErrors="validationErrors" :valueIsSubmittable="isSubmittable")
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { FormidableField } from '@/models/Formidable/Field/field.abstract';
import { ValidationError } from 'class-validator';
import {
    FormidableFile,
    FileType
} from '@/models/Formidable/Field/FormidableFile';
import FeedbackText from '@/components/Formidable/components/FeedbackText.vue';
import { FormidableFieldComponent } from '@/components/Formidable/FormidableFieldComponent.abstract';

@Component({
    components: {
        FeedbackText
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
