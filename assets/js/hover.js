
$( "#expertise-box" )
.on( "mouseenter", () => {if ($(window).width() > 751) $( ".srv-desc-content #expertise" ).css('display', 'flex');})
.on( "mouseleave", () => {if ($(window).width() > 751) $( ".srv-desc-content #expertise" ).css('display', 'none');});

$( "#accompagnement-box" )
.on( "mouseenter", () => {if ($(window).width() > 751) $( ".srv-desc-content #accompagnement" ).css('display', 'flex');})
.on( "mouseleave", () => {if ($(window).width() > 751) $( ".srv-desc-content #accompagnement" ).css('display', 'none');});

$( "#installation-box" )
.on( "mouseenter", () => { if ($(window).width() > 751) $( ".srv-desc-content #installation" ).css('display', 'flex');})
.on( "mouseleave", () => {if ($(window).width() > 751) $( ".srv-desc-content #installation" ).css('display', 'none');});

$("#expertise-box").on( "click", () => {if ($(window).width() < 751) $( "#m-expertise" ).css('display', 'flex');})
$("#m-expertise").on("click", () => { if ($(window).width() < 751) $( "#m-expertise" ).css('display', 'none') })

$("#accompagnement-box").on( "click", () => {if ($(window).width() < 751) $( "#m-accompagnement" ).css('display', 'flex');})
$("#m-accompagnement").on("click", () => { if ($(window).width() < 751) $( "#m-accompagnement" ).css('display', 'none') })

$("#installation-box").on( "click", () => {if ($(window).width() < 751) $( "#m-installation" ).css('display', 'flex');})
$("#m-installation").on("click", () => { if ($(window).width() < 751) $( "#m-installation" ).css('display', 'none') })