/**
 *
 * jQuery Transfer Numbers is a plugin that transfers numbers by flying from one element to another.
 *
 * Licensed under The MIT License
 *
 * @version         1.0.0
 * @since           10-03-2013
 * @author          Tom Rutka
 * @documentation   http://RunAstartup.com
 * @license         opensource.org/licenses/mit-license.php MIT
 * @package         jQuery Plugins
 *
 */
;
$.fn.transferN = function(options) {

  // proceed if target exists
  if( document.getElementById( options.target.substr(1)) && document.getElementById(this.attr('id')) ) {

    // set and cache values
    var interval   = '',
        unit       = $(this),
        tempUnit   = unit.clone(),
        targetUnit = $(options.target);
        speed      = ((options.speed) ? options.speed : 250);

    unit.shadow   = unit.css('text-shadow'); 
    unit.oldSize   = unit.css('font-size');    
    unit.oldValue  = parseInt(unit.text(), 10);
    unit.curValue  = parseInt(unit.text(), 10);
    targetUnit.orgValue = parseInt(targetUnit.text(), 10);

    // do not continue with negative numbers
  if (unit.oldValue > 0) {

    // give unique id to flying number
    tempUnit.attr('id', tempUnit.attr('id')+unit.oldValue);

    // going to fly each decrementing number with time interval
    interval = setInterval( function() {

      tempUnit
      .css({
        position: 'absolute',
        top: unit.offset().top,
        left: unit.offset().left,
        'font-size': unit.oldSize,
        'text-shadow': unit.shadow
      })
      // Reverse the number value flying
      .text(unit.oldValue - unit.curValue + 1);

        unit.curValue--;
        
        // decrement origin number
        unit.text(unit.curValue);

        // fly number from origin to destination
        $(tempUnit).appendTo('body').animate({
          top: targetUnit.offset().top,
          left: targetUnit.offset().left,
          'font-size': targetUnit.css('font-size')
          //'-webkit-transform': 'translate('+ pos.left +'px, '+ pos.top +'px)');
        }, {queue: false, duration: speed });
        
        // set destination number
        targetUnit.text( targetUnit.orgValue + (unit.oldValue - unit.curValue) );

        // stop counting if origin is 0
        if (unit.curValue === 0) {
          clearInterval(interval)
          tempUnit.fadeOut();
          
        }

      }, speed);

    } // if value > 0
    else {
      alert('Can\'t transfer 0');
    }
  
  return this;
  
  }
  else { 
    alert('A single target element with a unique ID is required.');
  }
};