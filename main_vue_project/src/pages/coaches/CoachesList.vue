<template>
  <section>
    <coaches-filter @change-filter="setFilters"></coaches-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button v-if="!isCoach" link to="/register">Register a coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <coach-item
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :id="coach.id"
            :areas="coach.areas"
            :first-name="coach.firstName"
            :last-name="coach.lastName"
            :rate="coach.hourlyRate">
        </coach-item>
      </ul>
      <h3 v-else>No coaches found.</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem'
import CoachesFilter from '../../components/coaches/CoachesFilter'
export default {
  data(){
    return{
      activeFilters:{
        frontend:true,
        backend:true,
        career:true,
      }
    }
  },
  components: {
    CoachItem,CoachesFilter
  },
  name: "CoachesList",
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter(coach => {
        if(this.activeFilters.frontend && coach.areas.includes('frontend')){
          return true;
        }
        if(this.activeFilters.backend && coach.areas.includes('backend')){
          return true;
        }
        return !!(this.activeFilters.career && coach.areas.includes('career'));
      })
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
    isCoach(){
      return this.$store.getters['coaches/isCoach']
    },
  },
  methods:{
    setFilters(updatedFilters){
      this.activeFilters = updatedFilters
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>