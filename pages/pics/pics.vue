<template>
	<view class="pics">
		<!-- 左菜单 -->
		<scroll-view class="left_bar" scroll-y :show-scrollbar='false'>
			<view class="left_item" v-for="(item,index) in leftBarList" :key='item.id' :style="{background:tabIndex == index ? '#b50103':'',color:tabIndex == index ? 'white':''}" @click='clickTab(index,item.id)'>
				{{item.title}}
			</view>
		</scroll-view>
		<!-- 右侧主体内容 -->
		<view class="right_content">
			<scroll-view scroll-y="true" >
				<view class="right_item" v-for="item in rightContentList" :key='item.id'>
					<image :src="item.img_url" mode="" @click="readImg(item.img_url)"></image>
					<view class="right_auther">
						标题：{{item.title}} 
					</view>
					
					<view class="right_describe">
						{{item.zhaiyao}}
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex:-1,
				leftBarList:[],
				rightContentList:[]
			}
		},
		onLoad() {
			this.getLeftBar()
		},
		mounted() {
			
		},
		methods: {
			// 预览图片
			readImg(url){
				let urlList = this.rightContentList.map(item=>item.img_url)
				console.log(urlList,'urlList')
				uni.previewImage({
					urls:urlList
				})
			},
			clickTab(index,id){
				this.tabIndex = index
				this.getRightMessage(id)
				
			},
			// 获取左侧菜单栏数据
			async getLeftBar(){
				let res = await this.$http({
					url:'api/getimgcategory'
				})
				this.leftBarList = res.data.message
				// console.log(res,'图片分类')
			},
			// 获取右侧详细信息数据
			async getRightMessage(id){
				let res = await this.$http({
					url:'api/getimages/'+id
				})
				this.rightContentList =  res.data.message
				console.log(res,'右边菜单')
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.pics{
		height: 100%;
		display: flex;
		flex-direction: row;
		// 左菜单
		.left_bar{
			width: 200rpx;
			border-right: 1px solid #eee;
			height: 100%;
			.left_item{
				height: 60px;
				line-height: 60px;
				color: #333;
				font-size: 30rpx;
				text-align: center;
				border-top: 1px solid #eee;
				
			}
		}
		// 右边主体框
		.right_content{
			width: calc(100% - 200rpx);
			padding: 5rpx 10rpx;
			height: 100%;
			overflow-y: auto;
			background-color:rgba(238,238,238,.5);
			box-sizing: border-box;
			.right_item{
				height: 600rpx;
				background: white;
				// box-shadow: 1px 1px 1px 1px;
				margin-bottom: 30rpx;
				padding: 20rpx;
				box-sizing: border-box;
				image{
					width:100% ;
					height: 380rpx;
					border-radius: 10rpx;
				}
				.right_auther{
					font-size: 40rpx;
					font-weight: 700;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.right_describe{
					font-size: 30rpx;
					line-height: 40rpx;
					max-height: 180rpx;
					height: 180rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}
			
		
		
	}
</style>
