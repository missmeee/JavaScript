# Clearfix

clearfix 这个样式可以同时解决高度塌陷和外边距重叠的问题，当你在遇到这些问题时，直接使用clearfix这个类即可。

```CSS
.clearfix::before,
.clearfix::after{
    content:'';
    display:table;
    clear:both;
}
```


