from bottle import *
import json

# レスポンス
res_msg = {
    'ok': 'success',
    'msg': 'Fuck you!'
}

# トークを受け取る


@post('/msg')
def getUserMsg():
    msg = request.forms.msg
    print(msg)

    body = json.dumps(res_msg)
    r = HTTPResponse(status=200, body=body)
    r.set_header('Content-Type', 'application/json')
    r.set_header('Access-Control-Allow-Origin', '*')
    return r


run(host='0.0.0.0', port='8000', debug=True, reloader=True)
