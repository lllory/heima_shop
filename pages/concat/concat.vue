<template>
	<view class="cancat">
		<view class="concat_img">
			<image src="http://destiny001.gitee.io/image/ban1.jpg" mode="" class="img"></image>
		</view>
		<view class="concat_phone" @click="callPhone">
			联系电话：176 0056 2269(点击拨打)
		</view>
		<view class="cancat_address">
			地址：{{address}}
		</view>
		<view class="concat_map">
			<map style="width: 100%;height: 90%;" :latitude="latitude" :longitude="longitude" :show-location='true' :markers="covers" @tap='clickMap'>
				
			</map>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 latitude: 39.909,
				 longitude: 116.39742,
				 address:"天府广场",
				  covers: [{
				                 latitude: '',
				                 longitude:'',
				                  iconPath: ''
				             }]
			}
		},
		onShow() {
			uni.getLocation({
				type:'gcj02',
				success:(res)=> {
					this.latitude = res.latitude
					this.longitude = res.longitude
					// this.covers[0].latitude = res.latitude
					// this.covers[0].longitude = res.longitude
					// console.log(res,'ressss')
				}
			})
			
		},
		methods: {
			clickMap(e){
				uni.chooseLocation({
					success:(res)=>{
						this.address = res.address
						this.latitude = res.latitude
						this.longitude = res.longitude
						this.covers[0].latitude = res.address
						this.covers [0].longitude = res.longitude
						this.covers[0].iconPath = '../../static/imgs/hmlogo.png'
					}
				})
			},
			callPhone(){
				uni.makePhoneCall({
					phoneNumber:'17600562269',
					success:(res)=>{
						console.log('成功')
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.cancat{
		display: flex;
		padding: 0 15rpx;
		box-sizing: border-box;
		flex-direction: column;
		height: 100%;
		.concat_img{
			width: 100%;
			height: 380rpx;
			.img{
				width: 100%;
				height: 100%;
			}
		}
		.concat_phone{
			line-height: 120rpx;
			border-bottom: 1px solid #eee;
		}
		.cancat_address{
			line-height: 120rpx;
		}
		.concat_map{
			flex: 1;
		}
	}
</style>
