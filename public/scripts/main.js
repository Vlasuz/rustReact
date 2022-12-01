// function timerMilisec(parentClass, timerSecond) {
//   var timeElem = document.querySelector(parentClass + ' .timer'),
//       countdown = new Date(),
//       responseTime = new Date(Date.now() + (1000*timerSecond)); // таймер 10 секунд
//
//   function startTime() {
//     countdown.setTime(responseTime - Date.now());
//     timeElem.innerHTML =
//       // countdown.getUTCHours() + ':' +
//       // countdown.getUTCMinutes() + ':' +
//       '<div class="min"><span>' + ((countdown.getUTCSeconds() < 10) ? ('0' + countdown.getUTCSeconds()) : countdown.getUTCSeconds()) + '</span></div>' +
//
//       '<div class="sec"><span>.' + String(countdown.getUTCMilliseconds())[0] +
//       '' + (String(countdown.getUTCMilliseconds())[1] ? String(countdown.getUTCMilliseconds())[1] : '0') +
//
//        '</span></div>';
//     if(countdown.getUTCHours() > 0 || countdown.getUTCMinutes() > 0 || countdown.getUTCSeconds() > 0) {
//       requestAnimationFrame(startTime);
//     }
//     else {
//       timeElem.innerHTML = '<div class="min"><span>00</span></div><div class="sec"><span>.00</span></div>'
//     }
//   }
//   requestAnimationFrame(startTime);
// }


function timeDeadlineFunc(timeDeadline) {

  if( document.querySelector('section .min') ){

    function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }
     
    function initializeClock(id, endtime) {
      var clock = document.body;

      var daysSpan = 0;
      var hoursSpan = 0;
      var minutesSpan = 0;
      var secondsSpan = 0;

      if(clock.querySelector('section .day span'))
        daysSpan = clock.querySelector('section .day span');
      if(clock.querySelector('section .hour span'))
        hoursSpan = clock.querySelector('section .hour span');
      if(clock.querySelector('section .min span'))
        minutesSpan = clock.querySelector('section .min span');
      if(clock.querySelector('section .sec span'))
        secondsSpan = clock.querySelector('section .sec span');
     
      function updateClock() {
        var t = getTimeRemaining(endtime);
     
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
     
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }

      }
     
      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    }
     
    var deadline = new Date(timeDeadline); // for endless timer
    initializeClock('countdown', deadline);

  }

}

function timeDeadlineFuncAside(timeDeadline){

  if( document.querySelector('aside .min') ){

    function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }
     
    function initializeClock(id, endtime) {
      var clock = document.body;

      var daysSpan = 0;
      var hoursSpan = 0;
      var minutesSpan = 0;
      var secondsSpan = 0;

      if(clock.querySelector('aside .day span'))
        daysSpan = clock.querySelector('aside .day span');
      if(clock.querySelector('aside .hour span'))
        hoursSpan = clock.querySelector('aside .hour span');
      if(clock.querySelector('aside .min span'))
        minutesSpan = clock.querySelector('aside .min span');
      if(clock.querySelector('aside .sec span'))
        secondsSpan = clock.querySelector('aside .sec span');
     
      function updateClock() {
        var t = getTimeRemaining(endtime);
     
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
     
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }

      }
     
      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    }
     
    var deadline = new Date(timeDeadline); // for endless timer
    initializeClock('countdown', deadline);

  }

}





// document.querySelectorAll('.popup-new-room .popup-new-room__switcher li').forEach((btn, btnNum) => {
//
//   btn.onclick = function () {
//
//     for( let i of document.querySelectorAll('.popup-new-room .popup-new-room__switcher li') ){
//       i.classList.remove('li_active')
//     }
//     for( let i of document.querySelectorAll('.popup-new-room .popup__content-item') ){
//       i.classList.remove('popup__content-item_active')
//     }
//
//     this.classList.add('li_active')
//
//     document.querySelectorAll('.popup-new-room .popup__content-item')[btnNum].classList.add('popup__content-item_active')
//
//     if(document.querySelectorAll('.popup-new-room .popup__content-item')[btnNum].classList.contains('popup__content-item-clothes')){
//       document.querySelector('.popup-new-room .popup__content_rht').style.display = 'block';
//     } else {
//       document.querySelector('.popup-new-room .popup__content_rht').style.display = 'none';
//     }
//
//   }
//
// })



