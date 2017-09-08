(function (window) {
  // 定义一个空的插件对象
  const MyPlugin = { }

  // 给插件对象添加install()
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('Vue myGlobalMethod()')
    }
    // 2. 添加全局资源
    Vue.directive('my-directive', function (el, binding) {
      el.innerHTML = 'my-directive-----'+binding.value
    })
    // 3. 添加实例方法
    Vue.prototype.$myMethod = function () {
      console.log('vm $myMethod()')
    }
  }

  // 暴露
  window.MyPlugin = MyPlugin
})(window)