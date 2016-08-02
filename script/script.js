/**
 * Created by pavelko_r on 02.08.2016.
 */

// * js обробітник події click по днях, який би робив
// наступне - день отримує відповідний класнейм чи атрибут,
// що відображає його як вибраний (кружечок під числом);
// якщо я натискаю на інший день, то попередній день втрачає підсвітку,
// а обраний її отримує.



var APP = {
    init: function () {
        var _self = this;
        var items = document.getElementsByTagName("li");
        for(item in items){
            if(items.hasOwnProperty(item)){
                items[item].addEventListener("click", function( ev ) {
                    _self.clear_selected();
                    var target = ev.target || ev.srcElement;
                    target.innerHTML = '<span class="selected">'+target.innerHTML+'</span>';

                }, false);
            }
        }
    },
    clear_selected: function() {
        var items = document.getElementsByClassName('selected');
        for ( item in items ){
            if ( items.hasOwnProperty( item ) ) {
                items[item].outerHTML = items[item].innerHTML;
            }
        }
    }
};
document.addEventListener("DOMContentLoaded", APP.init());
