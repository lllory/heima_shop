<template>
	<view class="shop-detail">
		<view class="top">
			<swiper :indicator-dots="true" circular>
				<swiper-item v-for="item in imgList" :key='item.src'>
					<image :src="item.src" mode="aspectFit" class="scroll_image" @click="readImage"></image>
				</swiper-item>
			</swiper>
			<view class="price textIndent">
				<text>￥2195</text><text>￥2499</text>
			</view>
			<view class="shop-name textIndent">
				{{shopList.title}}
			</view>
		</view>
		<view class="center textIndent">
			<view class="shop-Id">
				货号：SD7159810321
			</view>
			<view class="shop-count">
				库存：200
			</view>
		</view>

		<view class="bottom ">
			<view class="introduce textIndent">
				详细介绍
			</view>
			<view class="detail">
				<rich-text :nodes="shopList.content"></rich-text>
			</view>
		</view>
		<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick" @buttonClick="buttonClick" />
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		data() {
			return {
				imgList: [],
				shopList: [],
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		mounted() {

		},
		components: {
			uniGoodsNav
		},
		onLoad(option) {
			this.getImgList(option.id)
			this.getshopList(option.id)
			// this.getDesc(option.id)
		},
		methods: {
			// 查看图片
			readImage() {
				let urlList = this.imgList.map(item => item.src)
				uni.previewImage({
					urls: urlList
				})
			},
			// 或许详情也轮播图片
			async getImgList(id) {
				let res = await this.$http({
					url: 'api/getthumimages/' + id
				})
				this.imgList = res.data.message
				// console.log(res)
			},
			async getshopList(id) {
				let res = await this.$http({
					url: 'api/getimageInfo/' + id
				})
				this.shopList = res.data.message[0]
			},
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			},
			// async getDesc(id){
			// 	let res = await this.$http({
			// 		url:'api/goods/getdesc/'+id
			// 	})
			// 	console.log(res)
			// 	// this.shopList = res.data.message
			// },
		}
	}
</script>

<style lang="scss">
	page {
		height: calc(100% - 50px);
	}

	.textIndent {
		padding: 0 10rpx;
		box-sizing: border-box;
	}

	.shop-detail {
		height: 100%;
		background-color: #eee;
		overflow-x: hidden;

		.top {
			width: 750rpx;
			background-color: white;

			swiper {
				width: 750rpx;
				height: 700rpx;

				.scroll_image {
					height: 100%;
					width: 100%;
				}
			}

			.price {
				// margin: 10px 0px;
				font-size: 35rpx;
				color: $shop-color;
				line-height: 80rpx;

				text:last-child {
					text-decoration: line-through;
					color: #999;
					font-size: 25rpx;
					margin-left: 20rpx;

				}
			}

			.shop-name {
				font-size: 32rpx;
				line-height: 60rpx;
			}
		}

		.center {
			background-color: white;
			margin-top: 10rpx;
			font-size: 30rpx;

			.shop-Id,
			.shop-count {
				line-height: 60rpx;
			}

		}

		.bottom {
			background-color: white;
			margin-top: 10rpx;
			width: 750rpx;

			.introduce {
				font-size: 32rpx;
				line-height: 70rpx;
				border-bottom: 1px solid #eee;
			}

			.detail {
				width: 100%;
				font-size: 28rpx;
				color: #333;
				// .gomeImgLoad{
				// 	width: 750rpx;
				// }
			}
		}

	}
</style>
