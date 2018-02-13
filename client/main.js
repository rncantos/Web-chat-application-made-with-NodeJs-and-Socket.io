var socket = io.connect('http://192.168.1.136:6677',{'forceNew': true});

socket.on('messages', function(data){
    console.log(data);
    render(data);
});

function render(data){
    var html = data.map(function(message, index){
        return (`
            <div class="message">
                <stron>${message.nickname}</stron>
                <p>${message.text}</p>
            </div>
        `);
    }).join(' ');

    var div_mgs = document.getElementById('messages')
    div_mgs.innerHTML = html;
    div_mgs.scrollTop = div_mgs.scrollHeight;
}

function addMessage(e){
    var message = {
        nickname: document.getElementById('nickname').value,
        text: document.getElementById('text').value
    };

    document.getElementById('nickname').style.display = 'none';
    socket.emit('add-message', message);

    return false;
}