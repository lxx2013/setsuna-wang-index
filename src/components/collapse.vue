<template>
<el-collapse v-model = "activeNames" @change="handleChange" accordion>
	<el-collapse-item title="" name="1">
		<span slot="title">
		<i class="header-icon">
	<img src="https://assets-cdn.github.com/favicon.ico" >
		</i>
			Github 项目
		</span>
		<div>{{DoubleactiveNames}}</div>
		<div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
	</el-collapse-item>
	<el-collapse-item name="2">
	<span slot="title">
	<i class="header-icon">
		<img src="jianshu.ico">
	</i>
		简书 博客
	</span>
		<div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
		<div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
	</el-collapse-item>
	<el-collapse-item  name="3">
	<span slot="title">
	<i class="header-icon">
		<img src="https://zh.moegirl.org/favicon.ico">
	</i>
	萌娘百科 贡献
	</span>
		<div>简化流程：设计简洁直观的操作流程；</div>
		<div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
		<div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
	</el-collapse-item>
	<el-collapse-item name="4">
	<span slot="title">
		<i class="header-icon">
			<img src="https://static.hdslb.com/images/favicon.ico">
		</i>
		Bilibili 投稿
	</span>
	<el-row id="bilibili">
		<el-col v-for="(item,_index) in ImageData" :span="ImageData.length>1?12:24" :key="_index">		
				 <bilibili-item  :item="item"></bilibili-item>
		</el-col>
	</el-row>
	</el-collapse-item>
</el-collapse>
</template>
<script>
/* eslint-disable */
import BilibiliItem from "./bilibili-item";
import ImageData from "./image-data.js";
import { mapState,mapGetters } from 'vuex'
export default {
	components: {
		BilibiliItem
	},
	data() {
		return {
			ImageData: ImageData
		};
	},
	computed:{
		...mapState([
			'activeNames'
		]),
		...mapGetters([
			'DoubleactiveNames'
		])
	},
	methods: {
		handleChange(val) {
			console.log(val);
		}
	}
};
</script>
<style lang="less" scoped>
	.header-icon {
		img {
			height: 30%;
			transform: translateY(2px);
		}
	}
</style>
