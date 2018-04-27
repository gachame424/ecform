$(function(){
    const input = '.form__floating__input';
    const label = '.form__floating__label';
  
    $(input).each(function(){
      if($(this).val() != ""){
        $(this).prev(label).addClass('active');
      }
    });
  
    $(input)
    .focus(function(){
        $(this).prev(label).addClass('active');
      })
    .blur(function(){
      if($(this).val() == ""){
        $(this).prev(label).removeClass('active');
      }
    });

    $('.form').validate({
      rules: {
        'pass': {
          required: true,
          minlength: 4
        },
        'pass_confirm': {
          required: true,
          equalTo: '#pass'
        }
      }, 
      messages: {
        'pass': {
          required: 'パスワードを入力してください',
          minlength: 'パスワードは4文字以上で入力してください'
        },
        'pass_confirm': {
          required: '確認のため再度入力してください',
          equalTo: '上記に入力した内容と異なります。ご確認ください'
        }
      }
    })
  });