<template>
	<view class="container">
		<view class="swiper-home">
				<swiper indicator-dots  circular>
					<swiper-item v-for="item in imgList" :key='item.id'>
							<image :src="item.img" class="scroll_image"></image>
					</swiper-item>
				</swiper>
		</view>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav-item"  v-for="(item,index) in navList" :key='item.id' @click="navItemClick(item.url)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		
		<!-- 推荐商品 -->
		<view class="shop">
			<view class="shop_title">
				推荐商品
			</view>
			<goods :shopList='shopList' :end="end" @goShopDetail='goShopDetail'>
			</goods>
		</view>
	</view>
</template>

<script>
	import Goods from '../../components/goods-list/goods-list.vue'; 
	// import UniLoadMore from '../../components/uni-load-more/uni-load-more.vue'
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				imgList: [],//轮播图列表
				current: 0,
				shopList:[],//商品列表
				navList:[
					{id:1, title:"黑马超市",icon:'iconfont icon-caidan',url:"/pages/goods/goods"},
					{id:2,title:"联系我们",icon:'iconfont icon-anquan',url:"/pages/concat/concat"},
					{id:3,title:"社区图片",icon:'iconfont icon-bianji',url:"/pages/pics/pics"},
					{id:4,title:"学习视频",icon:'iconfont icon-buganxingqu',url:"/pages/videos/videos"},
				],
				pageIndex:1,
				end:'loading'
			}
		},
		onLoad() {
			this.getLunbo()
			this.getShopList()
		},
		onShow() {
			// this.getLunbo()
		},
		components:{
			Goods,
			// UniLoadMore
		},
		mounted() {
			// this.getLunbo()
		},
		onReachBottom() {
			if( this.shopList.length < this.pageIndex *10) return this.end = 'endLoading' //上拉数据全部请求完成
				setTimeout(()=>{
					this.pageIndex ++
					this.getShopList()
				},300)
		},
		methods: {
			goShopDetail(id){
				uni.navigateTo({
					url:'../good-detail/good-detail?id='+id
				})
			},
			async getLunbo() {
				let vm = this
				const res = await this.$http({
					url: 'api/getlunbo'
				})
				this.imgList = res.data.message
			},
			// // 获取商品列表
			async getShopList(){
					// uni.showNavigationBarLoading()
				let res = await this.$http({
					url:'api/getgoods?pageindex='+this.pageIndex
				})
				this.shopList =[...this.shopList,...res.data.message] 
			},
			// 导航点击处理
			navItemClick(path){
				console.log(path)
				uni.navigateTo({
					url:path
				})
			},
		}
	}
</script>

<style lang="scss">
	.container {
		// 轮播图
		swiper{
			width: 750rpx;
			height: 380rpx;
			.scroll_image{
				height: 100%;
				width: 100%;
			}
		}
		//导航栏
		.nav{
			width: 750rpx;
			display: flex;
			line-height: 100rpx;
			// border-bottom: 1px solid $uni-border-color;
			.nav-item{
				flex: 1;
				margin: auto;
				line-height: 100rpx;
				text-align: center;
				.iconfont{
					font-size: 60rpx;
					color: white;
					width: 120rpx;
					height: 120rpx;
					background-color: $shop-color;
					border-radius: 100%;
					line-height: 120rpx;
					text-align: center;
					margin: 10rpx auto;
				}
				text{
					font-size: 30rpx;
				}
			}
		}
		// // 推荐商品区
		.shop{
			background-color: #eee;
			overflow: hidden;
			.shop_title{
				text-align: center;
				height: 50px;
				line-height: 50px;
				color: $shop-color;
				letter-spacing: 20px;
				background-color: white;
				margin: 5px 0;
				
			}
		}
	}
</style>
