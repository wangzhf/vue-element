<template>
    <div>
        <img src="../assets/logo.png" alt="">
        <h2>Vue Starter</h2>
        <div>
            <el-button @click="welcome">Start</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloVue',
    methods: {
        welcome () {
            // this.$notify({
            //     title: 'It Works!',
            //     type: 'success',
            //     message: 'Yes, you got an excellent choice!',
            //     duration: 5000,
            //     position: 'top-center'
            // })
            this.$message({
                message: 'OK, you got an excellent choice!',
                type: 'success'
            })
        }
    }
}
</script>