// if( document.querySelector('.inputs__item-sum input') ) {
//   document.querySelector('.inputs__item-sum input').addEventListener('keyup', function () {
//
//     if (this.value != '' && this.value > 0) {
//       this.closest('form').querySelector('button').removeAttribute('disabled')
//     } else {
//       this.closest('form').querySelector('button').setAttribute('disabled', 'disabled')
//     }
//
//   })
// }





// document.querySelectorAll('.storage .postamat__item').forEach(function (storItem) {
//
//   storItem.addEventListener('click', storItemClick)
//
//   function storItemsCheck() {
//
//     let sumItems = 0
//
//     for( let i = 0; i < document.querySelectorAll('.storage .postamat__item').length; i++ ){
//       if( document.querySelectorAll('.storage .postamat__item')[i].classList.contains('postamat__item_active') ){
//         sumItems++
//       }
//     }
//
//     return sumItems;
//
//   }
//
//   function storItemClick() {
//
//     storItem.classList.toggle('postamat__item_active')
//
//     let checkedItemsActive = storItemsCheck();
//
//     document.querySelector('.zone__count').innerText = checkedItemsActive
//
//     if( checkedItemsActive >= 1 ){
//
//       document.querySelector('.storage__zone .zone__empty').style.display = 'none';
//       document.querySelector('.storage__zone .zone__button').style.display = 'flex';
//
//     } else {
//
//       document.querySelector('.storage__zone .zone__empty').style.display = 'flex';
//       document.querySelector('.storage__zone .zone__button').style.display = 'none';
//
//     }
//
//   }
//
// })






skinsActive(document.querySelectorAll('.popup-add-coins-skins .skins__item'))
skinsActive(document.querySelectorAll('.skins__block .buy__set'))

function skinsActive(selector) {

  selector.forEach(function (item) {
    item.onclick = function () {
      this.closest('.skins__item').classList.toggle('skins__item_active')
    }
  })

}







// document.querySelectorAll('.balance__cost button').forEach(function (btn) {
//
//   btn.onclick = function () {
//
//     for( let a of document.querySelectorAll('.balance__cost li') ){
//       a.classList.remove('li_active')
//     }
//
//     this.closest('li').classList.toggle('li_active')
//   }
//
// })







// document.querySelectorAll('.input-pincode input').forEach(elem => {
//
//   var patternMask = IMask(elem, {
//     mask: '**** - **** - ****'
//   });
//
//   elem.addEventListener('keyup', function () {
//
//     if( this.value.length <= 17 ){
//       this.closest('form').querySelector('button').setAttribute('disabled', 'disabled')
//       return;
//     }
//     this.closest('form').querySelector('button').removeAttribute('disabled')
//
//   })
//
// })





document.querySelectorAll('.popup__close, .popup__bgd').forEach(function (close) {
  
  close.onclick = function () {
    document.querySelectorAll('.popup').forEach(function (pp) {
      pp.classList.remove('popup_active')
    })
  }

})

function openPopup(popup) {

  document.querySelectorAll('.popup__close, .popup__bgd').forEach(function (close) {
  
    document.querySelectorAll('.popup').forEach(function (pp) {
      pp.classList.remove('popup_active')
    })

  })

  document.querySelector('.popup-'+popup).classList.add('popup_active')

}

function openPopupChecking(popupPrev, popupSuccess, popupFail) {

  let time = 5;

  if( document.querySelector(`.popup-${popupPrev} input`).value == '1111 - 1111 - 1111' ){

    openPopup(popupSuccess)

  } else {

    openPopup(popupFail)
    time = 5;
    document.querySelector(`.popup-${popupFail} .code-fail__timer`).innerText = time;

    let timerFunc = setInterval(function () {

      time--;
      document.querySelector(`.popup-${popupFail} .code-fail__timer`).innerText = time;

    }, 1000)


    setTimeout(function () {

      document.querySelector(`.popup-add-coins-pin-code input`).value = '';
      openPopup('add-coins-pin-code')
      clearInterval(timerFunc)

    }, 5000)

  }
}















