## Node 的事件循环





### 宏任务 setTimeout 的误区

setTimeout 的回调不一定在指定时间后能执行。**而是在指定时间后，将回调函数放入事件循环的队列中**。

如果时间到了，JS 引擎还在执行同步任务，这个回调函数需要等待；如果当前事件循环的队列里还有其他回调，需要等其他回调执行完。

另外，setTimeout 0ms 也不是立刻执行，它有一个默认最小时间，为 4ms

```javascript
setTimeout(() => {
  console.log('setTimeout')
}, 0)
//0并不表示就是0，而是会有个4ms的延迟而已
setImmediate(() => {
  console.log('setImmediate')
})
```

因为取出第一个宏任务之前在执行全局 Script，**如果这个时间大于 4ms，这时 setTimeout 的回调函数已经放入队列，就先执行 setTimeout**；**如果准备时间小于 4ms，就会先执行 setImmediate**





**整个流程：**

**执行调用栈中的代码**  

**执行微任务队列中的所有任务** 

**执行宏任务队列中的所有任务**



```javascript
setTimeout(() => {
        console.log(1); //宏任务
      }, 0);
      console.log(2); //调用栈
      queueMicrotask(() => {
        console.log(3);//微任务
        setTimeout(() => {
          console.log(4);//宏任务
        }, 0);
      });
//2 3 1 4
```

![image-20230215151337844](C:\Users\yly\AppData\Roaming\Typora\typora-user-images\image-20230215151337844.png)





# 对象相关？

### Object.assign（）用于合并对象

```js
Object.assign(targetObj, sourceObj)
```

targetObj: 目标对象，**接收源对象属性的对象**

sourceObj: 源对象，包含将被合并的属性。

返回值：修改后的新对象targetObj

进行的是浅复制，仅复制源对象中可枚举和自身身上的属性，如果多个源对象都有相同的属性，则使用最后一个复制的值



Object(): 创建一个新的 对象。并根据传入值的类型来显示数据类型

```javascript
console.log(Object("123"));  //String {'123'}  
 
```
