///-------------------DOM selectors
const body = document.querySelector('body');

function quoteMechanism(){

   const quoteWindow = `<div class="quote-gen hide-checkbox">
   <div class="quote-gen__container">
   <div class="quote-gen__close">
       <svg class="quote-gen__close--icon">
           <use xlink:href="sprite.svg#circle-x"></use>
       </svg>
   </div>
   <header class="quote-gen__head">
       Quote generator

       <span></span>
   </header>

   <div class="quote-gen__input--dropdown">
       <select class="select" name="material" id="material">
           <option value="Banner" selected>Banner</option>
           <option value="Sticker">Sticker</option>
           <option value="WindowGraphics" >Window graphics</option>
           <option value="ReflectiveSticker">Reflective sticker</option>
           <option value="ReflectiveBanner" >Reflective banner</option>
           <option value="Satin" >Satin</option>
           <option value="No cut" disabled >No cut</option>
           <option value="clearSticker" disabled >Clear Sticker</option>
       </select>
   </div>
   <div class="quote-gen__input--measurement">
       <input type="number" placeholder="Width in meters" class="quote-gen__input--width" required>
       <input type="number" placeholder="Hight in meters" class="quote-gen__input--height" required>
   </div>
   <div class="quote-gen__input-checkbox">
       <label class="quote-gen__input--checkbox"><p>Tick if not designed</p>
           <input type="checkbox" class="checkbox">
           <span class="checkmark"></span>
       </label>
       </div>
   <div class="quote-gen__input--btn quote-btn">
       <input type="button" class="quote-gen__input-btn quote-btn btn" value="Generate">
   </div>

   <div class="quote-gen__total">
      <p>Total</p> <span class="total-value">Ksh. 0.00</span>
   </div>
</div>

</div>`

   body.insertAdjacentHTML('beforeend', quoteWindow)
   
}

quoteMechanism();

const quotation = document.querySelector('.quote-gen');
const getQuotation = document.querySelector('.nav__top--quote');
const closeQuotation = document.querySelector('.quote-gen__close');
const selectedMaterial = document.querySelector('.select')
const quoteBtn = document.querySelector('.quote-btn')
const materialWidth = document.querySelector('.quote-gen__input--width')
const materialHeight = document.querySelector('.quote-gen__input--height')
const checkBox = document.querySelector('.checkbox')
const totalCoast = document.querySelector('.total-value')
const mobileLinks = document.querySelector('.nav__mobile--links')
const mobileBars = document.querySelector('.mobileBars')


//----------Quote gen generator



//-------Calculating Quotation

function quotationCalc(){
   let material = selectedMaterial.value;
   let calcWidth = Number(materialWidth.value);
   let calcHeight = Number(materialHeight.value);
   let design = checkBox.checked;
   let perMeterSqrCoast = 500;
   let designCoast = 0;


//--------------checking material
   if(material == 'Banner'){
      perMeterSqrCoast = 600;
   }else if(material == 'Sticker'){
      perMeterSqrCoast = 650;
   }else if(material == 'WindowGraphics'){
      perMeterSqrCoast = 900;
   }else if(material == 'ReflectiveSticker'){
      perMeterSqrCoast = 1100;
   }else if(material == 'ReflectiveBanner'){
      perMeterSqrCoast = 1000;
   }else if(material == 'Satin'){
      perMeterSqrCoast = 800;
   }

   ///--------checking design
checkBox.checked? designCoast = 300 : designCoast = 0;


///----------------Calculate and Render result

totalCoast.textContent = `Ksh. ${((perMeterSqrCoast * calcWidth * calcHeight) + designCoast).toFixed(2)}`
}


///------------Event listeners


// quote opener
getQuotation.addEventListener('click', function(){
   quotation.classList.toggle('hide-checkbox')
})

// quotation closing
closeQuotation.addEventListener('click', function(){
   quotation.classList.toggle('hide-checkbox')
})

/// quotation calc
quoteBtn.addEventListener('click', quotationCalc)

/// mobile opening and closing

mobileBars.addEventListener('click', () => {
   mobileLinks.classList.toggle('hide')
})
mobileLinks.addEventListener('click', () => {
   mobileLinks.classList.toggle('hide')
})