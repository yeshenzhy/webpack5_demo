/*
 * @Descripttion: 
 * @Author: zhy
 * @Date: 2022-04-02 11:37:23
 * @LastEditTime: 2022-04-04 22:41:09
 */
import '@/main.css';
import '@/main.scss';
import {cube} from './tools'
import imgUrl from '../public/static/img/1.png';
import '../public/static/font/iconfont.css'
const img = new Image()
img.src = imgUrl

document.getElementById('imgBox').appendChild(img)
@log('hi,si')
class MyClass { }

function log(text) {
  return function(target) {
    target.prototype.logger = () => `${text}，${target.name}`
  }
}

const test = new MyClass()
console.log(test.logger());
console.log(cube(2));
class Author {
  name = 'ITEM'
  age = 18
  email = 'lxp_work@163.com'

  info =  () => {
    return {
      name: this.name,
      age: this.age,
      email: this.email
    }
  }
}


export default Author
