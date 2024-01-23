#求和案例——react-redux优化

1. 优化 containers/Count/index.jsx
    精简mapDispatchToProps，mapDispatchToProps可以是一个对象

2. 优化index.js
    不需要store.subscribe()监测redux中的状态变化

3. 简化传递store的成本
    见index.js