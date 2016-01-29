/**
 * Part of card project.
 *
 * @copyright  Copyright (C) 2016 {ORGANIZATION}. All rights reserved.
 * @license    GNU General Public License version 2 or later.
 */

$(document).ready(function($)
{

    var resizable = $('.resizable');

    resizable.resizable({
        handles: "all"
    }).draggable({
        // handle: 'div.drag-handle'
    }).find('.editable').dblclick(function(event) {
        $(this).focus();
    });


    $('#to-pdf').click(function(event)
    {
        var pdf = new jsPDF('l', 'pt', [600, 350]);
        //pdf.canvas.height = 450;
        //pdf.canvas.width = 600;

        //html2pdf(document.documentElement.innerHTML, pdf, function(pdf){
        pdf.addHTML($('#workspace'), function(){
            var iframe = document.createElement('iframe');
            iframe.setAttribute('style','position:absolute;right:0; top:0; bottom:0; height:100%; width:500px');
            document.body.appendChild(iframe);
            iframe.src = pdf.output('datauristring');
        });
    });
});
