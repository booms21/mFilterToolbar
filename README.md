# mFilterToolbar

mFilterToolbar 是一款mui风格的移动端h5顶部过滤栏组件，支持排序、组件默认值、组件取值、角标




首先引入mui和jq库，mFilterToolbar.css（mFilterToolbar的样式）
```html
 <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/mui/3.7.1/js/mui.min.js"></script>
    <link
      href="https://cdn.bootcdn.net/ajax/libs/mui/3.7.1/css/mui.min.css"
      rel="stylesheet"
    />
    <link href="css/mFilterToolbar.css" rel="stylesheet" />
     <script src="js/mFilterToolbar.js"></script>
```
## 使用方法：
创建一个mFilterToolbar实例，并传入配置项：

   ```javascript
       // 实例化一个ft对象
    var ft = new mFilterToolbar({
      defaultValue: {
        tabValue: "1",
        cacheSortObj: {
          sortName: "sortType2",
          sortType: "desc",
        },
      }, //默认值对象
      onTabClick: function (obj) {
        //tab点击完成后的回调函数
        console.log(obj);
        //在这里可以调用加载列表代码...
      },
    });
   ```
ft实例中有如下方法：

#### getValue：

获取当前mFilterToolbar的值


#### initFilter：

初始化mFilterToolbar的值，并重置mFilterToolbar到初始状态

```javascript
 data = [{
   id:'',  // 必须,唯一的id值，String类型
   name:'', //必须,对应mCascader节点的显示文本 ，String类型
   children:[...] //子节点 ，Array类型
    },...]
```

#### defaultValue：





     

## 例子：
##### mcascader的DOM不写死到js中，保留了原本组件的结构，方便你自定义组件的样式
``` html
 
    <div class="filterbox">
      <div class="filter-tab">
        <div class="tab-l active" data-to="tab-l">
          <span> <span class="mui-icon iconfont icon-guolvqi"></span>筛选</span>
        </div>
        <div class="tab-r" data-to="tab-r">
          <span> <span class="mui-icon iconfont icon-paixu"></span>排序</span>
        </div>
      </div>
      <div class="tab-content">
        <div class="l-cont" id="tab-l">
          <div class="tc-btn active" data-value="0">
            全部<span class="mui-badge mui-badge-danger allCount">0</span>
          </div>
          <div class="tc-btn" data-value="1">
            <!-- 设置tab对应的值-->
            tab1<span class="mui-badge mui-badge-danger countNum1">0</span>
          </div>
          <div class="tc-btn" data-value="2">
            tab2<span class="mui-badge mui-badge-danger countNum2">0</span>
          </div>
          <div class="tc-btn" data-value="3">
            tab3<span class="mui-badge mui-badge-danger countNum3">0</span>
          </div>
        </div>
        <div class="r-cont" id="tab-r" style="display: none">
          <div class="tc-btn active" data-value="sortType1">
            <!--排序对应的key 升序为asc  降序为desc 。  默认为asc 。点击后会toggle这两个值-->
            按热度<span class="mui-icon iconfont icon-paixu1"></span>
          </div>
          <div class="tc-btn" data-value="sortType2">
            按时间<span class="mui-icon iconfont icon-paixu1"></span>
          </div>
          <div class="tc-btn" data-value="sortType3">
            按评分<span class="mui-icon iconfont icon-paixu1"></span>
          </div>
        </div>
      </div>
    </div>
    <list>列表...</list>

  <script src="js/mFilterToolbar.js"></script>
  <script>
    // 实例化一个ft对象
    var ft = new mFilterToolbar({
      defaultValue: {
        tabValue: "1",
        cacheSortObj: {
          sortName: "sortType2",
          sortType: "desc",
        },
      }, //默认值对象
      onTabClick: function (obj) {
        //tab点击完成后的回调函数
        console.log(obj);
        //在这里可以调用加载列表代码...
      },
    });
  </script>
```


欢迎你参与贡献！👏
