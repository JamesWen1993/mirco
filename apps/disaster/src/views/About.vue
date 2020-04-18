<template>
    <div class="about">
        <h1>This is an about page cesium!</h1>
        <div id="cesiumContainer"></div>
        <canvas id="glcanvas" width="1" height="1"/>
    </div>
</template>
<script>
    let viewer
    export default {
        name: 'about',
        methods: {  // 在某个应用里调用.next方法更新数据，并传播给其他应用
            initMap() {
                /* eslint-disable */
                let scripts = document.getElementsByTagName('script');
                console.log(scripts)

                let url = 'http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali'
                viewer = new Cesium.Viewer('cesiumContainer', {
                    imageryProvider: new Cesium.UrlTemplateImageryProvider({url: url})
                })
                Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5M2NjNGE0OS02MmYxLTQzMDctODEwMC01NGQ2Zjk4MjM2M2YiLCJpZCI6MTA5NzcsInNjb3BlcyI6WyJhc2wiLCJhc3IiLCJhc3ciLCJnYyJdLCJpYXQiOjE1NTc4MjYzNzl9.R8NrPN5kXuPOYXiHDHdN1EhTo7_TjtQ7Cm9ZPfr9Yow'
                /* eslint-disable */
            }
        },
        mounted() {
            this.initMap()
        },
        beforeDestroy() {

            if (viewer) {
                viewer.dataSources.removeAll();
                viewer.entities.removeAll();
                viewer.scene.primitives.removeAll();
                viewer = null;
            }
        }
    }
</script>
<style scoped>
    .about {
        text-align: center;
    }
</style>
