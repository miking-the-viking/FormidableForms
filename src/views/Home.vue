<template lang="pug">
.home.container-fluid
  h1.title Formidable Forms
  img(src="https://travis-ci.com/miking-the-viking/FormidableForms.svg?token=mm6yHByGgeorBxsvuzKv&branch=master")
  h2.subtitle The last solution you'll need for inputs or forms. Powered by TypeScript.

  .columns.is-desktop
    .column
      h2.heading.is-size-5 What it is, Soul Brother?

    .column
      p Formidable Forms is built using TypeScript and other open source libraries like 
        code class-validator
        | to provide a simply configured, consistent, plug'n'play solution to creating and using forms in a front end application framework like Vue.
      p In fact: Vue is the proof of concept implementation.

  hr

  .columns.is-desktop
    .column
      h2.heading.is-size-5 Forms, Formidable Forms.

      p Out of the box, Formidable Forms comes with several different form types that are easily extensible:

    .column
      .box
        dl
          dt Basic Form
          dd Basic Forms are as simple as they come: a single form with 1...N Fields 
          dd.is-size-7.has-text-right
            router-link(to="/docs/forms/basic") Read more about Formidable Basic Form
          dt Wizard Form
          dd Wizard Forms are a little more advanced as they are designed to have 1...N Steps each containing 1...N Fields.
          dd.is-size-7.has-text-right
            router-link(to="/docs/forms/wizard") Read more about Formidable Wizard Form

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>

</style>
