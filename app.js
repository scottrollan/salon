$(function(){

    readMore( $('.spoiler'), 4);

  function readMore(jObj, lineNum) {
    if ( isNaN(lineNum) ) {
      lineNum = 4;
    }
    var go = new ReadMore (jObj, lineNum);
  }

  //class
  function ReadMore(_jObj, lineNum) { 
    var READ_MORE_LABEL = 'read more';
    var HIDE_LABEL = 'minimize';

    var jObj = _jObj;
    var textMinHeight = ''+ (parseInt(jObj.children('.hidden-text').css('line-height'),10)*lineNum) +'px';
    var textMaxHeight = ''+jObj.children('.hidden-text').css('height');

    jObj.children('.hidden-text').css('height', ''+ textMaxHeight);
    jObj.children('.hidden-text').css( 'transition', 'height .5s');
    jObj.children('.hidden-text').css('height', ''+ textMinHeight);

    jObj.append ('<button class="read-more">'+READ_MORE_LABEL+'</button>');

    jObj.children('.read-more').click ( function() {
      if (jObj.children('.hidden-text').css('height') === textMinHeight) {
        jObj.children('.hidden-text').css('height', ''+textMaxHeight);
        jObj.children('.read-more').html(HIDE_LABEL).addClass('active');
      } else {
        jObj.children('.hidden-text').css('height', ''+textMinHeight);
        jObj.children('.read-more').html(READ_MORE_LABEL).removeClass('active');
      }
    });

  }
  
  $("#openMap").click(function() {
    $("#map").show();
    $("#openMap").hide();
    $("#closeMap").show();
  });

  $("#closeMap").click(function() {
    $("#map").hide();
    $("#openMap").show();
    $("#closeMap").hide();
  });

});

