<template>
	<view class="seek" ref='seek' >
		<!-- <view class="seek_content" v-for="item in seekList" :key='item.id'>
			<view class="left">
				<image :src="item.img_url" mode="scaleToFill"></image>
			</view>
			<view class="right">
				<view class="title">
					{{item.title}}
				</view>
				<view class="detail">
					<text>发表时间：{{ item.add_time}}</text>
					<text>浏览：{{item.click}}</text>
				</view>
			</view>
		</view> -->
		<seek :seekList='seekList' @itemClick='navigato()'></seek>
	</view>
</template>

<script>
	import Seek from '../../components/news-item/news-item.vue'
	export default {
		data(){
			return {
				seekList:[]
			}
		},
		onLoad() {
			this.getList()
		},
		
		mounted() {
		},
		components:{Seek},
		methods:{
			async getList(){
				let res = await this.$http({
					url:"api/getnewslist"
				})
				this.seekList = res.data.message
				console.log(this.seekList,'this.seekList')
				
			},
			async navigato(id){
				uni.navigateTo({
					url:'../news-detail/news-detail?id='+id
				})
				// let res = await this.$http({
					
				// })
			},
		}
	}
</script>
	
<style lang="scss">
	page{
		height: 100%;
	}
	.seek{
		height: 100%;
		// .seek_content{
		// 	display: flex;
		// 	flex-direction: row;
		// 	// height: 200rpx;
		// 		padding: 10rpx 20rpx;
		// 	border-bottom:1px solid $shop-color ;
		// 	box-sizing: border-box;
		// 	.left{
		// 		width: 200rpx;
		// 		height: 150rpx;
		// 		image{
		// 			width: 100%;
		// 			min-width: 200rpx;
		// 			max-width: 200rpx;
		// 			height: 100%;
					
		// 		}
		// 	}
		// 	.right{
		// 		margin-left: 15rpx;
		// 		display: flex;
		// 		flex-direction: column;
		// 		justify-content: space-between;
		// 		.title{
		// 			font-size: 30rpx;
		// 		}
		// 		.detail{
		// 			font-size: 24rpx;
		// 			text{
		// 				&:nth-child(2){
		// 					margin-left: 15rpx;
		// 				}
		// 			}
		// 		}
		// 	}
		// }
		
	}
</style>
