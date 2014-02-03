function init() {
    //http://calc.e-sim.lt/json-id-secura.php?id=3942
    //alert('location.host ' +  location.host);
    //alert('location.pathname ' +  location.pathname);
    debugger
    var user = {
        id : $('#userName').attr('href').split('=')[1]-0,
        login  : $('#userName').text(),
        strength : 0,
        well: Math.floor($('#healthBar').text()-0),
        noWeps : 0,
        q1Weps : 0,
        q2Weps : 0,
        q3Weps : 0,
        q4Weps : 0,
        q5Weps : 0,
        q5Foods : 0,
        q5Gifts : 0,
        foodLimit : $('#foodLimit').text()-0,
        giftLimit : $('#giftLimit').text()-0,
        maxDmg : 0, 
        minDmg : 0,
        totalDamage : 0,
        damageToday : 0,
        rank : 0, 
        currentServer : new String( window.location ).substr( new String( window.location ).indexOf( "http://", 0 ), new String( window.location ).indexOf( ".", 0 )-new String( window.location ).indexOf( "http://", 0 )+1)
}
        
        
$.each($('div.storageMini'), function() {
    var count = this.children[0].innerText; //значение  количества
    if (this.children[1].innerHTML.indexOf('Food')>0) {
        if (this.children[1].innerHTML.indexOf('q5')>0) {
            user.q5Foods = count-0;
        }
    }
    if (this.children[1].innerHTML.indexOf('Gift')>0) {
        if (this.children[1].innerHTML.indexOf('q5')>0) {
            user.q5Gifts = count-0;
        }
    }
    if (this.children[1].innerHTML.indexOf('Weapon')>0) {
        if (this.children[1].innerHTML.indexOf('q1')>0) {
            user.q1Weps = count-0;
        }
        if (this.children[1].innerHTML.indexOf('q2')>0) {
            user.q2Weps = count-0;
        }
        if (this.children[1].innerHTML.indexOf('q3')>0) {
            user.q3Weps = count-0;  
        }
        if (this.children[1].innerHTML.indexOf('q4')>0) {
            user.q4Weps = count-0;
        }
        if (this.children[1].innerHTML.indexOf('q5')>0) {
            user.q5Weps = count-0;
        }
    }
})
    
init_Millitary(user);
init_Economy(user);
    
   
        
}
