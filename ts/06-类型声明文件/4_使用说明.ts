/*
   1.类型声明文件的使用说明
    在使用 TS 开发项目的时候，类型声明文件的使用包括以下两种方式：
     （1）使用已有的类型声明文件
     （2）创建自己的类型声明文件

   2.使用已有的类型声明文件
     （1）又分为：① 内置类型声明文件，② 第三方库的类型声明文件
     （2）内置类型声明文件：TS 为 Js 运行时可用的所有标准的内置 API 都提供了声明文件。例如，
           在使用数组时，数组所有方法都会有相应的代码提示以及类型信息
           （可以通过 Cmd + 鼠标左键，来查看内置类型声明文件内容）
         查看 forEach 方法的类型声明，会自动跳转到 lib.es5.d.ts 类型声明文件中
 */