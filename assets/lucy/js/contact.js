/*------------------------------------------
 Contact form
 ------------------------------------------*/

$(document).ready(function () {

    $("#contact_form").submit(function(e){

        e.preventDefault();
        var $ = jQuery;

        var postData 		= $(this).serializeArray(),
            formURL 		= $(this).attr("action"),
            $cfResponse 	= $('#response'),
            $cfsubmit 		= $("#submit"),
            cfsubmitText 	= $cfsubmit.text();

        $cfsubmit.text("Sending...");


        $.ajax(
            {
                url : formURL,
                type: "POST",
                data : postData,
                success:function(data)
                {
                    $cfResponse.html(data);
                    $cfsubmit.text(cfsubmitText);
                    $("#contact_form")[0].reset();
                },
                error: function(data)
                {
                    alert("Error occurd! Please try again");
                    $cfsubmit.text(cfsubmitText);
                }
            });

        return false;

    });
    //email subscription 
    $('#subscription-form').submit(function(e) {
        e.preventDefault();
        var $form           = $('#subscription-form');
        var submit          = $('#subscribe-button');
        var ajaxResponse    = $('#subscription-response');
        var email           = $('.subscriber-email').val();

        $.ajax({
            type: 'POST',
            url: 'php/subscribe.php',
            dataType: 'json',
            data: {
                email: email
            },
            cache: false,
            beforeSend: function(result) {
                submit.val("Joining...");
            },
            success: function(result) {
                if(result.sendstatus == 1) {
                    ajaxResponse.html(result.message);
                    $form.fadeOut(500);
                } else {
                    ajaxResponse.html(result.message);
                    submit.val("Join");
                }
            }
        });

        return false;

    });



});

