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


// user 送信
function sbmUser() {
    var user_msg = document.getElementById('sbm').value;
    if (user_msg != '') {
        sendMsg(user_msg, 'user');
        document.getElementById('sbm').value = "";
    }
    const obj = { msg: user_msg };
    const method = "POST";
    const body = Object.keys(obj).reduce((o, key) => (o.set(key, obj[key]), o), new FormData());
    const headers = {
        'Accept': 'application/json'
    };
    fetch("http://localhost:8000/msg", {
        method, mode: 'cors', headers, body
    }).then((res) => res.json())
        .then(function (res) {
            console.log(res.msg);
            sendSystem(res.msg);
        })
        .catch(console.error);
}

// システム側送信
function sendSystem(msg) {
    sendMsg(msg, 'system');
}


// enterキー操作
window.onkeydown = function (event) {
    var e = window.event;

    if (e.keyCode == 13) {
        sbmUser();
        return false;
    }
}