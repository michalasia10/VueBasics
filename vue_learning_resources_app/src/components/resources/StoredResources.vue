<template>
    <ul>
        <ResourcesItem
                v-for="res in resources"
                :key="res.id"
                :id="res.id"
                :title="res.title"
                :link="res.link"
                :description="res.description"
        />
    </ul>
</template>

<script>
    import ResourcesItem from "./ResourcesItem";
    export default {
        name: "StoredResources",
        components : {ResourcesItem},
        inject : ['resources']
    }
</script>

<style scoped>
ul{
    list-style: none;
    margin: 0;
    padding: 0;
    margin: auto;
    max-width: 40rem;
}
</style>