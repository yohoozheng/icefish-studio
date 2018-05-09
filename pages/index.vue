<template>
  <div id="home">
  	<!--this is 头部-->
  	<header>
  		<div class="head">
  			<div class="headLeft">
  				<!--图标-->
  				<img src="../assets/icon/home/logo1.png"/>
  				<!--目录-->
  				<ul>
  					<li class="selected">首页</li>
  					<li>建设中</li>
  					<li>建设中</li>
  					<li>关于我们</li>
  				</ul>
  			</div>
  			<div class="headRight">
					<img src="../assets/icon/home/message.png"/>
					<div class="proPic">
						<img src="../assets/icon/home/userPic.png"/>
					</div>
  			</div>
  		</div>
  	</header>
  	<!--中间内容-->
  	<div class="container">
  		<div class="intro">
	  		<img src="../assets/icon/home/logo2.png"/>
	  	</div>
  	</div>
  	<!--介绍-->
  	
  </div>
</template>
<script>
  export default {
    data(){
      return {
        
      }
    },
    components: {
     
    },
    activated(){
      this.selected = this.$store.state.pages.home
    },
    deactivated(){
      this.$store.dispatch("pages/home/homeIndex", this.selected)
    }
  }
</script>
<style lang="scss" scoped>
@import "../assets/css/main.scss";
#home{
	width: 100%;
	height: 100%;
	header{
		width: 100%;
		height: 52px;
		border-bottom: 1px solid #e6e6e6;
		box-shadow: 0 1px 10px #e6e6e6;
		.head{
			width: 1000px;
			height: 52px;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.headLeft{
				height: 52px;
				display: flex;
				align-items: center;
				font-size: 18px;
				font-weight: bold;
				img{
					height: 36px;
				}
				ul{
					height: 100%;
					width: 300px;
					margin-left: 50px;
					display: flex;
					align-items: center;
					justify-content: space-between;
					li{
						height: 100%;
						cursor: pointer;
						line-height: 52px;
					}
				}
			}
			.headRight{
				width: 90px;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				img{
					width: 30px;
					cursor: pointer;
				}
				.proPic{
					width: 34px;
					height: 34px;
					box-sizing: border-box;
					border: 1px solid #1e1e1e;
					img{
						width: 100%;
					}
				}
			}
		}
	}
	.selected{
		color: $Color;
		border-bottom: 2px solid $Color;
	}
	.container{
		width: 100%;
		min-width: 1000px;
		height: 3000px;
		background-color: #f7f7f7;
		background-image: url(../assets/icon/bg.jpg);
		background-repeat: no-repeat;
		background-position: top center;
		overflow: hidden;
		.intro{
			width: 1000px;
			margin: 0 auto;
			margin-top: 600px;
			padding-top: 30px;
			img{
				width: 400px;
			}
		}
	}
}
</style>
