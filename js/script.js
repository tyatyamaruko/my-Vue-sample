// import TitleVue from './components/TitleVue';

let TitleVue = {
  props: ["title"],
  template: `<h3>{{ removeSpace() }}</h3>`,
  methods: {
    removeSpace() {
      let arr = this.title.split(" ");
      return arr[0] + arr[1] + arr[2];
    },
  },
};

let FormVue = {
  props: ["placeholderText"],
  template: `<div>
  <span :class={ isDanger: hasError }>{{ validate() }}</span>
    <input :placeholder="placeholderText" v-model="text" type="text"/>
    </div>`,
  data: function () {
    return {
      isDanger: false,
      errorText: "",
      text: "",
    };
  },
  methods: {
    validate() {
      if (this.text == "") {
        isDanger = true;
      } else {
        isDanger = false;
      }
    },
  },
};

new Vue({
  el: "#app",
  components: {
    "title-view": TitleVue,
    "form-view": FormVue,
  },
  data: {
    isShow: true,
  },
  methods: {
    showToggle() {
      this.isShow = this.isShow ? false : true;
    },
  },
});

const URL_API = "https://api.zipaddress.net/";

const vm = new Vue({
    el: '#demo',
    data: {
        inputZip: "",
        defaultZip: "1000000",
        results: "",
    },
    computed: {
        computedZip: function () {
            return !isNaN(this.inputZip) && this.inputZip.length == 7 ? this.inputZip : this.defaultZip;
        }
    },
    methods: {
        getAddress(z) {
            let params = {params: {zipcode: z}};
            axios.get(URL_API, params).then(res => {
                this.results = res.data.code == 200 ? res.data.data.fullAddress : res.data.message;
            });
        }
    }
})
