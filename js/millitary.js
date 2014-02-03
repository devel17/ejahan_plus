/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function init_Millitary(user) {
    if (location.pathname == "/battle.html") {
        $.getJSON(user.currentServer + "e-sim.org/apiCitizenById.html", {
            id: user.id
        },
        function(json) {
            user.noWeps = (user.q5Foods + user.q5Gifts+1)*5-user.q1Weps-user.q2Weps-user.q3Weps-user.q4Weps-user.q5Weps;
            user.noWeps = (user.noWeps < 0) ? 0 : user.noWeps;
            user.strength = json.strength;
            user.damageToday = json.damageToday;
            if (json.rank=="Rookie") user.rank = 1;
            if (json.rank=="Private") user.rank = 1.1;
            if (json.rank=="Private First Class") user.rank = 1.2;
            if (json.rank=="Corporal") user.rank = 1.3;
            if (json.rank=="Sergeant") user.rank = 1.4;
            if (json.rank=="Staff Sergeant") user.rank = 1.5;
            if (json.rank=="Sergeant First Class") user.rank = 1.6;
            if (json.rank=="Master Sergeant") user.rank = 1.65;
            if (json.rank=="First Sergeant") user.rank = 1.7;
            if (json.rank=="Sergeant Major") user.rank = 1.75;
            if (json.rank=="Command Sergeant Major") user.rank = 1.8;
            if (json.rank=="Sergeant Major of the Army") user.rank = 1.85;
            if (json.rank=="Second Lieutenant") user.rank = 1.9;
            if (json.rank=="First Lieutenant") user.rank = 1.93;
            if (json.rank=="Captain") user.rank = 1.96;
            if (json.rank=="Major") user.rank = 2;
            if (json.rank=="Lieutenant Colonel") user.rank = 2.03;
            if (json.rank=="Colonel") user.rank = 2.06;
            if (json.rank=="Brigadier General") user.rank = 2.1;
            if (json.rank=="Major General") user.rank = 2.12;
            if (json.rank=="Lieutenant General") user.rank = 2.14;
            if (json.rank=="General") user.rank = 2.16;
            if (json.rank=="General of the Army") user.rank = 2.18;
            if (json.rank=="Marshall") user.rank = 2.2;
            if (json.rank=="Field Marshall") user.rank = 2.22;
            if (json.rank=="Supreme Marshall") user.rank = 2.24;
            if (json.rank=="Generalissimus") user.rank = 2.26;
        
            var regionBonus = 1.2;
            var defenceSystem = 1;
            var militaryUnit = 1.2;
            var regionDebuff = 1; 
            var buffSteroids = 1;
            var buffBunker = 1;
            var buffSewerGuide = 1;
            var debuffSteroids = 1;
            var debuffBunker = 1;
            var debuffSewerGuide = 1;
            var buffTank = 1;
            
            var Q0 = user.strength*0.5*user.rank*regionBonus*defenceSystem*militaryUnit*regionDebuff*buffSteroids*buffBunker*buffSewerGuide *debuffSteroids*debuffBunker*debuffSewerGuide;
            var Q1 = user.strength*1.2*user.rank*regionBonus*defenceSystem*militaryUnit*regionDebuff*buffSteroids*buffBunker*buffSewerGuide *debuffSteroids*debuffBunker*debuffSewerGuide;
            var Q2 = user.strength*1.4*user.rank*regionBonus*defenceSystem*militaryUnit*regionDebuff*buffSteroids*buffBunker*buffSewerGuide *debuffSteroids*debuffBunker*debuffSewerGuide;
            var Q3 = user.strength*1.6*user.rank*regionBonus*defenceSystem*militaryUnit*regionDebuff*buffSteroids*buffBunker*buffSewerGuide *debuffSteroids*debuffBunker*debuffSewerGuide;
            var Q4 = user.strength*1.8*user.rank*regionBonus*defenceSystem*militaryUnit*regionDebuff*buffSteroids*buffBunker*buffSewerGuide *debuffSteroids*debuffBunker*debuffSewerGuide;
            var Q5 = user.strength*2.0*user.rank*regionBonus*defenceSystem*militaryUnit*regionDebuff*buffSteroids*buffBunker*buffSewerGuide*buffTank *debuffSteroids*debuffBunker*debuffSewerGuide;
                
            var damageQ0 = Math.floor(Q0)*user.noWeps;
            var damageQ1 = Math.floor(Q1)*((user.q5Foods+user.q5Gifts >= 30) ? (user.q1Weps < 155 ? user.q1Weps : 155-user.q5Weps-user.q4Weps-user.q3Weps-user.q2Weps) : (user.q5Foods+user.q5Gifts+1)*5);
            var damageQ2 = Math.floor(Q2)*user.q2Weps;
            var damageQ3 = Math.floor(Q3)*user.q3Weps;
            var damageQ4 = Math.floor(Q4)*user.q4Weps;
            var damageQ5 = Math.floor(Q5)*user.q5Weps;
            

            

            //my stats
            $('body').append("<div id = 'userMillitaryStat1' class = 'mystat' ></div></td>");
            var realDamage = (damageQ0+damageQ1+damageQ2+damageQ3+damageQ4+damageQ5);
            $('#userMillitaryStat1').append(' Real Damage - <b>' + realDamage + "</br>");
            var q1RealDamage = Math.floor(Q1)*(user.q5Foods+user.q5Gifts+1)*5;
            $('#userMillitaryStat1').append(' Q1 Real Damage - <b>' + q1RealDamage + "</br>");
            var q1FullDamage = Math.floor(Q1)*(user.foodLimit+user.giftLimit+1)*5;
            $('#userMillitaryStat1').append(' Full Damage with Q1 - <b>' + q1FullDamage + "</br>");
            //checkMaxLimits(user.id, '#userMillitaryStat');
            $('#userMillitaryStat1').append('------------------------------------------</br>');
            
            var q1BerserkDamage = Math.floor(Q1)*5;
            $('#userMillitaryStat1').append(' Berserk Damage with Q1 - <b>' + q1BerserkDamage + "</br>");
            var q2BerserkDamage = Math.floor(Q2)*5;
            $('#userMillitaryStat1').append(' Berserk Damage with Q2 - <b>' + q2BerserkDamage + "</br>");
            var q3BerserkDamage = Math.floor(Q3)*5;
            $('#userMillitaryStat1').append(' Berserk Damage with Q3 - <b>' + q3BerserkDamage + "</br>");
            var q4BerserkDamage = Math.floor(Q4)*5;
            $('#userMillitaryStat1').append(' Berserk Damage with Q4 - <b>' + q4BerserkDamage + "</br>");
            var q5BerserkDamage = Math.floor(Q5)*5;
            $('#userMillitaryStat1').append(' Berserk Damage with Q5 - <b>' + q5BerserkDamage + "</br>");
            debugger;
            
            //setTimeout($('#google_image_div').empty(), 1000)
            //analizeOpponents();
            setInterval(function() {
                document.title = $('.countdown_amount').text() + ' - ' + $('#defenderPercent').text() + ' - ' + $("[href ^= 'region']:eq(1)").text();
            }, 1000);   
            
        });   
        
        //        var url = user.currentServer + "e-sim.org/apiFights.html?battleId=" + $("input[type^='hidden']")[1].value + "&roundId=" + $("option:last")[0].value;
        //        
        //        var users = [];
        //        $.getJSON(url, function(json) {
        //            $.each(json, function () {
        //                var tmp = {
        //                    id: this.citizenId, 
        //                    hit : this.damage-0, 
        //                    mu : this.militaryUnit, 
        //                    berserk : this.berserk , 
        //                    localizationBonus : this.localizationBonus,
        //                    muBonus : this.militaryUnitBonus, 
        //                    weapon : this.weapon,
        //                    defenderSide : this.defenderSide
        //                    };
        //                users.push(tmp);
        //            });
        //            console.log(users);
        //        });
        analizeOpponents();
    }
    
    
    
    if (location.pathname == "/myMilitaryUnit.html" || location.pathname == "/militaryUnit.html") {
        debugger;
        var url = user.currentServer + "e-sim.org/apiMilitaryUnitMembers.html?id=";
        $("a[href ^='militaryUnit.html?id=']").each(function () { 
            $.getJSON(url+this.href.split('=')[1], function(data) {
                for(i=0;i<data.length;i++) {
                    $('a[href ^= profile.html?id=' + data[i].id +']').append(' (Dmg: ' + data[i].damageToday + ")");
                }
            })
        });
        
    //        $('div.testDivblue:eq(3)').find('a[href ^= profile]').each(function () {
    //            var i = 1;
    //            var id = this.href.split('=')[1];
    //            setTimeout(function () {
    //                $.getJSON(user.currentServer + "e-sim.org/apiCitizenById.html?id=" + id, 
    //                    function(json) {
    //                        $('a[href ^= profile.html?id=' + json.id +']').append(' (Dmg: ' + json.damageToday + ")");
    //                    });
    //            }, i*1000);
    //            i++;
    //        });
    }
    
    
    function analizeOpponents () {
        //        $('#userMillitaryStat').append("<div id = 'attakerMillitaryStat' class = 'attakerstat' ></div></td>");
        //        $('#userMillitaryStat').append("<div id = 'defenderMillitaryStat' class = 'defenderstat' ></div></td>");
        $('div.testDivwhite:first').append("<div id = 'userMillitaryStat'><b>Statistics :</b></div>");
        
        debugger;
        $('#userMillitaryStat').append("<table id = 'jtable' class='defTbl' style = 'width : 100%' ></table>");
        $('.defTbl').append('<tr><td>Nick</td> <td>Strength</td> <td>Rank</td> <td>Damage today</td> <td>Limits</td></tr>');
                
        //        attTable.append($('<tr>').append('<td>Nick</td>'));
        
        
        //        $('#userMillitaryStat').append("<div id = 'defenderMillitaryStat' ><b>Defenders</b></br></div>");
        $('div.testDivwhite:last').append($("<div id='tmp' style = 'display: none;'></div>"));
        
        $('table:eq(5) td:first').find('a[href ^= profile]:lt(3)').each(function () {
            //            $.getJSON("http://localhost/stat?callback=?&id=" + this.href.split('=')[1], 
            $.getJSON(user.currentServer + "e-sim.org/apiCitizenById.html?id=" + this.href.split('=')[1], 
                function(json) {
                    //                $('a[href ^= profile.html?id='+ json.id + ']').append("<div id = " + json.login +" >" + json.damageToday + "</div>");
                    var limits ="";
                    $('#tmp').load("citizenAchievements.html?id=" + json.id, function() {
                        if ($("div.collectedAchievements:last div.achievement a[href='achievement.html?type=OWN_HOUSE']").size() != 0 ) {
                            limits = limits + "15";
                        } else {
                            limits = limits + "10";
                        }
                        limits = limits + "/";
                        if ($("div.collectedAchievements:last div.achievement a[href='achievement.html?type=OWN_ESTATE']").size() != 0 ) {
                            limits = limits + "15";
                        } else {
                            limits = limits + "10";
                        }
                        //                        $('#defenderMillitaryStat').append( json.login + "-" + json.strength + "-"+ json.rank + "-"+ json.damageToday + "-" + limits + "</br>" );  
                        $('.defTbl').append("<tr><td>" + json.login + "</td> - <td>" + json.strength + "</td>-<td>"+ json.rank + "</td>-<td>"+ json.damageToday + "</td>-<td>" + limits + "</td></tr>")
                        
                        $('#tmp').empty();
                    //$(destination).append(' Limits - <b>' + limits + "</b>;");
                    });
                //$('#defenderMillitaryStat').append('</br>'); 
                });
        });
//        $(document).ready(function(){
//            $('#jtable').dataTable({
//                 "aaSorting": [[ 4, "desc" ]]
//            });
//        });
        //        $('#userMillitaryStat').append("<div id = 'attakerMillitaryStat'  ><b>Attakers</b></br></div>");
        $('#userMillitaryStat').append("<table class='attTbl' style = 'width : 100%' ></table>");
        $('table:eq(6) td:eq(2)').find('a[href ^= profile]:lt(3)').each(function () {
            $.getJSON(user.currentServer + "e-sim.org/apiCitizenById.html?id=" + this.href.split('=')[1], 
                function(json) {
                    //                $('a[href ^= profile.html?id='+ json.id + ']').append("<div id = " + json.login +" >" + json.damageToday + "</div>");
                    var limits ="";
                    $('#tmp').load("citizenAchievements.html?id=" + json.id, function() {
                        if ($("div.collectedAchievements:last div.achievement a[href='achievement.html?type=OWN_HOUSE']").size() != 0 ) {
                            limits = limits + "15";
                        } else {
                            limits = limits + "10";
                        }
                        limits = limits + "/";
                        if ($("div.collectedAchievements:last div.achievement a[href='achievement.html?type=OWN_ESTATE']").size() != 0 ) {
                            limits = limits + "15";
                        } else {
                            limits = limits + "10";
                        }
                        //$(destination).append(' Limits - <b>' + limits + "</b>;");
                        //                        $('#attakerMillitaryStat').append( json.login + "-" + json.strength + "-"+ json.rank + "-"+ json.damageToday + "-" + limits + "</br>" );  
                        $('.attTbl').append("<tr><td>" + json.login + "</td> - <td>" + json.strength + "</td>-<td>"+ json.rank + "</td>-<td>"+ json.damageToday + "</td>-<td>" + limits + "</td></tr>")
                        $('#tmp').empty();
                    });
                //                    checkMaxLimits(json.id, '#attakerMillitaryStat');
                //$('#attakerMillitaryStat').append('</br>'); 
                });
        });
    }
    
    /**
     *определяет наличие домов и дач
     **/
    function checkMaxLimits(id, destination) {
        
    }
    

}

