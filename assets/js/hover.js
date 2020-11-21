
$( "#expertise-box" )
.on( "mouseenter", function() {
  if ($(window).width() <= 768) return;
  $( "#expertise" ).css('display', 'flex');
})
.on( "mouseleave", function() {
  if ($(window).width() <= 768) return;
  $( "#expertise" ).css('display', 'none');
});

$( "#accompagnement-box" )
.on( "mouseenter", function() {
  if ($(window).width() <= 768) return;
  $( "#accompagnement" ).css('display', 'flex');
})
.on( "mouseleave", function() {
  if ($(window).width() <= 768) return;
  $( "#accompagnement" ).css('display', 'none');
});
$( "#installation-box" )
.on( "mouseenter", function() {
  if ($(window).width() <= 768) return;
  $( "#installation" ).css('display', 'flex');
})
.on( "mouseleave", function() {
  if ($(window).width() <= 768) return;
  $( "#installation" ).css('display', 'none');
});
$( "#expertise" )
  .on( "mouseenter", function() {
  if ($(window).width() <= 768) return;
  $( "#expertise" ).css('display', 'flex');
  })
  .on( "mouseleave", function() {
  if ($(window).width() <= 768) return;
  $( "#expertise" ).css('display', 'none');
  });

$( "#accompagnement" )
  .on( "mouseenter", function() {
    $( "#accompagnement" ).css('display', 'flex');
  })
  .on( "mouseleave", function() {
    $( "#accompagnement" ).css('display', 'none');
  });
  $( "#installation" )
  .on( "mouseenter", function() {
    $( "#installation" ).css('display', 'flex');
  })
  .on( "mouseleave", function() {
    $( "#installation" ).css('display', 'none');
  });