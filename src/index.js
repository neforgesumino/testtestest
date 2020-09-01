import './style/style.css';

function getClassnameWithoutDot(className) {
   return className.split('.')[1];
}

const ClassNames = {
   cardDesc: '.product-card__desc',
   cardHoverDesc: '.product-card__desc--focus',
   cardLeft: '.product-card__desc--left',
   card: '.for-purchase__item-card',
   selected: '.for-purchase__item-card--selected',
   disabled: '.for-purchase__item-card--disabled',
   buyButton: '.for-purchase__button-text',
   itemWrapper: '.for-purchase__item',
   secondCard: '.product-card-second',
   hidden: '.hidden'
}

function toggleDescription(card, showNormal) {
   const cardDesc = card.querySelector(ClassNames.cardDesc);
   const cardHoverDesc = card.querySelector(ClassNames.cardHoverDesc);

   if (showNormal) {
      cardDesc.classList.remove(getClassnameWithoutDot(ClassNames.hidden));
      cardHoverDesc.classList.add(getClassnameWithoutDot(ClassNames.hidden));
   } else {
      cardDesc.classList.add(getClassnameWithoutDot(ClassNames.hidden));
      cardHoverDesc.classList.remove(getClassnameWithoutDot(ClassNames.hidden));
   }
}

function onCardClick() {
   let onMouseEnter;
   let onMouseLeave;

   return (e) => {
      const { target } = e;
      const card = target.closest(ClassNames.card);

      onMouseEnter = onMouseEnter || toggleDescription.bind(null, card, false);
      onMouseLeave = onMouseLeave || toggleDescription.bind(null, card, true);

      card.classList.toggle(getClassnameWithoutDot(ClassNames.selected));

      const isSelected = card.classList.contains(getClassnameWithoutDot(ClassNames.selected));

      if (isSelected) {
         card.addEventListener('mouseenter', onMouseEnter);
         card.addEventListener('mouseleave', onMouseLeave);
      } else {
         onMouseLeave();

         card.removeEventListener('mouseenter', onMouseEnter);
         card.removeEventListener('mouseleave', onMouseLeave);
      }
   };
}
function onBuyButtonClick(button) {
   const card = button.closest(ClassNames.itemWrapper).querySelector(ClassNames.card);

   card.click();
}

document.addEventListener('DOMContentLoaded', () => {
   const cards = document.querySelectorAll(`${ClassNames.card}:not(${ClassNames.disabled})`);
   const buyButtons = document.querySelectorAll(ClassNames.buyButton);

   cards.forEach(card => {
      card.addEventListener('click', onCardClick());

      if (card.matches(ClassNames.secondCard)) {
         card.click();
      }
   });
   buyButtons.forEach(b => b.addEventListener('click', () => onBuyButtonClick(b)));
});
