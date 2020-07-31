<template>
	<view class="shop">
		<view class="shop_list">
			<view class="list_box" v-for="item in shopList" :key='item.id' @click="goShopDetail(item.id)">
				<image :src="item.img_url" mode=""></image>
				<view class="shop_price">
					<text>￥{{item.sell_price}}</text><text>{{item.market_price}}</text>
				</view>
				<view class="shop_detail">
					{{item.title}}
				</view>
			</view>
		</view>
		<view class="" v-show="Loading">
			<uni-load-more  :iconSize='Number(24)'  :status="status"></uni-load-more>
		</view>
	
	</view>
</template>

<script>
	import UniLoadMore from '../../components/uni-load-more/uni-load-more.vue' 
	export default {
		props:{
			shopList:{
				type:Array,
				default:[]
			},
			end:{
				type:String,
				default:''
			}
			
		},
		watch:{
			end(newval,oldval){
				console.log(newval,oldval,'ccccc')
				if(newval == 'loading'){
					// this.Loading = false
					this.status = 'loading'
				}else if(newval == 'endLoading'){
					this.status = 'noMore'
				}else if(newval == 'hideLoading'){
					this.Loading = false
					setTimeout(()=>{
					// 	console.log(this.shopList,'this.shopList')
					// 	if(this.shopList.length > 0){
					// 	console.log('数据加载了')
						this.Loading = true
					// }
					},800)
					console.log(this.Loading,'loadingggggg')
				}
			},
		},
		mounted() {
		},
		data() {
			return {
				status:"loading",
				Loading:true, 
			}
		},
		components:{UniLoadMore},
		methods: {
		goShopDetail(id){
			this.$emit('goShopDetail',id)
		},
		
		}
	}
</script>

<style lang="scss">
	// 推荐商品区
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
		.shop_list{
			display: flex;
			flex-wrap: wrap;
			padding: 0px 10px;
			box-sizing: border-box;
			justify-content: space-between;
			
			.list_box{
				width: 350rpx;
				background-color: white;
				margin: 5px 0;
				padding: 10px;
				box-sizing: border-box;
				image{
					width: 80%;
					height: 150px;
					margin: 0 auto;
					display: block;
					
				}
				.shop_price{
					color: $shop-color;
					font-size: 36rpx;
					margin-top: 15rpx;
					text:nth-child(2){
						color: #ccc;
						font-size: 28rpx;
						margin-left: 10rpx;
						text-decoration: line-through;
					
					}
				}
				.shop_detail{
					font-size: 30rpx;
					line-height: 50rpx;
					padding-top: 10rpx;
					padding-bottom: 15rpx;
				}
			}
		}
	}
</style>
