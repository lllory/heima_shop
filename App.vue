<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
	@import url("./static/fonts/iconfont.css");
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */
.gomeImgLoad{
	width: 750rpx !important;
	height: auto;
}
.uni-goods-nav{
	position: fixed;
	bottom: 0;
	right: 0;
	left: 0;
}
</style>