// function showNotice(notice) {
//
//   document.querySelector('.section-right__notice .notice__'+notice).classList.add('notice__item_active')
//
//   setTimeout(function () {
//     document.querySelector('.section-right__notice .notice__'+notice).classList.remove('notice__item_active')
//   }, 2000)
//
// }





// if( document.querySelector('.lang__button') ) {
//   document.querySelector('.lang__button').addEventListener('click', function () {
//     this.parentNode.classList.toggle('header__lang_active')
//   })
// }





function sumCountItems(container) {

  if( container[0] ){

    container.forEach(list => {

      for( let i = 0; i <= list.querySelectorAll('li').length; i++ ){

        let a = i - 3
        
        if( i >= 3 && list.querySelectorAll('li')[i] ){

          list.querySelectorAll('li')[i].style.display = 'none';

          list.querySelector('.count').classList.add('count_active')
          list.querySelector('.count').innerHTML = "+"+a

        }

      }

    })

  }

}

sumCountItems(document.querySelectorAll('.list-players'))
sumCountItems(document.querySelectorAll('.section-history__item'))
sumCountItems(document.querySelectorAll('.resources__clothes .clothes__body'))

// document.querySelectorAll('.count.count_active').forEach(function (count) {
//
//   count.onclick = function () {
//
//     if(this.closest('ul')){
//
//       for( let it of this.closest('ul').querySelectorAll('li') ){
//         it.style.display = 'flex'
//       }
//
//       this.remove()
//     }
//
//   }
//
// })



function deleteItems(itemsForDelete, closestItemClass) {

  itemsForDelete.forEach(function (hisItem) {
    hisItem.onclick = function () {

      let th = this.closest('.' + closestItemClass)

      // console.log(closestItemClass)
      this.closest('.' + closestItemClass).classList.add(closestItemClass + '_deleted')
      setTimeout(function () {
        th.remove()
      }, 300)

    }
  })

}

deleteItems(document.querySelectorAll('.section-history__item .item__delete'), 'section-history__item')
deleteItems(document.querySelectorAll('.cart__item .item__delete'), 'cart__item')
deleteItems(document.querySelectorAll('.popup-pull__item .item__delete'), 'popup-pull__item')








//
// document.querySelectorAll('.clothes__head').forEach(function (clHead) {
//   clHead.onclick = function () {
//
//     this.parentNode.querySelector('.clothes__body').classList.toggle('clothes__body_active')
//
//   }
// })


// for( let tab of document.querySelectorAll('.tabs li') ){
//
//   tab.addEventListener('click', function (e) {
//     e.preventDefault();
//
//     document.querySelectorAll('.tabs li').forEach(item => { item.classList.remove('li_active') })
//     this.classList.add('li_active')
//
//     let arrNum = Array.from(document.querySelectorAll('.tabs li')).indexOf(tab)
//
//
//     document.querySelectorAll('.tabs__item').forEach(item => { item.classList.remove('tabs__item_active') })
//     document.querySelectorAll('.tabs__item')[arrNum].classList.add('tabs__item_active')
//
//   })
//
// }


// for( let chItem of document.querySelectorAll('.chatting__item') ){
//   chItem.querySelector('.item__menu').addEventListener('click', function () {
//
//
//     if( this.closest('.item__inner').querySelector('.item__dropdown').classList.contains('item__dropdown_active') ){
//       this.closest('.item__inner').querySelector('.item__dropdown').classList.remove('item__dropdown_active')
//     } else {
//       for( let drp of document.querySelectorAll('.chatting__item .item__dropdown') ){
//         drp.classList.remove('item__dropdown_active')
//       }
//       this.closest('.item__inner').querySelector('.item__dropdown').classList.add('item__dropdown_active')
//     }
//
//   })
// }

if( document.querySelector('.section-right__bottom input') ) {
  document.querySelector('.section-right__bottom input').addEventListener('keyup', function () {
    document.querySelector('.section-right__bottom .maxl').innerHTML = this.value.length + '/150';
  })
}


// for( let close of document.querySelectorAll('.notice-bottom__close') ){
//   close.addEventListener('click', function () {
//     this.closest('.notice-bottom').classList.add('notice-bottom_remove')
//   })
// }


