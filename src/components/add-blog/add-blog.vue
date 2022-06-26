<template>
  <div class="container">
    <b-button v-b-modal.modal-1 class="mb-3">Add Blog</b-button>

    <b-modal v-model="showModal" id="modal-1" title="BootstrapVue">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Your title:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="form.title"
            type="text"
            placeholder="Enter title"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Your subtitle:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.subtitle"
            type="text"
            placeholder="Enter subtitle"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Description:"
          label-for="input-3"
        >
          <b-form-textarea
            id="input-3"
            v-model="form.description"
            placeholder="Enter description"
            required
          >
          </b-form-textarea>
        </b-form-group>
        <b-form-group id="input-group-4" label="Image:" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="form.photo"
            placeholder="Enter photo URL"
            required
          >
          </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </b-modal>
  </div>
</template>

<script>
import createDoc from "@/helpers/firebase/createDoc";

export default {
  data() {
    return {
      form: {
        title: "",
        subtitle: "",
        description: "",
        photo: "",
        categoryId: this.$route.params.categoryId,
      },
      show: true,
      showModal: false,
    };
  },
  watch: {
    $route() {
      this.categoryId = this.$route.params.categoryId;
    },
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      createDoc("blogs", this.form);
      this.clearForm();
      this.showModal = false;
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values

      this.clearForm();

      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    clearForm() {
      for (let key in this.form) {
        this.form[key] = "";
      }
    },
  },
};
</script>