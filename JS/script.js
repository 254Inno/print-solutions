///-------------------DOM selectors

const quotation = document.querySelector('.quote-gen');
const getQuotation = document.querySelector('.nav__top--quote');
const closeQuotation = document.querySelector('.quote-gen__close');
const selectedMaterial = document.querySelector('.select')
const quoteBtn = document.querySelector('.quote-btn')
const materialWidth = document.querySelector('.quote-gen__input--width')
const materialHeight = document.querySelector('.quote-gen__input--height')
const checkBox = document.querySelector('.checkbox')
const totalCoast = document.querySelector('.total-value')

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

getQuotation.addEventListener('click', function(){
   quotation.classList.toggle('hide-checkbox')
})
closeQuotation.addEventListener('click', function(){
   quotation.classList.toggle('hide-checkbox')
})

///
quoteBtn.addEventListener('click', quotationCalc)