document.querySelectorAll('.section-right__top .top__item').forEach(function (itemTop, itemTopNum) {

  itemTop.addEventListener('click', function () {

    for( let itemTop1 of document.querySelectorAll('.section-right__switcher .section-right__item') ){
      itemTop1.classList.remove('section-right_active')
    }
    for( let itemTop1 of document.querySelectorAll('.section-right__top .top__item') ){
      itemTop1.classList.remove('top__item_active')
    }

    document.querySelectorAll('.section-right__switcher .section-right__item')[itemTopNum].classList.add('section-right_active')
    this.classList.add('top__item_active')

  })
})


if( document.querySelector('.section-right__airdrop .sleepers__buy') ){
  document.querySelector('.section-right__airdrop .sleepers__buy').onclick = function () {
    document.querySelector('.section-right__notice .notice__sleepers-bought').classList.add('notice__item_active')

    setTimeout(function () {
      document.querySelector('.section-right__notice .notice__sleepers-bought').classList.remove('notice__item_active')
    }, 2000)
  }
}


if(document.querySelector('.postamat__cart')){

  document.querySelectorAll('.postamat__item').forEach(function (btn) {
    btn.onclick = function () {
      document.querySelector('.section-right__notice .notice__add-cart').classList.add('notice__item_active')

      setTimeout(function () {
        document.querySelector('.section-right__notice .notice__add-cart').classList.remove('notice__item_active')
      }, 2000)
    }
  })

}

// document.querySelectorAll('.airdrop__sleepers li').forEach(function (sleepers) {
//   sleepers.addEventListener('click', function () {
//
//     for( let btn of document.querySelectorAll('.airdrop__sleepers li') ){
//       btn.querySelector('button').classList.remove('button_active')
//     }
//
//     this.querySelector('button').classList.add('button_active')
//
//   })
// })

// document.querySelectorAll('.section-right__airdrop .airdrop__move ul li').forEach(function (btn) {
//
//   if( document.querySelector('.section-map__map') ) {
//     moveSleepers(btn)
//   }
//
// })
//
// function moveSleepers(sleeper) {
//
//   let currentDroppable = null;
//
//   sleeper.querySelector('button').addEventListener('mousedown', function (event) {
//
//     sleeper.style.position = 'absolute';
//     sleeper.style.zIndex = 1000;
//
//     let ii = sleeper;
//     let cX = 0;
//     let cY = 0;
//
//     sleeper.classList.add('sleepers__item_moved')
//
//     document.querySelector('body').append(sleeper);
//
//     moveAt(event.pageX, event.pageY)
//
//     function moveAt(pageX, pageY){
//       cX = pageX - sleeper.offsetWidth / 2;
//       cY = pageY - sleeper.offsetHeight / 2;
//
//       sleeper.style.left = cX + 'px';
//       sleeper.style.top = cY + 'px';
//     }
//
//     function onMouseMove(event) {
//       moveAt(event.pageX, event.pageY);
//
//       sleeper.style.display = 'none';
//       let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
//       sleeper.style.display = 'flex';
//
//       if(!elemBelow) return;
//
//       let droppableBelow = elemBelow.closest('.section-map__map')
//
//       if( currentDroppable != droppableBelow ){
//
//         if(currentDroppable){
//           leaveMap(sleeper)
//         }
//         currentDroppable = droppableBelow;
//         if(currentDroppable){
//           overMap(sleeper)
//         }
//
//       }
//
//     }
//
//     function leaveMap(item){
//       currentDroppable.classList.remove('point-inner')
//
//       // currentDroppable.append(item)
//     }
//     function overMap(item){
//       currentDroppable.classList.add('point-inner')
//
//       document.querySelector('body').append(sleeper);
//     }
//
//     document.addEventListener('mousemove', onMouseMove)
//
//     document.onmouseup = function () {
//       document.removeEventListener('mousemove', onMouseMove);
//       sleeper.onmouseup = null;
//
//       sleeper.style.left = cX - currentDroppable.getBoundingClientRect().left + 'px';
//       sleeper.style.top = cY - currentDroppable.getBoundingClientRect().top + 'px';
//       currentDroppable.append(ii);
//
//     }
//
//     sleeper.ondragstart = function() {
//       return false;
//     };
//
//   })
// }

