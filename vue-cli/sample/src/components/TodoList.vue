<template>
    <ul>
        <li v-for="(todo, key) in this.todos" :key="key">
            <p>{{ todo }}</p>
        </li>
    </ul>
</template>


<script>
export default {
    props: ["todos"],
}
</script>

<style scoped>
    ul {
        width: 80%;
        margin: 0 auto;
        margin-top: 50px;
        background: #fff;
        border: 10px;
        padding: 0 10px;
        border-radius: 10px;
    }

    li {
        list-style-type: none;
        font-size: 1.4rem;
        line-height: 1.5;
        text-align: left;
        padding: 0 10px;
        border-bottom: solid 1px #bbb;
        overflow-wrap: break-word;
    }
    li:last-child {
        border-bottom: none;
    }
</style>