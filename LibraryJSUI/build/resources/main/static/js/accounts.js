$(document).ready(function () {

    var $accounts = $('#accounts');
    var accountTemplate = $('#account-template').html();

    function addAccount(account) {
        $accounts.append(Mustache.render(accountTemplate,account))
    }

    try{
        var url_string = (window.location.href);
        var url = new URL(url_string);
        var token = url.searchParams.get("token");
    } catch (e) {
        alert("Could not find a token")
    }

    $.ajax({
        url: 'http://localhost:8081/Account/listAll',
        headers:{
            'Authorization' : token
        },

        type: 'GET',
        dataType:'json',
        data: "",
        success: function (accounts) {
            $.each(accounts,function (i,account) {
                if (account.active ===1) {
                    addAccount(account);
                }
            });
        },
        error: function () {
            alert("could not load accounts");
        }
    });

    $accounts.delegate('.delete','click',function () {
        var $tr = $(this).closest('tr');
        $.ajax({
            url: 'http://localhost:8081/Account/delete/' + $(this).attr('data-id'),
            headers:{
                'Authorization' : token
            },
            type: 'DELETE',
            crossDomain:true,
            crossOrigin:true,
            success: function () {
                $tr.remove();
            },
            error: function () {
                alert("could not load accounts");
            }
        });
    });

    $accounts.delegate('.edit','click',function () {
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('token');
        var url = "/account-edit/" + $(this).attr('data-id') + "?token=" + myParam;
        return window.location = url;

    });
});