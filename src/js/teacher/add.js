require('../common/aside.js');
require('../common/header.js');
//添加讲师
$("#add-teacher-form").ajaxForm(function(data){
  if(data.code == 200){
    alert('恭喜你,添加讲师成功');
    location.href = '/dist/html/teacher/list.html';
  }
});