$( window ).on("load", function() {

	// html
  var psCoachMarkHtml = '<div class="ps-coach-mark">'+
	  											'<span class="ps-coach-mark__close" title="Fechar"></span>'+
	  											'<div class="ps-coach-mark__start">'+
		  											'<div class="ps-coach-mark__content">'+
			  											'<div class="ps-coach-mark__start__title">Conheça as novidades</div>'+
			  											'<div class="ps-coach-mark__start__subtitle">Saiba o que preparamos para você no Corretor Online da Porto Seguro.<span class="ps-coach-mark__seta-start">&nbsp;</span></div>'+
			  											'<span class="ps-coach-mark__start__button">&nbsp;</span>'+
			  											'<span class="ps-coach-mark__start__close ps-coach-mark__close-link">Não quero ver agora</span>'+
		  											'</div>'+
	  											'</div>'+
	  											'<div class="ps-coach-mark__step_container"></div>'+
	  											'<div class="ps-coach-mark__finish">'+
		  											'<div class="ps-coach-mark__content">'+
															'<span class="ps-coach-mark__step__steps">ok</span>'+
															'<div class="ps-coach-mark__step__title">Pronto! Viu como está tudo mais prático?</div>'+
															'<div class="ps-coach-mark__step__text">Então aproveite as novidades.</div>'+
															'<span class="ps-coach-mark__step__button prev">anterior</span>'+
															'<span class="ps-coach-mark__step__button next ps-coach-mark__close-link">fechar</span>'+
	  												'</div>'+
  												'</div>'+
  											'</div>';

  // valida cookie
  var psCoachMarkCookie = psCoachMarkGetCookie("psCoachMarkCookie");
  if (psCoachMarkCookie != "1") {
  	$('body').prepend(psCoachMarkHtml).addClass('ps-coach-mark-active');
  	psCoachMarkCreateSteps();
  }

  // close
  $(document).on('click', '.ps-coach-mark__close, .ps-coach-mark__close-link', function (e) {
	  e.preventDefault();
	  $('.ps-coach-mark').fadeOut();
	  $('body').removeClass('ps-coach-mark-active');
	  psCoachMarkSetCookie('psCoachMarkCookie', '1', 30);
	});

  // start
	$(document).on('click', '.ps-coach-mark__start__button', function (e) {
	  e.preventDefault();
	  $('body').removeClass('ps-coach-mark-active');
	  $('.ps-coach-mark__start').fadeOut();
		$('.ps-coach-mark__step__button.prev').hide();
	  $('.ps-coach-mark__step[ps-coach-mark-step="0"]').addClass('active').fadeIn();
		$('html, body').animate({ scrollTop: $('.ps-coach-mark__step.active  .ps-coach-mark__step__box').offset().top - 50 }, 500);
	});

	// button prev step finish
	$(document).on('click', '.ps-coach-mark__finish .ps-coach-mark__step__button.prev', function (e) {
	  e.preventDefault();
	  $('body').removeClass('ps-coach-mark-active');
	  $('.ps-coach-mark__finish').fadeOut();
	  $('.ps-coach-mark__step[ps-coach-mark-step="'+($('div[ps-coach-mark-title]').length-1)+'"]').addClass('active').fadeIn();
	  $('html, body').animate({ scrollTop: $('.ps-coach-mark__step.active  .ps-coach-mark__step__box').offset().top - 50}, 500);
	});

});

// steps

