<template>
	<view class="seek">
		<view class="seek_content" v-for="item in seekList" :key='item.id' @click="navigator(item.id)">
			<view class="left">
				<image :src="item.img_url" mode="scaleToFill"></image>
			</view>
			<view class="right">
				<view class="title">
					{{item.title}}
				</view>
				<view class="detail">
					<text>发表时间：{{ item.add_time | fromDate}}</text>
					<text>浏览：{{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			seekList:{
				type:Array,
				default:''
			}
		},
		filters:{
			fromDate(data){
				// console.log(data,'data')
				let d1 = new Date(data)
				let year = d1.getFullYear()
				let month = d1.getMonth().toString().padStart(2,0)
				let day = d1.getDay().toString().padStart(2,0)
				let hour = d1.getHours().toString().padStart(2,0)
				let minutes = d1.getMinutes().toString().padStart(2,0)
				let second = d1.getSeconds().toString().padStart(2,0)
				return year+"-"+month+'-'+day+' '+hour+":"+minutes+":"+second
				// console.log(date)
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			navigator(id){
				this.$emit('itemClick',id)
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.seek{
		height: calc(100% - 50px);
	}
	.seek_content{
		display: flex;
		flex-direction: row;
		// height: 200rpx;
			padding: 10rpx 20rpx;
		border-bottom:1px solid $shop-color ;
		box-sizing: border-box;
		&:last-child{
			border: none;
		}
		.left{
			width: 200rpx;
			height: 150rpx;
			image{
				width: 100%;
				min-width: 200rpx;
				max-width: 200rpx;
				height: 100%;
				
			}
		}
		.right{
			margin-left: 15rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.title{
				font-size: 30rpx;
			}
			.detail{
				font-size: 24rpx;
				text{
					&:nth-child(2){
						margin-left: 30rpx;
					}
				}
			}
		}
	}
</style>
