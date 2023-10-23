const model = document.createElement('div');
model.id='modal';
document.body.appendChild(model);

const images = document.querySelectorAll('.img');
images.forEach(image=>{
   image.addEventListener('click',()=>{
         model.classList.add('active');
         const img = document.createElement('img');
         img.src=image.src;
         img.id='img';
         model.append(img);
   })
});

model.addEventListener('click',()=>{
     model.classList.remove('active'); 
});