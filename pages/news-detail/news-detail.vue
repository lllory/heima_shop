<template>
	<view class="detail">
		<view class="main" v-for="item in detailList" :key='item.id'>
			<view class="title">
				标题 ：{{item.title}}
			</view>
			<view class="little_title">
				<text>发表时间：{{item.add_time | timefilter}}</text>
				<text>浏览人数：{{item.click}}</text>
			</view>
			<view class="content" v-html="item.content">
				<!-- {{item.content}} -->
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				detailList: []
			}
		},
		onLoad(options) {
			console.log(options, 'jjjjjs')
			this.getDetail(options.id)
		},
		methods: {
			async getDetail(id) {
				let res = await this.$http({
					url: 'api/getnew/' + id
				})
				this.detailList = res.data.message
				console.log(res, 'res')
			}
		}
	}
</script>

<style lang="scss">
	.detail {
		.main {
			height: 100%;
			.title{
				color: $shop-color;
				font-weight: 500;
				line-height: 50rpx;
				font-size: 40rpx;
			}
			.little_title{
				font-size: 30rpx;
				display: flex;
				justify-content: space-between;
				text{
					&:last-child{
						margin-right: 30rpx;
					}
				}
			}
			
		}
	}
</style>
