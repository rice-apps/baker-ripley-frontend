import React from 'react'


const DemographicTypeForm = typeformEmbed.makePopup(
  'https://hackrice.typeform.com/to/tIRk4I',
  {
    mode: 'popup',
    autoClose: 3000,
    hideHeaders: true,
    hideFooters: true,
    onSubmit: function () {
      console.log('Typeform successfully submitted')
    }
  }
)

reference.open()

// setTimeout(function(){
//   reference.close()
//  }, 10000) // NOTE: In this code, the typeform will automatically open, then automatically close 10 seconds later
