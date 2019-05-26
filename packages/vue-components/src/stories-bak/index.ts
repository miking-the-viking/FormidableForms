import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import HelloWorld from '../components/HelloWorld.vue';
// const HelloWorld = require('../components/HelloWorld.vue').default;

storiesOf('HelloWorld', module).add('with text', () => ({
    components: { HelloWorld },
    data() {
        return { msg: 'test msg' };
    },
    template: `<div class="Hello-World"><p>plain text</p><HelloWorld :msg="msg"/></div>`
}));
// .add('as a component', () => ({
//     components: { HelloWorld },
//     template: '<my-button :rounded="true">rounded</my-button>'
// }));