// let pointXOfScale = 0
// let pointYOfScale = 0
// if(document.querySelector('.section-map__map')){
//
//   let boundingTop = document.querySelector('.section-map__map').getBoundingClientRect().top
//   let boundingLeft = document.querySelector('.section-map__map').getBoundingClientRect().left
//   let sum = 1;
//
//   let mousemovePointScale = function (event) {
//     pointXOfScale = event.offsetX
//     pointYOfScale = event.offsetY
//
//     // console.log(event.offsetX)
//   }
//
//   document.querySelector('.map__points').addEventListener('mousemove', mousemovePointScale)
//
//   document.querySelector('.section-map__map').addEventListener('wheel', function (event) {
//
//
//     this.style.transformOrigin = `${pointXOfScale}px ${pointYOfScale}px`;
//
//     let count = event.deltaY / 100;
//
//     boundingTop = document.querySelector('.section-map__map').getBoundingClientRect().top;
//     boundingLeft = document.querySelector('.section-map__map').getBoundingClientRect().left;
//
//     sum -= count;
//
//     if( sum > 0.99 ){
//       this.style.transform = `scale(${sum})`;
//     } else if (sum < 0.8){
//       sum = 1
//       this.style.transform = `scale(${sum})`;
//     }
//     return;
//   })
//
//   document.querySelector('.section-map__map').onmousedown = function (event) {
//
//     if( !event.target.closest('.sleepers__item') ){
//
//       let map = this;
//
//       let shiftX = event.clientX - map.getBoundingClientRect().left;
//       let shiftY = event.clientY - map.getBoundingClientRect().top;
//
//       moveAt(event.clientX, event.clientY);
//
//       function onMouseMove(event){
//         moveAt(event.clientX, event.clientY)
//       }
//
//       function moveAt(pageX, pageY){
//
//         let coodX = pageX - shiftX - boundingLeft;
//         let coodY = pageY - shiftY - boundingTop;
//
//         map.style.left = coodX + 'px';
//         map.style.top = coodY + 'px';
//
//         // map.style.transform = `translate(${-coodX}px, ${-coodY}px)`
//
//       }
//
//       document.addEventListener('mousemove', onMouseMove);
//
//       document.onmouseup = function () {
//         document.removeEventListener('mousemove', onMouseMove);
//         document.onmouseup = null;
//       }
//
//       map.ondragstart = function() {
//         return false;
//       };
//
//     }
//   }
//
// }





