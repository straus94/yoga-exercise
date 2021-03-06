window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

       //timer
       let deadLine = '2019-04-30';

       function getTimeRemaining(endTime) {
           let t = Date.parse(deadLine) - Date.parse(new Date());
           let seconds = Math.floor((t/1000) % 60),
               minutes = Math.floor((t / 1000 / 60) % 60),
               hours = Math.floor((t / (1000 * 60 * 60)));
   
           return {
               'total' : t,
               'hours' : hours,
               'minutes' : minutes,
               'seconds' : seconds
           };
       }
   
       function setClock(id, endTime) {
           let timer = document.getElementById(id),
               hours = timer.querySelector('.hours'),
               minutes = timer.querySelector('.minutes'),
               seconds = timer.querySelector('.seconds'),
               timeInterval = setInterval(updateClock, 1000);
   
           
           function updateClock() {
               let t = getTimeRemaining(endTime);
               if (t.hours < 10) {
                   hours.textContent = "0" + t.hours;
               } else {
                   hours.textContent = t.hours;
               }
               
               if (t.minutes < 10) {
                   minutes.textContent = "0" + t.minutes;
               } else {
                   minutes.textContent = t.minutes;
               }
               
   
               if (t.seconds < 10) {
                   seconds.textContent = "0" + t.seconds;
               } else {
                   seconds.textContent = t.seconds;
               }
               
   
               if (t.total < 0) {
                   clearInterval(timeInterval);
               }
           }
       }
   
       setClock('timer', deadLine);

//modal

    let more = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        close = document.querySelector(".popup-close");

    more.addEventListener('click', function() {
        console.log("done");
        overlay.style.display = "block";
        this.classList.add("more-splash");
        document.body.style.overflow = "hidden";
    });

    close.addEventListener("click", function() {
        overlay.style.display = "none";
        more.classList.remove("more-splash");
        document.body.style.overflow = "";
    });

});

