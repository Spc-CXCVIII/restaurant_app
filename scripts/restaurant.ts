import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
  name: 'Restaurant',
  data() {
    return {
      keyword: '',
      restaurant_list: [] as any,
    };
  },
  methods: {
    async GetRestaurant() {
      const keyword = this.keyword;
      await axios.post("http://127.0.0.1:8000/api/restaurant/search", {
        keyword: keyword
      })
      .then((response) => {
        this.restaurant_list = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    },
  }
});