// document.querySelectorAll('.pererab .postamat__item').forEach(function (postItem) {
//   let currentDroppable = null;
//
//   postItem.onmousedown = function (event) {
//
//       let currentDroppable = null;
//       let postItemThis = this;
//
//       let shiftX = event.clientX - postItemThis.getBoundingClientRect().left;
//       let shiftY = event.clientY - postItemThis.getBoundingClientRect().top;
//
//       function onMouseMove(event){
//
//         document.querySelector('body').append(postItem)
//
//         postItem.classList.add('pererab__item_moved')
//         postItem.style.position = 'absolute';
//         postItem.style.zIndex = 9;
//
//         moveAt(event.clientX, event.clientY)
//
//         postItem.style.display = 'none';
//         let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
//         postItem.style.display = 'flex';
//
//         if(!elemBelow) return;
//
//         let droppableBelow = elemBelow.closest('.pererab__zone')
//
//         if(!currentDroppable){
//           document.onmouseup = function () {
//             document.removeEventListener('mousemove', onMouseMove);
//             document.onmouseup = null;
//
//             postItem.classList.remove('pererab__item_moved')
//             postItem.style.position = 'relative';
//             postItem.style.left = 'auto';
//             postItem.style.top = 'auto';
//
//             document.querySelector('.pererab .postamat__block').append(postItem)
//
//             checkLengthList(document.querySelectorAll('.zone__list ul li').length)
//           }
//         }
//
//         if( currentDroppable != droppableBelow ){
//
//           if(currentDroppable){
//             document.querySelector('.pererab__zone').style.background = 'transparent';
//           }
//           currentDroppable = droppableBelow;
//           if(currentDroppable){
//             droppableBelow.style.background = '#26293b';
//             document.onmouseup = function () {
//               document.removeEventListener('mousemove', onMouseMove);
//               document.onmouseup = null;
//
//               postItem.classList.remove('pererab__item_moved')
//               postItem.style.position = 'relative';
//               postItem.style.left = 'auto';
//               postItem.style.top = 'auto';
//
//               droppableBelow.querySelector('ul').append(postItem)
//
//               checkLengthList(document.querySelectorAll('.zone__list ul li').length)
//             }
//           }
//         }
//
//       }
//
//       function checkLengthList(length) {
//
//         if( length > 0 ){
//           document.querySelector('.pererab__zone .zone__empty').style.display = 'none';
//           document.querySelector('.pererab__button .zone__empty').style.display = 'none';
//           document.querySelector('.pererab__zone').style.background = 'transparent';
//
//           document.querySelector('.zone__done').style.display = 'flex';
//
//         } else {
//           document.querySelector('.pererab__zone').style.background = 'transparent';
//           document.querySelector('.pererab__zone .zone__empty').style.display = 'flex';
//           document.querySelector('.pererab__button .zone__empty').style.display = 'flex';
//
//           document.querySelector('.zone__done').style.display = 'none';
//         }
//
//         let sumCoins = 0;
//         for( let i = 0; i < document.querySelectorAll('.zone__list li').length; i++ ){
//           sumCoins += +document.querySelectorAll('.zone__list li')[i].querySelector('.item__price').innerText
//         }
//
//         document.querySelector('.zone__done .rht span').innerText = sumCoins
//
//       }
//
//       function moveAt(pageX, pageY){
//
//         let coodX = pageX - shiftX;
//         let coodY = pageY - shiftY;
//
//         postItemThis.style.left = coodX + 'px';
//         postItemThis.style.top = coodY + 'px';
//
//       }
//
//       document.addEventListener('mousemove', onMouseMove);
//
//       document.onmouseup = function (e) {
//
//         document.removeEventListener('mousemove', onMouseMove);
//         document.onmouseup = null;
//
//         if(!e.target.closest('.zone__list')){
//
//           e.target.closest('.section-right__item').querySelector('.pererab__zone ul').append(postItem)
//           checkLengthList(document.querySelectorAll('.zone__list ul li').length)
//
//         } else {
//
//           e.target.closest('.section-right__item').querySelector('.postamat__block').append(postItem)
//           checkLengthList(document.querySelectorAll('.zone__list ul li').length)
//
//         }
//
//       }
//
//       postItemThis.ondragstart = function() {
//         return false;
//       };
//
//   }
//
// })






function itemZoneDelete(container) {

  container.querySelectorAll('.popup-new-room__zone .li__delete').forEach((del) => {

    del.onclick = function () {
      this.closest('.popup').querySelector('.popup-new-room__list').append(this.closest('li'))

      checkListLi(container)
    }

  })

}

function checkListLi(container) {

  if( container.querySelectorAll('.popup-new-room__zone ul li').length > 0 && container.querySelector('.popup-new-room__zone p') ){
    container.querySelector('.popup-new-room__zone p').style.display = 'none';
  } else {
    container.querySelector('.popup-new-room__zone p').style.display = 'block';
  }

}

