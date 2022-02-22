# 

# 1. helloword

控制浏览器弹出警告
`alert("hello!!!")`
```javascript
    alert("hello!!!")
```
在浏览器页面中输出内容
```javascript
    document.write("我写在哪里？？")
 ```
在控制台输出内容
```javascript
    console.log("我在哪里出来？")
```

# 2. JS代码编写的位置
 1. 可以将js代码编写到外部js文件中，然后引入。写到外部文件中可以在不同的页面中同时引用，也可以利用到浏览器的缓存机制
    
    **推荐使用**
    
```html
<script type="text/javascript" src="./js/01script.js"></script>
```

**一旦script标签用于引入外部文件后就不能再在标签中编写js代码,如需要，可再创建script标签**

 2. 可以将js代码编写到onclick属性中,当我们点击按钮时，js代码才会执行。
     
```html
     <button onclick="alert('别点我！！')">点我一下</button>
```
 
3. 可以将js代码写在超链接的href属性中,这样点击超链接时也会执行js代码  

  ```html
     <a href="javascript:alert('hello')">也点我一下</a>
     <a href="javascript:;">也点我一下</a>
  ```
   **虽然可以直接写在属性中 但是结构与行为耦合 不利于维护 不推荐使用**
4. 可以将js代码写在script标签
```html
  <script type="text/javascript">
      alert('这是内部script标签')
  </script>
```

# 3. 基本语法
1. js中严格区分大小写。
2. js中每一条语句以分号结尾。(如果不写分号，浏览器会自动添加，影响性能，且浏览器可能加错分号)
3. js中会自动忽略多个空格和换行。

```javascript
/*
    多行注释
*/
//单行注释
```
# 4. 字面量和变量
    
**字面量**，即常量 都是一些不可改变的量

> 比如：1，2，3，4
> 可以直接使用，但一般不会使用
	
**变量**  变量可以用来保存字面量，而且变量的值是可以任意改变的
    
**声明变量**
在就是中使用var关键字来声明变量


```javascript
//为变量a赋值
var a = 123;
console.log(a);
document.write(a);
```
# 5. 标识符
- 在JS中所有的可以由我们自主命名的都可以称为是标识符
- 例如：变量名、函数名、属性名等等
- 命名一个标识符时需遵守以下规则

 1. 标识符中可以含有字母、数字、下划线、$
 2. 标识符不能以数字开头
 3. 标识符不能是ES中的关键字或保留字
 4. 标识符一般采用驼峰命名法
        - 首字母小写，每个单词的开头字母大写，其余小写
        - helloWorld   xxxYyyZzz

 **JS底层保存标识符时实际上是采用的Unicode编码**
 ```javascript
 var a = 12;
 
 document.write(if);
 ```
 # 6. 数据类型
数据类型指的是字面量的类型

在JS中一共有六种数据类型
- **String 字符串**
-  **Number 数值**
-  **Boolean 布尔值**
-  **Null 空值**
-  **Undefined 未定义**
-  *Object 对象*
         
**其中前五种为基本数据类型，Object为引用数据类型**


## 6.1 String字符串
- 在JS中字符串需要使用引号引起来
- 使用双引号和单引号都可以，但是不要混着用
 */
 ```javascript
 var str = "hello";
 
 str = '他说："我是xxx"';
 ```
 
     在字符串中我们可以使用\作为转义字符，
     当表示一些特殊符号时可以使用转义字符
 
     \\" 表示 "
	 
     \\' 表示 '
	 
     \n 表示换行
	 
     \t 制表符
	 
     \\\ 表示 \
```javascript
 document.write(str);
 console.log(str);
 //alert("你好\n我是")
 ```

     在JS中所有的数值都是Number类型，
     包括整数和浮点数（小数）
 
     JS中可以表示的数字的最大值
`Number.MAX_VALUE`=

`1.7976931348623157e+308`
    
`Number.MIN_VALUE` 最小的正值
     
如果使用number表示的数字超过了最大值，则会返回`Infinity`，无穷大
         `Infinity`也是`number`类型
     
`NaN`也是一个特殊的数字，表示Not a Number（不是一个数字）
``` javascript
 var c = 1.234;  //数字
 var d = "1.234" //字符串
 document.write(c);
 /*
     可以使用一个运算符 typeof 来检查一个变量的类型
         语法 typeof 变量
          字符串返回 string
          数值返回 number
 */
 console.log(typeof d);
 ```
    
**如果使用JS进行浮点数运算，可能得到一个不精确的结果**

**所以千万不要使用JS进行对精确度要求较高的运算**
 
 

