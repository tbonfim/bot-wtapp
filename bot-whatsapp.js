
let message = "EU SOU ROBO DO BOLSONARO";
((message, stop, intervalTime = 1000) => {
    
    const eventFire = (el, etype) => {
		var evt = document.createEvent("MouseEvents");
		evt.initMouseEvent(etype, true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);
		el.dispatchEvent(evt);
	};

    let interval = setInterval( () => {
        let messageBox = document.querySelectorAll("[contenteditable='true']")[0];

        //add text into input field
        messageBox.innerHTML = message.replace(/  /gm,'');

        //Force refresh
        event = document.createEvent("UIEvents");
        event.initUIEvent("input", true, true, window, 1);
        messageBox.dispatchEvent(event);
        
        // click send Button
         eventFire(document.querySelector('span[data-icon="send"]'), 'click');
        
    } , intervalTime);

    // stop condition
    if( stop ) {
        setTimeout(() => clearInterval(interval), stop );
    }
})(message, 10000, 2500);