// document.querySelectorAll('.popup-new-room__list .popup-new-room__item').forEach(function (postItem) {
//   let currentDroppable = null;
//   postItem.onmousedown = function (event) {
//
//       let currentDroppable = null;
//       let postItemThis = this;
//
//       let shiftX = event.clientX - postItemThis.getBoundingClientRect().left;
//       let shiftY = event.clientY - postItemThis.getBoundingClientRect().top;
//
//
//       function onMouseMove(event){
//
//         document.querySelector('body').append(postItem)
//
//         postItem.style.position = 'absolute';
//         postItem.style.zIndex = 999;
//
//         moveAt(event.clientX, event.clientY)
//
//         postItem.style.display = 'none';
//         let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
//         postItem.style.display = 'flex';
//
//         if(!elemBelow) return;
//
//         let droppableBelow = elemBelow.closest('.popup-new-room__zone')
//
//
//         function movedNotInZone() {
//
//           document.onmouseup = function (e) {
//             document.removeEventListener('mousemove', onMouseMove);
//             document.onmouseup = null;
//
//             postItem.style.position = 'relative';
//             postItem.style.left = 'auto';
//             postItem.style.top = 'auto';
//
//             document.querySelector('.popup-new-room__list').append(postItem)
//
//             checkListLi(e.target.closest('.popup'))
//
//           }
//
//         }
//
//
//         if(!currentDroppable) movedNotInZone()
//
//         if( currentDroppable != droppableBelow ){
//
//           if(currentDroppable){
//             document.querySelector('.popup-new-room__zone').style.background = 'transparent';
//           }
//
//           currentDroppable = droppableBelow;
//
//           if(currentDroppable){
//             droppableBelow.style.background = '#26293b';
//             document.onmouseup = function (e) {
//               document.removeEventListener('mousemove', onMouseMove);
//               document.onmouseup = null;
//
//               postItem.style.position = 'relative';
//               postItem.style.left = 'auto';
//               postItem.style.top = 'auto';
//
//               droppableBelow.querySelector('ul').append(postItem)
//
//               checkListLi(e.target.closest('.popup'))
//
//             }
//           }
//
//         }
//
//       }
//
//       function moveAt(pageX, pageY){
//
//         let coodX = pageX - shiftX;
//         let coodY = pageY - shiftY;
//
//         postItemThis.style.left = coodX + 'px';
//         postItemThis.style.top = coodY + 'px';
//
//       }
//
//       document.addEventListener('mousemove', onMouseMove);
//
//       document.onmouseup = function (e) {
//
//         document.removeEventListener('mousemove', onMouseMove);
//         document.onmouseup = null;
//
//         if( !e.target.closest('.li__delete') ){
//
//           e.target.closest('.popup').querySelector('.popup-new-room__zone ul').append(postItem)
//           checkListLi(e.target.closest('.popup'))
//
//         }
//
//         itemZoneDelete(e.target.closest('.popup'))
//
//       }
//
//       postItemThis.ondragstart = function() {
//         return false;
//       };
//
//
//   }
// })





function toggleFunctions(container, closestItem) {

  container.forEach(item => {

    item.onclick = function () {
      this.closest('.' + closestItem).classList.toggle(closestItem + '_active')
    }

  })

}

// toggleFunctions(document.querySelectorAll('.item__type_clothes'), 'list-games__item')
toggleFunctions(document.querySelectorAll('.section-faq__item .item__head'), 'section-faq__item')



function fightSelect(selector) {

  let lenActive = 0

  // document.querySelectorAll(selector + ' button').forEach(function (btn, btnNum) {
  //
  //   btn.onmousemove = function () {
  //     let attr = btn.getAttribute('data-persone')
  //     document.querySelector('.'+attr).classList.add('img_hover')
  //   }
  //   btn.onmouseout = function () {
  //     let attr = btn.getAttribute('data-persone')
  //     document.querySelector('.'+attr).classList.remove('img_hover')
  //   }
  //   btn.onclick = function () {
  //     let attr = btn.getAttribute('data-persone')
  //     document.querySelector('.'+attr).classList.toggle('img_clicked');
  //     btn.classList.toggle('button_active')
  //     let checkNumberClicked = 0;
  //
  //     for( let check of document.querySelectorAll(selector + ' button') ){
  //       if( check.classList.contains('button_active') ){
  //         checkNumberClicked++;
  //       }
  //     }
  //
  //     let arrayOfName = ['n', 'n', 'n'];
  //
  //     for( let check1 of document.querySelectorAll(selector + ' button') ){
  //
  //       if(checkNumberClicked > 1 && !check1.classList.contains('button_active') ){
  //         check1.classList.add('button_disabled')
  //       } else {
  //         check1.classList.remove('button_disabled')
  //       }
  //
  //
  //       if( check1.classList.contains('button_active') ){
  //         let numOfButtons = Array.from(document.querySelectorAll(selector + ' button')).indexOf(check1)
  //         arrayOfName[numOfButtons] = 's';
  //       }else{
  //         let numOfButtons = Array.from(document.querySelectorAll(selector + ' button')).indexOf(check1)
  //         arrayOfName[numOfButtons] = 'n';
  //       }
  //
  //     }
  //
  //     if( selector == '.section-fight__select' ){
  //
  //
  //       let nameOfImage = 'persone-'+arrayOfName.join('')+'.png';
  //
  //       document.querySelector('.persone__start images').setAttribute('src', 'images/'+nameOfImage)
  //
  //     }
  //
  //
  //   }
  //
  // })

  document.querySelectorAll('.section-fight__persone img').forEach((imgItem) => {

    if( !document.querySelector('.section-fight__confetti') ){

      let btn = document.querySelector(`button[data-persone="${imgItem.classList.value.split(' ')[0]}"]`)

      imgItem.addEventListener('mousemove', function () {

        if(imgItem.classList.value){
          imgItem.classList.add('img_hover')
          document.querySelector(`button[data-persone="${imgItem.classList.value.split(' ')[0]}"]`).classList.add('button_hover')
        }

      })
      imgItem.addEventListener('mouseout', function () {

        if(imgItem.classList.value){
          imgItem.classList.remove('img_hover')
          document.querySelector(`button[data-persone="${imgItem.classList.value.split(' ')[0]}"]`).classList.remove('button_hover')
        }

      })
      imgItem.onclick = function (event) {

        if(imgItem.classList.value){

          lenActive = 0

          btn.click()

          for( let imgCheck of event.target.closest('.section-fight__persone').querySelectorAll('images') ){
            if( imgCheck.classList.contains('img_clicked') ){
              lenActive++;
            }
          }

          if ( lenActive > 2 ){
            btn.click()
            return
          }

        }

      }

    }

  })

}

