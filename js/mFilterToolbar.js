/**
 * mFilterToolbar.js
 * 基于JQ、MUI的移动端过滤栏组件  szl 2021.1
 * https://github.com/booms21/mFilterToolbar.git
 */
(function () {
  ("use strict");
  var cacheSortObj = {
    //存储排序最新的排序查询条件
    sortType: "",
    sortName: "",
  };

  var cacheObj = {
    tabValue: "",
  }; //存储左tab过滤的值

  //构造函数，options配置项
  function mFilterToolbar(options) {
    //初始化筛选栏
    this.initFilter = function () {
      cacheObj = {
        tabValue: "",
      };
      cacheSortObj = {
        sortType: "",
        sortName: "",
      };
      //先隐藏全部，后默认显示第一个
      $(".l-cont,.r-cont").hide();
      $("#" + $(".filter-tab > div:first").data("to")).show();
      $(".filter-tab > div:first")
        .addClass("active")
        .siblings()
        .removeClass("active");
      $(".l-cont  > div:first,.r-cont  > div:first")
        .addClass("active")
        .siblings()
        .removeClass("active");
    };

    initFilterTab(options);
    setFilterToolValue(options.defaultValue);
    this.getValue = getValue;
    this.options = options;
  }
  //获取mFilterToolbar当前active的值
  function getValue() {
    var obj = {};
    for (key in cacheSortObj) {
      obj[key] = cacheSortObj[key];
    }
    return { tabValue: cacheObj.tabValue, cacheSortObj };
  }
  //初始化mFilterToolbar
  function initFilterTab(options) {
    //tab点击效果事件代理
    mui(".filter-tab").on("tap", "div", function () {
      //这里依赖mui代理了点击，改成使用jq也是可以的
      $(this).addClass("active").siblings().removeClass("active");
      $(".l-cont,.r-cont").hide();
      $("#" + $(this).data("to")).show();
    });

    //左边tab列表点击
    mui(".l-cont").on("tap", "div", function () {
      $(this).addClass("active").siblings().removeClass("active");
      var value = $(this).data("value");

      delete cacheObj[cacheSortObj.sortName]; //删除旧的排序条件

      cacheObj.tabValue = String(value);
      cacheSortObj.sortName
        ? (cacheObj[cacheSortObj.sortName] = cacheSortObj.sortType)
        : ""; //加入条件
      cacheObj.lastActiveTabId = $(this).parent().attr("id");
      options.onTabClick && options.onTabClick(getValue());
    });

    //右边tab列表点击
    mui(".r-cont").on("tap", "div", function () {
      $(this).addClass("active").siblings().removeClass("active");
      var value = $(this).data("value");

      delete cacheObj[value];
      delete cacheObj[cacheSortObj.sortName]; //删除旧的条件

      //存储新的排序
      cacheSortObj.sortName = value;

      if (cacheSortObj.sortType !== "desc") {
        cacheSortObj.sortType = "desc";
      } else {
        cacheSortObj.sortType = "asc";
      }

      cacheObj[value] = cacheSortObj.sortType;
      cacheObj.lastActiveTabId = $(this).parent().attr("id");
      options.onTabClick && options.onTabClick(getValue());
    });
  }

  //对筛选栏默认设置值
  function setFilterToolValue(obj) {
    cacheObj.tabValue = obj.tabValue;
    if (obj.tabValue !== "") {
      $('.tc-btn[data-value="' + obj.tabValue + '"]')
        .addClass("active")
        .siblings()
        .removeClass("active");
    }

    if (obj.cacheSortObj) {
      cacheSortObj = obj.cacheSortObj;
      $('.tc-btn[data-value="' + obj.cacheSortObj.sortName + '"]')
        .addClass("active")
        .siblings()
        .removeClass("active");
    }
  }

  window.mFilterToolbar = mFilterToolbar;
})();
