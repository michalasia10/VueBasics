<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resources</base-button>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  name: "TheResources",
  components: {
    StoredResources,
    AddResource
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResrources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official vue docs',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Official Google',
          description: 'The official google ',
          link: 'https://google.com'
        }
      ]
    }
  },
  provide() {
    return {
      resources: this.storedResrources,
      addResource: this.addResource,
      deleteResources: this.removeResource,
    }
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat'
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat'
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url
      };
      this.storedResrources.unshift(newResource);
      this.selectedTab = 'stored-resources'
    },
    removeResource(resId) {
      const resIndex = this.storedResrources.findIndex(res => res.id === resId);
      this.storedResrources.splice(resIndex, 1)
    }
  }
}
</script>

<style scoped>

</style>