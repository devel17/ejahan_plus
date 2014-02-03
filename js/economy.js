/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function init_Economy(user) {
    //alert("economy");
    debugger;
    if (location.pathname == "/productMarket.html"){
        $('body').append("<div id = 'resByCountries' class = 'mystat' ></div></td>");
        var btnCountries = $("<button>countries</button>").click(function(){
            var urlApiCountries  = user.currentServer + "e-sim.org/apiCountries.html";
            var RESOURCE = $("input:checked[name='resource']")[0].value;
            var QUALITY = $("select option:selected:last")[0].value;
            $("div.testDivblue:last").empty();
            $(".dataTable").parent().empty();
            $("div.testDivblue:last").append('<h1>' + RESOURCE + (QUALITY == 0 ? "" : ' - ' + QUALITY) + '</h1> ');
            $("div.testDivblue:last").append("<table id = 'resTable' class='resTable' style = 'width : 100% ;' ></table>");
            
            $('.resTable').append('<tr><td>Country</td> <td>Stock</td> <td>Price</td> <td>Total</td> <td>Ratio</td> <td>Amount</td> <td>Price(Gold)</td> <td>Total(Gold)</td></tr>');    
            
            $.getJSON(urlApiCountries, function (data) {
                $.each(data, function () {
                    setTimeout(function(id, RESOURCE, QUALITY){
                        return function(){
                            $.ajax({
                                url: user.currentServer + "e-sim.org/productMarket.html", 
                                data : "resource="+RESOURCE+"&countryId="+id+"&quality="+QUALITY,
                                success: function( data ) {
                                    var table = $(data).find('.dataTable');
                                    var price = $(table).children().children()[1].children[3].innerText;
                                    var stock = $(table).children().children()[1].children[2].innerText-0;
                                    var i = 2;
                                    while(true) {
                                        if ($(table).children().children()[i].children[3].innerText == price && stock < 20000){
                                            stock+= $(table).children().children()[i].children[2].innerText-0;
                                        } else {
                                            break;
                                        }
                                        i++;
                                    }
                                    
                                    var flag = $(table).children().children()[1].children[3].children[0];
                                    var total = stock*(price.split(" ")[0]-0.0);
                                    debugger
                                    //                                    $("div:eq(108)").append(flag).append(" --- " + stock + " --- " + price + " --- " +  total);
                                    $('.resTable').append("<tr><td><div id ='country" + id + "'>" + flag.src.split('/')[7].split('.')[0] +"</div></td> <td><div id = 'stock" + id + "'>" + stock + "</div></td> <td><div id = 'price" + id + "'>" + price + " </div></td> <td><div id='total" + id + "'>" + total.toFixed(4) + "</div></td> <td><div id='ratio"+ id +"'></div></td> <td><div id='amount"+id+"'></div></td> <td><div id='priceingold"+id+"'></div></td> <td><div id='totalingold"+id+"'></div></td></tr>");    
                                    
                                    $.ajax({
                                        url : user.currentServer + "e-sim.org/monetaryMarket.html",
                                        data : "buyerCurrencyId=" + id + "&sellerCurrencyId=0",//0 - gold
                                        success : function ( data ) {
                                            var table = $(data).find('.dataTable:first');
                                            var amount = $(table).children().children()[1].children[1].innerText.trim().split(' ')[0]-0;
                                            var ratio =  $(table).children().children()[1].children[2].innerText.trim().split('=')[1].trim().split(' ')[0]-0.0;
                                            var i=2;
                                            while(true) {
                                                if ($(table).children().children()[i].children[2].innerText.trim().split('=')[1].trim().split(' ')[0]-0.0 == ratio){
                                                    amount += $(table).children().children()[i].children[1].innerText.trim().split(' ')[0]-0;
                                                } else {
                                                    break;
                                                }
                                                i++;
                                            }
                                            amount = amount + ' ' + $(table).children().children()[1].children[1].innerText.trim().split(' ')[1];
                                            
                                            $("#ratio"+id).append(ratio);
                                            $("#amount"+id).append(amount);
                                            $("#priceingold"+id).append((($("#price"+id).text().split(" ")[0]-0.0)*ratio).toFixed(4));
                                            $("#totalingold"+id).append((($("#total"+id).text()-0)*ratio).toFixed(4));
                                        //                                    $("div:eq(108)").append(" --- " + ratio + " --- " + amount + "<br/>");
                                        }
                                    });
                                }
                            });
                        }
                    }(this.id, RESOURCE, QUALITY),1000*this.id);
                });
            });
        //        $(document).ready(function(){
        //            $('#resTable').dataTable({
        //                 "bSort": true,
        //                 "aaSorting": [[ 6, "asc" ]]
        //            });
        //        });
        //        $('.resTable tr td').height('5px');
        });
        $('#resByCountries').append(btnCountries);    
    }
}
