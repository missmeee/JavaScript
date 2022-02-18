# 图标字体 iconfont

- 在网页中经常需要使用一些图标，可以通过图片；来引入图标，但是图片大小本身比较大，并且非常的不灵活。
- 所以在使用图标时，我们还可以将图标直接设置为字体，然后通过font-face的形式来对字体进行引入
- 这样我们就可以通过使用字体的形式来使用图标。



fontawesome使用步骤

1. 下载
2. 解压
3. 将css和webfont移动到项目中（同一级目录中）
4. 将all.css引入到网页中
5. 使用图标字体
	- 直接通过类名来使用图标字体  class="fas fa-bell"    class="fab xxxxx"
	
	- 通过伪元素设置图标字体
		1. 找到要设置图标的元素通过before和after选中
		2. 在content中设置字体的编码
		3. 设置字体样式
			fab
			font-family:'Font Awesome 5 Brands';
			
			fas 
			font-family:'Font Awesome 5 Free'
			font-weight:900;
		- 通过实体来使用图标字体：
			&#x图标的编码
				<span class="fas">&#xf0f3</span>
