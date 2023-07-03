const rightBtnSec2 = $('.r-btn.section-2');
const leftBtnSec2 = $('.l-btn.section-2');



rightBtnSec2.on('click', (eventData)=>{
    const slideContent = $('.product-slide.section-2');
    slideContent.scrollLeft(1920);
    eventData.preventDefault();
});
leftBtnSec2.on('click', (eventData)=>{
    const slideContent = $('.product-slide.section-2');
    slideContent.scrollLeft(-1920);
    eventData.preventDefault();
});
    
const rightBtnSec3 = $('.r-btn.section-3');
const leftBtnSec3 = $('.l-btn.section-3');



rightBtnSec3.on('click', (eventData)=>{
    const slideContent = $('.product-slide.section-3');
    slideContent.scrollLeft(1920);
    eventData.preventDefault();
});
leftBtnSec3.on('click', (eventData)=>{
    const slideContent = $('.product-slide.section-3');
    slideContent.scrollLeft(-1920);
    eventData.preventDefault();
});

const rightBtnSec4 = $('.r-btn.section-4');
const leftBtnSec4 = $('.l-btn.section-4');



rightBtnSec4.on('click', (eventData)=>{
    const slideContent = $('.product-slide.section-4');
    slideContent.scrollLeft(1920);
    eventData.preventDefault();
});
leftBtnSec4.on('click', (eventData)=>{
    const slideContent = $('.product-slide.section-4');
    slideContent.scrollLeft(-1920);
    eventData.preventDefault();
});



