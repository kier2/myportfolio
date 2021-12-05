const progressBars = document.querySelectorAll('.tools-item')

progressBars.forEach(element => {
   const widthValue = element.querySelector('.bar-inner').textContent
   const bar = element.querySelector('.bar-inner')

   bar.style.width = widthValue
})