/*

  1. 有时候你会比 ts 更加明确一个值的类型，此时，可以使用类型断言来指定更具体的类型

  2. 注意 getElementById() 方法返回值类型是 HTMLElement，该类型只包含所有标签公共的属性或者方法，不包含 a 标签特有的 href 等属性。
    因此，这个类型太宽泛（不具体），无法操作 href 等 a 标签特有的属性或者方法

  3. 解决方法：这种情况下，就需要使用类型断言指定更具体的类型

 */
const aLink = document.getElementById("link");
// aLink.href; // 错误信息：TS2339: Property 'href' does not exist on type 'HTMLElement'.


/*

  4. 使用类型断言
    （1）使用 as 关键字实现类型断言
    （2）关键字 as 后面的类型是一个更加具体的类型（HTMLAnchorElement 是 HTMLElement 的子类型）
    （3）通过类型断言，aLink 的类型变得更加具体，这样就可以访问 a 标签特有的属性或方法了

 */
const aLinkAs = document.getElementById("link") as HTMLAnchorElement;
aLinkAs.href


// 在浏览器控制台里输入：console.dir($0)，打印当前选中DOM元素，在属性列表的最后面，即可已看到该元素的类型