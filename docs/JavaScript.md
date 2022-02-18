# 1. helloword

控制浏览器弹出警告
`alert("hello!!!")`
  ```
    alert("hello!!!")
```
在浏览器页面中输出内容
```
    document.write("我写在哪里？？")
 ```
在控制台输出内容
```
    console.log("我在哪里出来？")
```

# 2. JS代码编写的位置
 1. 可以将js代码编写到外部js文件中，然后引入。写到外部文件中可以在不同的页面中同时引用，也可以利用到浏览器的缓存机制
    
    **推荐使用**
    
    ```
    <script type="text/javascript" src="./js/01script.js"></script>
    ```
    **一旦script标签用于引入外部文件后就不能再在标签中编写js代码,如需要，可再创建script标签**

 2. 可以将js代码编写到onclick属性中,当我们点击按钮时，js代码才会执行。
     
```
     <button onclick="alert('别点我！！')">点我一下</button>
```
 
3. 可以将js代码写在超链接的href属性中,这样点击超链接时也会执行js代码  

  ```
     <a href="javascript:alert('hello')">也点我一下</a>
     <a href="javascript:;">也点我一下</a>
  ```
   **虽然可以直接写在属性中 但是结构与行为耦合 不利于维护 不推荐使用**
4. 可以将js代码写在script标签
  ```
    <script type="text/javascript">
        alert('这是内部script标签')
    </script>
  ```

  # 3.