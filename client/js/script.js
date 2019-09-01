function sendMsg(msg, speaker) {
    var system_img = "";

    if (speaker == 'system') {
        system_img = `
            <div class="media-left">
                <figure class="image is-64x64">
                    <img src="./img/waifu.png" alt="Image">
                </figure>
            </div>
         `;
    }

    let template = `
            <div>
                <article class="media">
                ${system_img}
                    <div class="box">
                        <div class="media-content">
                            <div class="content">
                                <p>
                                ${msg}
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            `;
    document.getElementById('conversation').innerHTML += template;
}


// user input
function sbmUser() {
    var user_msg = document.getElementById('sbm').value;
    if (user_msg != '') {
        sendMsg(user_msg, 'user');
        document.getElementById('sbm').value = "";
    }
}

function sendSystem() {
    var msg = "";
    sendMsg(msg, 'system');
}



window.onkeydown = function (event) {
    var e = window.event;

    if (e.keyCode == 13) {
        sbmUser();
        return false;
    }
}