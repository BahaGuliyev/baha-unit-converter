let daxilEl=document.getElementById("daxil-el")
let lengthEl=document.getElementById("length-el")
let volumeEl=document.getElementById("volume-el")
let massEl=document.getElementById("mass-el")

daxilEl.addEventListener('change', (event) => {
    lengthEl.textContent=daxilEl.value+" meters = " + parseFloat(3.28084*daxilEl.value).toFixed(3) + " feet | "+ daxilEl.value +" feet = "+parseFloat(daxilEl.value*0.3048).toFixed(3) + " meters"
    volumeEl.textContent=daxilEl.value+" liters = " + parseFloat(0.2641722*daxilEl.value).toFixed(3) + " gallons | "+ daxilEl.value + " gallons = "+parseFloat(daxilEl.value*3.785411784).toFixed(3) + " liters"
    massEl.textContent=daxilEl.value+" kilos = " + parseFloat(2.20462*daxilEl.value).toFixed(3) + " pounds | "+ daxilEl.value + " pounds = "+ parseFloat(daxilEl.value*0.453592).toFixed(3) + " kilos"
  });