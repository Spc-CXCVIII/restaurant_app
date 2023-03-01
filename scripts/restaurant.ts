import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
  name: 'Restaurant',
  data() {
    return {
      keyword: '',
      restaurant_list: {} as { [key: string]: any },
    };
  },
  methods: {
    search() {
      // Access the keyword data property here
      const keyword = this.keyword;

      // Call your API or perform other logic here
      console.log(`Search keyword: ${keyword}`);
    },

    async GetRestaurant() {
      const keyword = this.keyword;
      await axios.post("http://127.0.0.1:8000/api/restaurant/search", {
        keyword: keyword
      })
      .then((response) => {
        this.restaurant_list = response.data.results;
        console.log(this.restaurant_list.results);
      })
      .catch((error) => {
        console.log(error);
      });
    },
  }
});