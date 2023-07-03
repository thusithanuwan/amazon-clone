const rightBtn = $('.r-btn');
const leftBtn = $('.l-btn');



rightBtn.on('click', (eventData)=>{
    const slideContent = $('.product-slide');
    slideContent.scrollLeft(1920);
    eventData.preventDefault();
});
leftBtn.on('click', (eventData)=>{
    const slideContent = $('.product-slide');
    slideContent.scrollLeft(-1920);
    eventData.preventDefault();
});

