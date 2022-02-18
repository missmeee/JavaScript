# less

less是一门css的预处理语言

less是一个css的增强版，通过less可以编写更少的代码实现更强大的样式

在less中添加了许多的新特性，像对变量的支持，对mixin的支持。。。

less的语法大体上和css语法一致，但是less中增添了许多对css的扩展，

所以浏览器无法直接执行less代码，要执行必须要将less转换为css，然后由浏览器执行



变量，在变量中可以存储一个任意值

变量的语法： @变量名:值

@a:100px;



使用变量时，如果直接使用则以 @变量名 的形式使用即可

作为类名，或者一部分值使用时必须以  @{变量名} 的形式使用

```CSS
@c:box1;

.@{c}{
  background-image:url("@{c}/1.png");
}
```




less中的所有数值可以直接运算

可以通过import来将其他less文件引入到当前less中

@import "less名"

