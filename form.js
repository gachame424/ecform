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
  });