// fightSelect('.section-fight__select')
// fightSelect('.section-fight__select-hit')

// function minusingCoins() {
//   let minusCoinsCount = +document.querySelector('.resources__coins_minus span').innerText
//
//   let minusCounts = setInterval(function () {
//     for( minusCoinsCount; minusCoinsCount >= 0; ){
//       document.querySelector('.resources__coins_minus span').innerText = minusCoinsCount--;
//       break;
//     }
//     if( minusCoinsCount == -1 ){
//       document.querySelector('.resources__coins_minus').classList.add('resources__coins_none')
//       clearInterval(minusCounts)
//     }
//   }, 20)
// }

// if(document.querySelector('.section-fight__confetti')){
//
//   setTimeout(function () {
//     document.querySelector('.section-fight__confetti_active images').setAttribute('src', 'images/confetti.webp')
//     document.querySelector('.section-fight__confetti_active').style.opacity = '1';
//
//     minusingCoins();
//
//   }, 3000)
//
// }







if( document.querySelector('.section-right__cart .buttons__buy') ){

  document.querySelector('.section-right__cart .buttons__buy').onclick = function () {

    document.querySelector('.postamat__cart_full').classList.remove('postamat__cart_show')
    document.querySelector('.postamat__cart_empty').classList.add('postamat__cart_show')

    document.querySelector('.section-right__cart-bought').classList.add('section-right__cart_active')

  }

}

if(document.querySelector('.postamat__cart_full')){

  document.querySelector('.postamat__cart_full').onclick = function () {
    document.querySelector('.section-right__cart').classList.toggle('section-right__cart_active')
  }
  document.querySelector('.section-right__cart .buttons__back').onclick = function () {
    document.querySelector('.section-right__cart').classList.toggle('section-right__cart_active')
  }

  document.querySelector('.cart-bought__close').onclick = function () {
    document.querySelector('.section-right__cart').classList.remove('section-right__cart_active')
    document.querySelector('.section-right__cart-bought').classList.remove('section-right__cart_active')
  }

}





// if( document.querySelector('.resources__button') ) {
//   document.querySelector('.resources__button').onclick = function () {
//     document.querySelector('.section-right__rules').classList.toggle('section-right__rules_active')
//     this.classList.toggle('resources__button_active')
//   }
// }

document.querySelectorAll('.smiles__switches button').forEach(function (sw) {

  sw.onclick = function () {
    
    for( let sw2 of document.querySelectorAll('.smiles__switches button') ){
      sw2.closest('li').classList.remove('li_active')
    }

    sw.closest('li').classList.add('li_active')
  }

})