## 6.2布尔值
布尔值只有两个，用于逻辑判断
- true - 真
- false - 假
 
     
## 6.3 Null
`Null`类型的值只有一个，就是`null`

`null`这个值专门用来表示一个为空的对象

使用`typeof`检查一个`null`值时，会返回`object`
 
## 6.4 Undefined
`Undefined`类型的值只有一个，就是`ndefined`

当声明一个变量，不赋值时，它的值就是`undefined`

使用typeof检查一个`undefined`值时，会返回`undefined`
 */

# 7. 强制类型转换
指将一个数据类型强制转换为其他的数据类型

## 7.1 将其他数据类型转换为string
>方法一：
>    - 调用被转换数据类型的toString()方法
>    - 该方法不会影响原变量，会将转换结果返回
>    - 注意：null和undefined没有toString，调用会报错
	
>方法二：
>    - 调用String()函数，并将被转换的数据作为参数传递给函数
>    - 使用String()函数做强制转换时，
>        对于Number和Boolean实际上就是调用的toString()方法
>        但是对于null和undefined，就不会调用toString()方法
>            它会将null、undefined直接转换为"null"、"undefined"

```javascript
var a = 1223;
//调用a的toString()方法
var b = a.toString();
document.write(typeof b)
var c = 777888;
c = String(c);
document.write(typeof c);
```

## 7.2 其他的数据类型转换为Number
>方法一：
> 使用Number()函数
>    - 字符串 --> 数字
>        1. 如果是纯数字的字符串，则直接将其转换为数字
>        2. 如果字符串中有非数字的内容，则转换为NaN
>        3. 如果字符串为空串或全是空格，则转换为0
>    - 布尔值 --> 数字
>        true  --> 1
>        false --> 0
>    
>    - null --> 数字 0
>    - undefined --> 数字 NaN
                
>方法二：
>这种方法专门用来对付字符串
>	- parseInt() 把一个字符串转换为一个整数
>	- parseFloat() 把一个字符串转换为一个浮点数

```javascript
var f = " ";
f = Number(f);
document.write(typeof f)
document.write('\nf='+f)
/* 
    调用parseInt()函数将a转换为Number
    parseInt()可以将一个字符串中的有效的整数内容取出来
    然后转换为Number
*/
var p = "123px";
p = parseInt(p);


// parseFloat()作用和parseInt()类似，不同的是它可以获得有效的小数
p = "123.456px"
/* 
    如果对非String使用parseInt()或parseFloat()
    它会先将其转换为String然后在操作
*/
p = null
document.write('\np='+p);
```
## 7.3 转换为Boolean

使用Boolean()函数
- 数字 --> Boolean
    除了0和NaN，其余的都是true
- 字符串 --> Boolean
    除了空串，其余都是false

- null和undefined都会转换为false
```javascript
a = 123;
a = Boolean(a);
document.write('\na='+a);
```

# 8. 其他进制的数字

在JS中，如果需要表示16进制的数字，则需要以0x开头
        
8进制数字，以0开头

2进制数字，以0b开头，不是所有浏览器都支持

```javascript
    //16进制
    a = 0x10;
    a = 0xff;
    a = 0xCafe;
    //8进制
    a = 010;
    //2进制
    a = 0b10;

    //像"070"这种字符串，有些浏览器会当作8进制，有些会当作10进制
    a = 070;
    //可以在parseInt()中传递第二个的参数，来指定数字的进制
    a = parseInt(a,10);
    document.write('a:'+a);
```
# 9. 运算符
运算符也叫操作符

    通过运算符可以对一个或多个值进行运算，并获取运算结果
    比如：typeof就是运算符

## 9.1 算术运算符
    
- \+  可以对两个值进行相加，返回结果
	-     如果对两个字符串进行加法运算，则会将其拼接为一个字符串
	-     任何值和字符串做加法运算，都会先转换为字符串再和字符串拼接（可以利用这一特点将任意数据类型转换为字符串）
- -
- *
- /
- % 取模运算，取余数
	- 当对非Number类型进行运算时会先转换为Number
	- 任何值和NaN做运算都会转换为NaN

**任何值做- * / 运算时都会转换为Number**
- 我们可以利用这一特点做隐式的类型转换
- 可以通过为一个值-0 *1 /1来将其转换为Number
## 9.2 一元运算符
### 9.2.1 正负号
一元运算符，只需要一个操作数
\+ 正号
- 正号不会对数字产生任何影响
\- 负号
- 负号可以对数字进行负号的取反

对于非Number类型的值：
- 它会将其转换为Number，然后再运算
- 可以对一个其他的数据类型使用+，来将其转换为Number
- 它的原理和Number()函数一样

