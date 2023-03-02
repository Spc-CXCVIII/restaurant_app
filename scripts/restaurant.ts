import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
  name: 'Restaurant',
  data() {
    return {
      keyword: '',
      restaurant_list: [] as any,
      showLoadingModal: false,
      showErrorModal: false,
    };
  },
  methods: {
    async GetRestaurant() {
      this.showLoadingModal = true; // show the loading modal
      const keyword = this.keyword;
      await axios.post("http://127.0.0.1:8000/api/restaurant/search", {
        keyword: keyword
      })
      .then((response) => {
        if( response.data.status === 'ok' )
        {
          this.restaurant_list = response.data;        
          this.$emit('data-loaded', this.restaurant_list);
          this.showLoadingModal = false;
        }

        else
        {
          this.showLoadingModal = false;
          this.$emit('data-loaded', response.data);
        }
      })
      .catch((error) => {
        console.log(error);
        this.showLoadingModal = false; // hide the loading modal
        this.showErrorModal = true; // show the error modal
      });
    },
  }
});