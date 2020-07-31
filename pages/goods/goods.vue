<template>
	<view>
		<goods :shopList='shopList' :end='end' @goShopDetail='goShopDetail'></goods>
	</view>
</template>

<script>
	import Goods from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				shopList:[],
				pageIndex:1,
				end:'loading'
				
			}
		},
		components:{
			Goods
		},
		mounted() {
			this.getShopList()
		},
		onReachBottom() {
			if( this.shopList.length < this.pageIndex *10) return this.end = 'endLoading' //上拉数据全部请求完成
				setTimeout(()=>{
					this.pageIndex ++
					this.getShopList()
				},500)
		},
		onPullDownRefresh() {
			console.log('下拉刷新')
			this.pageIndex = 1
			this.shopList = []
			this.end = 'hideLoading'
			setTimeout(()=>{
				this.getShopList(()=>{
					uni.stopPullDownRefresh()
				})
			},500)
			
		},
		methods: {
			// 跳转至商品详情
			goShopDetail(id){
				uni.navigateTo({
					url:'../good-detail/good-detail?id='+id
				})
			},
			// // 获取商品列表
			async getShopList(callback){
				let res = await this.$http({
					url:'api/getgoods?pageindex='+this.pageIndex
				})
				this.shopList =[...this.shopList,...res.data.message] 
				callback && callback()
				// uni.stopPullDownRefresh()
			},
		}
	}
</script>

<style>

</style>
