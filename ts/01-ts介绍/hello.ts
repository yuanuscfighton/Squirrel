console.log("Hello ts");

let age: number = 20;
console.log(age);


// 由 Ts 编译生成的 Js 文件，代码中就没有类型信息了

/*
  笔记：
    1. TypeScript 是 JavaScript 的超级（Js 有的，Ts 都有）
        TypeScript = Type + JavaScript（在 Js 基础上，为 Js 添加了类型支持）

    2. 背景：Js 的类型系统存在先天缺陷，Js 代码中绝大部分错误都是类型错误（Uncaught Type Error）
       问题：增加找 bug、改 bug 时间，影响开发效率

    3. TypeScript 是静态类型的编程语言，Js 是动态类型的编程语言
      （1）静态类型：编译期做类型检查；动态类型：执行期做类型检查
      （2）代码编译和代码执行的顺序：先编译，后执行
      （3）对于 Js 来说，需要等到代码真正去执行的时候才能发现错误（晚）
          对于 Ts 来说，在代码编译期（代码执行前）就可以发现错误（早）

    4. 安装编译 ts 的工具包
      （1）为什么要安装编译 ts 的工具包？
            因为 Node.js / 浏览器，只认识 Js 代码，不认识 Ts 代码。需要先将 Ts 代码转化为 Js 代码，然后才能运行。
      （2）安装命令：npm i -g typescript
      （3）TypeScript包：用来编译 Ts 代码的包，提供了 tsc 命令，实现了 Ts -> Js 的转化
      （4）验证是否安装成功：tsc -v，查看 typescript 版本

    5. 编译并运行 ts 代码
      （1）创建 hello.ts 文件
      （2）将 Ts 编译为 Js：在终端中输入命令，tsc hello.ts 此时，会在同级目录中出现一个同名的 Js 文件
      （3）执行 Js 代码：在终端中输入命令，node hello.js

    6. 简化运行 ts 步骤
      （1）问题：每次修改代码后，都要重复执行两个命令，才能运行 Ts 代码，太繁琐
      （2）使用 ts-node 包，直接在 Node.js 中执行 Ts 代码
      （3）安装命令：npm i -g ts-node（ts-node 包提供了 ts-node 命令）
      （4）使用方式：ts-node hello.ts
      （5）说明：ts-node 命令在内部偷偷的将 Ts -> Js 代码，然后再运行 Js 代码
 */
