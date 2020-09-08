const md =  '# 我是一级标题\n' + 
            '## 我是二级标题\n' +
            '### 我是三级标题\n' +
            '[**Showdown**](http://www.showdownjs.com) is *great*\n' +
            '\nbecause:\n' +
            ' - it\'s easy to use\n' +
            ' - it\'s extensible\n' +
            ' - works in the server and in the browser';
 
const html = `
  <head>
    <meta chatset="utf-8" />
    <title>test...</title>
    <style>
      .test {color: "red";}
      div {font-size: "12px";}
    </style>
    <script>console.log('test');</script>
  </head>
  <div style="margin: 10px 0 10px;">
    <b>* 字体标签</b>
  </div>
  <h1>h1</h1>
  <h2>h2</h2>
  <h3>h3</h3>
  <h4>h4</h4>

  <div style="margin: 10px 0 10px;">
    <b>* video标签</b>
  </div>
  <video src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"></video>

  <div style="margin: 10px 0 10px;">
    <b>* audio标签</b>
  </div>
  <audio title="我是标题" desc="我是小标题" src="https://media.lycheer.net/lecture/25840237/5026279_1509614610000.mp3?0.1"></audio>

  <div style="margin: 10px 0 10px;">
  <b>一. 转义字符</b>
  </div>&lt;div style=&quot;color:red&quot;&gt;我是转义字符&lt;/div&gt; 

  <div style="margin: 10px 0 10px;">
  <b>二. a标签跳转</b>
  </div> 
  <div>
    <a href="https://www.baidu.com" title="我是外链跳转" target="_blank">a标签跳转（外链跳转）</a>&nbsp; 
  </div>
  <div>
    <a href="/pages/highLightPage/highLightPage" title="我是内链跳转" target="_blank">a标签跳转（内链跳转）</a>&nbsp; 
  </div>

  <div style="margin: 10px 0 10px;">
  <b>三. 内联标签</b>
  </div> 
  <span style="background-color: rgb(139, 170, 74);">我是内联标签</span>
  <br />
  <p></p>
  <p></p>

  <div style="margin: 10px 0 10px;">
  <b>四. ul无序列表</b>
  </div>
  <ul>
  <li style="text-align: center;"><span style="background-color: rgb(139, 170, 74);">1</span></li>
  </ul>

  <div style="margin: 10px 0 10px;">
  <b>五. ol有序列表</b>
  </div>
  <ol>
  <li style="text-align: center;"><span style="background-color: rgb(139, 170, 74);">test</span></li>
  <li><span style="background-color: rgb(139, 170, 74);">test2</span></li>
  </ol>

  <div style="margin: 10px 0 10px;">
  <b>六. 表格渲染</b>
  </div>
  <table>
    <tr>
      <th>标题1</th>
      <th>标题2</th>
      <th>标题3</th>
      <th>标题4</th>
      <th>标题5</th>
    </tr>
    <tr>
      <td>cell1</td>
      <td>cell2</td>
      <td>cell3</td>
      <td>cell4</td>
      <td>cell5</td>
    </tr>
    <tr>
      <td>cell1</td>
      <td>cell2</td>
      <td>cell3</td>
      <td>cell4</td>
      <td>cell5</td>
    </tr>
  </table>

  <div style="margin: 10px 0 10px;">
  <b>七. 图片渲染</b>
  </div>
  <p><img src="https://dev-sit-1251698455.cos.ap-guangzhou.myqcloud.com/ds/22/363/20200401/3c9e7798e3204756b9e0f3263882b81f.jpeg" /><img src="https://mmbiz.qpic.cn/mmbiz_png/1gmcynicwloGkVMTr6wTHdDXlFUSaSxOSRELianAFGJYVzvXJKoM2xbbFMqKe6ONy5zoHHejNbibTJn5gdEOc1aIA/0?wx_fmt=png" width="200" height="100" style="text-align: center;margin: 0 auto;"/></p>
`

Page({
  data: {
    htmlText: html,
    mdText: md,
  },

  // handleTagATap(url) {
  //   console.log(url)
  // }
})