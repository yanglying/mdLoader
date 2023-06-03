const { marked } = require("marked");
//实现代码区分的高亮效果
const hljs = require("highlight.js");
module.exports = function (content) {
 
  //实现代码高亮效果
  marked.setOptions({
    //具体代码，以及代码的语言
    highlight: function (code, lang) {
      return hljs.highlight(lang,code).value;
    },
  });

  //借助第三方工具来解析md,生成html页面
  const html = marked(content);

  //返回的结果必须是模块化的内容
  const innerContent = "`" + html + "`";
  //webpack会对其进行解析,变成模块
  const moudleContent = `var code=${innerContent};export default code;`;
  return moudleContent;
};
