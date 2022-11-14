let myDiv = $('<div>Click here</div>');

let body = $('body');

body.append(myDiv);

let myUl = $('<ul></ul>');

body.append(myUl);



myDiv.on('click', () => {
    //event.preventDefault();
    let textInput = $('#theInput');
    let myLi = $(`<li>${textInput.val()}</li>`);
     myUl.append(myLi);
     textInput.val(''); //clears text for input
    
    });

    body.css({
        backgroundColor: "green",
        color: "white"
    });