### 9.2.2 自增 ++
- 通过自增可以使变量在自身的基础上增加1
- 对于一个变量自增以后，原变量的值会立即自增1
- 自增分成两种，后++（a++）和前++（++a）
- 无论是a++还是++a，都会立即使原变量的值自增1
- **不同的是a++和++a本身的值不同**
	+ 	a++的值等于原变量的值（自增前的a值）
	+ 	++a的值等于原变量的新值（自增后的a值）

```javascript
var a = 1;
console.log(a++);  //输出1，此时a等于2
console.log(++a);  //输出3，此时a等于3

var d = 20；
var result =d++ + ++d + d;   //20+22+22
 console.log(result);   // 64
 
var h = 10;
 h = h++;  //h = 20
```
### 9.2.3 自减
- 通过自减可以使变量在自身的基础上减1
- 自减分成两种：后--（a--）和前--（--a）
- 无论是a--还是--a都会立即使原变量的值自减1
- 不同的是a--和--a的值不同
	- a--是变量的原值（自减前的值）
	- --a是变量的新值（自减后的值）

## 9.3 逻辑运算符
### 9.3.1 ！非
- ！可以用来对一个值进行非运算
- 指对一个布尔值进行取反操作
	- true变false，false变true
- 如果对于一个布尔值两次取反，则不会发生变化
- 如果对非布尔值进行运算，则会将其转换为布尔值，然后再取反
	- 所以我们可以利用该特点，将其他数据类型转换为布尔值，可以为任意数据类型取两次反，将其转换为布尔值（原理与Boolean函数一样）

### 9.3.2 && 与
- &&可以对符号两侧的值进行与运算并返回结果
- 运算规则：
	* 两个值中只要有一个值为false就返回false
	* **只有两个值都为true才返回true**
- JS中的“与”属于短路的与，如果第一个值为false，则不会看第二个值

```javascript
//两个都是true才返回true
result = true&&true;
//只要有一个false则返回false
result = true&&false;
result = false&&true;
result = false&&false;

//第一个值是true，会检查第二个值
true && alert("看我出不出来");

//第一个值为false，不会检查第二个值
false && alert("看完出不出来");
```

### 9.3.3 || 或
- ||可以对符号两侧的值进行或运算并返回结果
- 运算规则：
	- 两个值中只要有一个true，就返回true
	- **如果两个值都为false，才返回false**
	- JS中的“或”属于短路的或，如果第一个值为true则不会检查第二个值

### 9.3.4 非布尔值的情况
- 对于非布尔值进行与或运算时，会先将其转换为布尔值，然后再运算，并且返回原值
- **与运算**
	- 如果第一个值为true，则必然返回第二个值
	- 如果第一个值为false，则直接返回第一个值
- **或运算**
	- 如果第一个值为true，则直接返回第一个值
	- 如果第一个值为false，则必然返回第二个值

```javascript
//true&&true
//与运算，如果两个值都为true，则返回后面的
var result = 5 && 6;

//与运算，如果两个值中有false，则返回靠前的false
//false && true
result = 0 && 2;
result = 2 && 0;
//false = NaN && 0;
result = NaN && 0;
result = 0 && NaN;

//或运算
//true || true
//如果第一个值为true，则直接返回第一个值
result = 2 || 1;
result = 2 || NaN;

//如果第一个值为false，则必然返回第二个值
result = NaN || 2;
result = NaN || 0;
```

## 9.4 赋值运算符

- a += 5等于a = a + 5
- a -= 5等于a = a - 5
- a *= 5等于a = a * 5
- a /= 5等于a = a / 5
- a %= 5等于a = a % 5

## 9.5 关系运算符
通过关系运算符可以比较两个值之间的大小关系

如果关系成立它会返回true，不成立返回false

- > 大于号
	- 判断符号左侧的值是否大于右侧的值

**任何值和NaN做比较都会返回false**
**如果符号的两侧都是字符串，不会将其转换为数字进行比较，会转换为Union编码比较**

```javascript
//比较两个字符串时，比较的是字符串的字符编码
console.log("a"<"b");  //true
//比较字符编码时是一位一位进行比较
//如果两位一样，则比较下一位，所以借用它来对英文进行排序
console.log("abc"<"b");//true
console.log("bbc"<"b");//false


```
**注意：在比较两个字符串型的数字时，一定一定要转型（加+号）**

## 9.6 编码
在字符串中使用转义字符输入Unicode编码

\u四位编码

```javascript
console.log("\u2620")
```

在网页中使用Unicode编码

&#编码；这里需要十进制

```html
<h1>&#9760;</h1>
```