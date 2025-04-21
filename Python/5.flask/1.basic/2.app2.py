from flask import Flask, request, jsonify, make_response

app = Flask (__name__)
users = [
    {'id' : 1 , 'name' : 'Join', 'age' : 25, 'phone' : '123-456-7890'},
    {'id' : 2 , 'name' : 'Join', 'age' : 34, 'phone' : '222-456-7890'},
    {'id' : 3 , 'name' : 'Bob', 'age' : 27, 'phone' : '333-456-7890'},
    {'id' : 4 , 'name' : 'Alice', 'age' : 46, 'phone' : '444-456-7890'},
]
@app.route('/')
def main():
    return "메인"

@app.route('/users')
def get_users():
    return jsonify(users) 
# header에 application/json도 넣고 dict로 json도 변환하고

@app.route('/users/<int:user_id>')
def get_user_by_id(user_id):
    user = None
    for u in users:
        if u['id'] == user_id:
            user = u
            break # 찾으면 중단, 효율적 검색

    # modern python 스타일 list comprehension
    # user = next((user for user in users if user['id' == user_id]), None)
    if user is not None:
        return jsonify(user)
    else:
        return jsonify({
            'error': 'User not found'
        }), 404
    
@app.route('/search') #/search?name=Alice
def search_user():
    query = request.args.get('name')
    if not query:
        data = {'error': 'Name is required. 한글테스트'}
        response = make_response(jsonify(data))
        response.headers["Content-Type"] = "application/json; charset=utf-8"
        return response
    
    results = [user for user in users if query.lower() in user['name'].lower()]
    return jsonify(results)
    

    
if __name__ =="__main__":
    app.run()