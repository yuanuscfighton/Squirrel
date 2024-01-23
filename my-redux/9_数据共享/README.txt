
#数据共享案例
    前面写的求和案例，只有一个求和组件，Count组件把求和的值交给redux处理，然后自己再从redux中把求和的值取出来 → 意义不大，仅为演示


目录结构
├── App.jsx
├── README.txt
├── containers
│         ├── Count
│         │       └── index.jsx
│         └── Person
│                 └── index.jsx
├── index.js
└── redux
    ├── actions
    │         ├── count.js
    │         └── person.js
    ├── constants.js
    ├── reducers
    │         ├── count.js
    │         └── person.js
    └── store.js


写代码步骤：
    第1步：先写容器组件和UI组件，相对静态的元素

    第2步：写reducer，初始化 + 处理状态

    第3步：通过在count_reducer和person_reducer中打log，发现新增的person_reducer没有执行。去修改store