function psCoachMarkCreateSteps() {
	var psCoachMarkItems = $('div[ps-coach-mark-title]').length;
	var psCoachMarkarray = $('div[ps-coach-mark-title]').toArray();
	for(var i=0; i<psCoachMarkItems; i++) {
		var position = $(psCoachMarkarray[i]).offset();
		var top = position.top;
		var left = position.left;
		var width = $(psCoachMarkarray[i]).width()+58;
		var height = $(psCoachMarkarray[i]).height()+48;
		var title = $(psCoachMarkarray[i]).attr('ps-coach-mark-title');
		var text = $(psCoachMarkarray[i]).attr('ps-coach-mark-text');

		var psCoachMarkStep = '<div class="ps-coach-mark__step" ps-coach-mark-step="'+i+'">'+
	  												'<div class="ps-coach-mark__step__bg1" style="height:'+(top-10)+'px;"></div>'+
		  											'<div class="ps-coach-mark__step__bg2" style="top: '+(top-10)+'px;width:'+(($(window).width()-width)-(left-28)+0.5)+'px;height:'+(height-1)+'px;"></div>'+
		  											'<div class="ps-coach-mark__step__bg3" style="top: '+((top-11)+height)+'px;height:'+(($(document).height()-(top-10))-height)+'px;"></div>'+
		  											'<div class="ps-coach-mark__step__bg4" style="top: '+(top-10)+'px;width:'+(left-28)+'px;height:'+(height-1)+'px;"></div>'+
		  											'<div class="ps-coach-mark__step__box" style="top:'+(top-169)+'px;left:'+(left-28)+'px;">'+
															'<span class="ps-coach-mark__step__steps">'+(i+1)+'/'+psCoachMarkItems+'</span>'+
															'<div class="ps-coach-mark__step__title" style="max-width:'+width+'px;">'+title+
																'<span class="ps-coach-mark__step__seta">&nbsp;</span>'+
															'</div>'+
															'<div class="ps-coach-mark__step__text" style="max-width:'+width+'px;">'+text+'</div>'+
															'<div class="ps-coach-mark__step__foco" style="width:'+width+'px;height:'+height+'px;">'+
																'<div class="ps-coach-mark__step__foco__C1"></div>'+
																'<div class="ps-coach-mark__step__foco__C2"></div>'+
																'<div class="ps-coach-mark__step__foco__C3"></div>'+
																'<div class="ps-coach-mark__step__foco__C4"></div>'+
																'<div class="ps-coach-mark__step__foco__F1"></div>'+
																'<div class="ps-coach-mark__step__foco__F2"></div>'+
																'<div class="ps-coach-mark__step__foco__F3"></div>'+
																'<div class="ps-coach-mark__step__foco__F4"></div>'+
															'</div>'+
															'<span class="ps-coach-mark__step__button prev" onclick="psCoachMarkStepChange(\'a\');">anterior</span>'+
															'<span class="ps-coach-mark__step__button next" onclick="psCoachMarkStepChange(\'p\');">próximo</span>'+
	  												'</div>';+
  												'</div>';
		$('.ps-coach-mark__step_container').append(psCoachMarkStep);
	}
}

function psCoachMarkStepChange(t) {
	var step = parseInt($('.ps-coach-mark__step.active').attr('ps-coach-mark-step'));
	if(t == 'p') {
		step = step+1;
	} else {
		step = step-1;
	}
	if(step == 0) {
		$('.ps-coach-mark__step__button.prev').hide();
	} else {
		$('.ps-coach-mark__step__button.prev').show();
	}
	if(step > $('div[ps-coach-mark-title]').length-1) {
		$('.ps-coach-mark__step').hide().removeClass('active');
	  $('body').addClass('ps-coach-mark-active');
		$('html, body').animate({ scrollTop: 0 }, 500);
		$('.ps-coach-mark__finish').fadeIn().css('display','flex');
	} else {
		$('.ps-coach-mark__step').hide().removeClass('active');
		$('.ps-coach-mark__step[ps-coach-mark-step="'+step+'"]').addClass('active').fadeIn();
	}
	$('html, body').animate({ scrollTop: $('.ps-coach-mark__step.active .ps-coach-mark__step__box').offset().top - 50 }, 500);
}

// cookies

var psCoachMarkDomain = window.location.hostname;

function psCoachMarkSetCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";domain=;" + psCoachMarkDomain + ";" + expires + ";path=/";
}

function psCoachMarkGetCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
