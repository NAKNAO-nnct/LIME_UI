from bottle import *
import json

# レスポンス
res_msg = {
    'ok': 'success',
    'msg': 'Fuck you!'
}


@get('/')
def index():
    return template('index')


@post('/msg')
def getUserMsg():
    msg = request.forms.msg
    print(msg)

    body = json.dumps(res_msg)
    r = HTTPResponse(status=200, body=body)
    r.set_header('Content-Type', 'application/json')
    r.set_header('Access-Control-Allow-Origin', '*')
    return r


@route('/css/<filename>')
def route_css(filename):
    return static_file(filename, root='views/css/', mimetype='text/css')


@route('/js/<filename>')
def route_js(filename):
    return static_file(filename, root='views/js/', mimetype='text/javascript')


@route('/img/<filename>')
def route_images(filename):
    return static_file(filename, root='views/img/')


run(host='0.0.0.0', port='8000', debug=True, reloader=True)
