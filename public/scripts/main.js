




function deleteItems(itemsForDelete, closestItemClass) {

  itemsForDelete.forEach(function (hisItem) {
    hisItem.onclick = function () {

      let th = this.closest('.' + closestItemClass)

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



if( document.querySelector('.section-right__bottom input') ) {
  document.querySelector('.section-right__bottom input').addEventListener('keyup', function () {
    document.querySelector('.section-right__bottom .maxl').innerHTML = this.value.length + '/150';
  })
}

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







function toggleFunctions(container, closestItem) {

  container.forEach(item => {

    item.onclick = function () {
      this.closest('.' + closestItem).classList.toggle(closestItem + '_active')
    }

  })

}

toggleFunctions(document.querySelectorAll('.section-faq__item .item__head'), 'section-faq__item')








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


document.querySelectorAll('.smiles__switches button').forEach(function (sw) {

  sw.onclick = function () {

    for( let sw2 of document.querySelectorAll('.smiles__switches button') ){
      sw2.closest('li').classList.remove('li_active')
    }

    sw.closest('li').classList.add('li_active')
  }

})
