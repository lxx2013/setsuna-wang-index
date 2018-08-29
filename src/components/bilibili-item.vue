<template>
<div class="small-item fakeDanmu-item">
	<a :href="item.href" target="_blank" class="cover">
		<img :src="item.src" :alt="item.title">
		<span class="length">05:32</span>
		<span class="i-watchlater"></span>
	</a>
	<a :href="item.href" target="_blank" :title="item.title" class="title">{{item.title}}</a>
	<div class="meta">
		<span class="play"><i class="icon"></i>{{item.number}}</span>
		<span class="time"><i class="icon"></i>{{item.time}}</span>
	</div>
</div>
</template>
<script>
	export default {
		name: 'HelloWorld',
		props: {
		 	item:Object
		},
		data(){
			return {
				
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.small-item {
		display: block;
/*		float: left;*/
		width: 160px;
		position: relative;
		margin: 0 auto;
		padding: 10px;
		.title {
			display: block;
			line-height: 20px;
			height: 18px;
			margin-top: 6px;
			overflow: hidden;
			color:rgb(34,34,34)
		}
		img {
			border-radius: 4px;
			display: block;
			width: 160px;
			height: 100px;
		}
		.cover {
			/*		background: url() 50%;*/
			background-size: cover;
			border-radius: 4px;
			display: block;
			width: 160px;
			height: 100px;
			overflow: hidden;
			position: relative;
		}
		.meta {
			color: #999;
			white-space: nowrap;
			font-size: 0;
			margin-top: 6px;
			height: 14px;
			line-height: 14px;
			&>span:first-child {
				width: 72px;
				text-align: left;
			}
			&>span {
				display: inline-block;
				white-space: nowrap;
				height: 14px;
				line-height: 14px;
				font-size: 12px;
				overflow: hidden;
				.icon {
					width: 16px;
					height: 14px;
					vertical-align: sub;
					background-repeat: no-repeat;
				}
			}
		}
	}
	a{
		text-decoration: none;
	}
	.small-item .length {
		background: #111;
		background: rgba(0,0,0,.5);
		border-radius: 5px 0 0 0;
		color: #fff;
		line-height: 20px;
		-webkit-transition: top .2s ease;
		-o-transition: top .2s ease;
		transition: top .2s ease;
		padding: 0 6px;
		position: absolute;
		right: 0;
		bottom: 0;
	}
	.icon {
		background-image: url(../assets/icons.png);
		display: inline-block;
	}
	.play .icon{
		background-position: -280px -25px;
	}
	.time .icon{
		background-position: -280px -474px;
	}
</style>