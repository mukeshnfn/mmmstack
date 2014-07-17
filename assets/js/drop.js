//DROP MENU 1

var $container = $('.drpdown-menu'),
    $list = $('.drpdown-menu ul'),
    listItem = $list.find('li');

$(".drpdown .title").click(function () {
  if( $container.height() > 0) {
    closeMenu(this);
  } else {
    openMenu(this);
  }
});

$(".drpdown-menu li").click(function () {
  closeMenu(this);
});

function openMenu(el) {
  $(el).parent().toggleClass("closed");
  
  $container.css({
    height: 200
  })
  .mousemove(function(e) {
    var heightDiff = $list.height() / $container.height(),
        offset = $container.offset(),
        relativeY = (e.pageY - offset.top),
        top = relativeY*heightDiff > $list.height()-$container.height() ?
              $list.height()-$container.height() : relativeY*heightDiff;

    $list.css("top", -top);
  });
}

function closeMenu(el) {
  $(el).closest('.drpdown').toggleClass("closed").find(".title").text($(el).text());
  $container.css("height", 0);
  $list.css( "top", 0 );
}


//OPEN MENU 2

var $container1 = $('.drpdown-cat-menu'),
    $list1 = $('.drpdown-cat-menu ul'),
    listItem1 = $list.find('li');
$(".drpdown-cat .title2").click(function () {
  if( $container1.height() > 0) {
    closeMenu2(this);
  } else {
    openMenu2(this);
  }
});
$(".drpdown-cat-menu li").click(function () {
  closeMenu2(this);
});

function openMenu2(el) {
  $(el).parent().toggleClass("closed");
  
  $container1.css({
    height: 200
  })
  .mousemove(function(e) {
    var heightDiff = $list1.height() / $container1.height(),
        offset = $container1.offset(),
        relativeY = (e.pageY - offset.top),
        top = relativeY*heightDiff > $list1.height()-$container1.height() ?
              $list1.height()-$container1.height() : relativeY*heightDiff;

    $list1.css("top", -top);
  });
}
function closeMenu2(el) {
  $(el).closest('.drpdown-cat').toggleClass("closed").find(".title2 ").text($(el).text());
  $container1.css("height", 0);
  $list1.css( "top", 0 );
}


//DROP MENU 3

var $container2 = $('.drpdown-prj-menu'),
    $list2 = $('.drpdown-prj-menu ul'),
    listItem2 = $list.find('li');

$(".drpdown-prj .title3").click(function () {
  if( $container2.height() > 0) {
    closeMenu3(this);
  } else {
    openMenu3(this);
  }
});
$(".drpdown-prj-menu li").click(function () {
  closeMenu3(this);
});


function openMenu3(el) {
  $(el).parent().toggleClass("closed");
  
  $container2.css({
    height: 200
  })
  .mousemove(function(e) {
    var heightDiff = $list2.height() / $container2.height(),
        offset = $container2.offset(),
        relativeY = (e.pageY - offset.top),
        top = relativeY*heightDiff > $list2.height()-$container2.height() ?
              $list2.height()-$container2.height() : relativeY*heightDiff;

    $list2.css("top", -top);
  });
}

function closeMenu3(el) {
  $(el).closest('.drpdown-prj').toggleClass("closed").find(".title3").text($(el).text());
  $container2.css("height", 0);
  $list2.css( "top", 0 );
}


//DROP-MENU 4

var $container3 = $('.drpdown-sub-menu'),
    $list3 = $('.drpdown-sub-menu ul'),
    listItem3 = $list.find('li');

$(".drpdown-sub .title4").click(function () {
  if( $container3.height() > 0) {
    closeMenu4(this);
  } else {
    openMenu4(this);
  }
});
$(".drpdown-sub-menu li").click(function () {
  closeMenu4(this);
});

function openMenu4(el) {
  $(el).parent().toggleClass("closed");
  
  $container3.css({
    height: 200
  })
  .mousemove(function(e) {
    var heightDiff = $list3.height() / $container3.height(),
        offset = $container3.offset(),
        relativeY = (e.pageY - offset.top),
        top = relativeY*heightDiff > $list3.height()-$container3.height() ?
              $list3.height()-$container3.height() : relativeY*heightDiff;

    $list3.css("top", -top);
  });
}
function closeMenu4(el) {
  $(el).closest('.drpdown-sub').toggleClass("closed").find(".title4").text($(el).text());
  $container3.css("height", 0);
  $list3.css( "top", 0 );
}