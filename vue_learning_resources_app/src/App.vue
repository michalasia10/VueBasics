<template>
    <TheHeader title="RememberMe"/>
    <StoredResources :resources="storedResrources"/>
</template>

<script>
    import StoredResources from "./components/resources/StoredResources";
    import TheHeader from "./components/layouts/TheHeader";

    export default {
        name: "App",
        components: {
            StoredResources,
            TheHeader
        },
        data() {
            return {
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
        }
    }
</script>

<style>
    * {
        box-sizing: border-box;

    }

    html {
        font-family: "Roboto Light", sans-serif;
    }

    body {
        margin: 0;
    }
</style>