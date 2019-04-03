<template>
  <v-container>
  	<v-layout>
  		<v-flex xs4>
  			<Projects/>
  		</v-flex>

  		<v-flex xs8 pl-4>
  			<Tasks/>
  		</v-flex>
  	</v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';	
import Projects from '@/components/Projects.vue';
import Tasks from '@/components/Tasks.vue';
import router from '../router';

export default {
	components: {
		Projects,
		Tasks,
	},
	mounted() {
    	if (!this.isLoggedIn) {
      		return router.push('/login');
    	}
  	},
	computed: {
		...mapGetters('authentication', [
			'isLoggedIn'
		])
	}
};
</script>
