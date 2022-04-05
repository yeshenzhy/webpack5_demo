/*
 * @Descripttion: 
 * @Author: zhy
 * @Date: 2022-04-04 22:39:20
 * @LastEditTime: 2022-04-04 22:40:41
 */
export function print(){
  console.log('这个是没有被使用的方法')
}

export function cube(x) {
  console.log('这个是被使用的方法')
  return x * x * x;
}