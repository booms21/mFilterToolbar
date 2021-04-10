/**
 * filterToolbar.js
 * 列表过滤栏js  szl 2021.1
 * https://github.com/booms21/filterToolbar.git
 */
(function () {
  "use strict";
  var cacheSortObj = {
    //存储排序最新的排序查询条件
    sortType: "",
    sortName: "",
  };
  //tab点击效果事件代理
  mui(".filter-tab").on("tap", "div", function () { //这里依赖mui代理了点击，改成使用jq也是可以的
    $(this).addClass("active").siblings().removeClass("active");
    $(".l-cont,.r-cont").hide();
    $("#" + $(this).data("to")).show();
  });

  //左边tab列表点击
  mui(".l-cont").on("tap", "div", function () {
    $(this).addClass("active").siblings().removeClass("active");
    var value = $(this).data("value");

    delete cacheObj[cacheSortObj.sortName]; //删除旧的排序条件

    cacheObj.status = String(value);
    cacheSortObj.sortName
      ? (cacheObj[cacheSortObj.sortName] = cacheSortObj.sortType)
      : ""; //加入条件
    cacheObj.isFilterData = true;

    //在这里可以调用加载列表代码...
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
    cacheObj.isFilterData = true;

    //在这里可以调用加载列表代码...
  });

  //初始化筛选栏
  window.initFilter = function () {
    cacheObj.status = "";
    cacheSortObj = {
      sortType: "",
      sortName: "",
    };
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
})();
