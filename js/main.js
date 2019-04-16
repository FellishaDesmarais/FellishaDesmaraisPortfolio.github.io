// when the document has fully loaded do this run this function
$(document).ready(function(){
    // Init ScrollMagic
    // let controller = new ScrollMagic.Controller();

    // //build a scene
    // let ourScene = new ScrollMagic.Scene({
    //     triggerElement: '#project01 img',
    //     // duration: '90%', makes a fade out that is responsive
    //     triggerHook: 0.9
    // })
    // //add class to project one
    // .setClassToggle('#project01', 'fade-in')
    // .addIndicators({
    //     name: 'fade scene',
    //     colorTrigger: 'black',
    //     colorStart: 'pink',
    //     colorEnd: 'black'
    // })
    // .addTo(controller);
    
// how to create a scene for multiple elements
    // Init ScrollMagic
    
    // what turns the scroll bar into a conroller
    let controller = new ScrollMagic.Controller();

    //pin the intro
    let pinIntroScene = new ScrollMagic.Scene({
        triggerElement:'#intro',
    //  how long it is on screen before it scrolls away
        triggerHook:0,
        duration: '20%'
    }) 
    .setPin('#intro', {pushFollowers: false})
    .addTo(controller);
    //loop through each .project element 
    // building an each loop so it will perform this action on every project
    $('.project').each(function(){
    //build a scene
    let ourScene = new ScrollMagic.Scene({
        //change project to this
        triggerElement: this.children[0],
        // makes a fade out that is responsive
        // duration: '100%',
        // triggerHook: 0.9
    })


    //add class to project one
    .setClassToggle(this, 'fade-in')
    .addIndicators({
        name: 'fade scene',
        colorTrigger: 'black',
        colorStart: 'pink',
        colorEnd: 'black'
    })
    .addTo(controller);
	
    });
});



















