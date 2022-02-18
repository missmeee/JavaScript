# 基本查询
查询数据库表的数据，使用以下语句：
```
SELECT * FROM <表名>
```
若要查询的表名为`students`，则为：
```
SELECT * FROM students
```
## 条件查询
SELECT语句通过`where`条件来设定查询条件，例如`SELECT * FROM students WHERE score >= 80`。
其中，`WHERE`关键字后面的`score >= 80`就是条件。`score`是列名，该列存储了学生的成绩，因此，`score >= 80`就筛选出了指定条件的记录。

条件查询的语法就是：
```
SELECT * FROM <表名> WHERE <条件表达式>
```
条件表达式可以用`<条件1> AND <条件2>`表达满足条件1并且满足条件2，`<条件1> OR <条件2>`表示满足条件1或者满足条件2,`NOT <条件>`表示“不符合该条件”的记录。

要组合三个或者更多的条件，就需要用小括号()表示如何进行条件运算。

## 投影查询
## 排序
## 分页查询
## 聚合查询
## 多表查询
## 连接查询