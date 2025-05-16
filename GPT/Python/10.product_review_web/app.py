from flask import Flask, render_template, request, redirect, url_for
import sqlite3
import random
import os

app = Flask(__name__)

# 데이터베이스 초기화
def init_db():
    conn = sqlite3.connect('reviews.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS reviews
        (id INTEGER PRIMARY KEY AUTOINCREMENT, 
        review TEXT NOT NULL, 
        stars INTEGER NOT NULL, 
        image_id INTEGER NOT NULL,
        time TIMESTAMP DEFAULT CURRENT_TIMESTAMP)
    ''')
    conn.commit()
    conn.close()

@app.route('/', methods=['GET', 'POST'])
def index():
    # 무작위 이미지 선택 (1부터 4까지)
    image_number = random.randint(1, 4)
    image_filename = f'image{image_number}.jpg'

    conn = sqlite3.connect('reviews.db')
    cursor = conn.cursor()
    
    if request.method == 'POST':
        review_text = request.form.get('review')
        stars = int(request.form.get('stars'))
        image_id = image_number  # 선택된 이미지 번호를 저장
        cursor.execute('INSERT INTO reviews (review, stars, image_id) VALUES (?, ?, ?)', (review_text, stars, image_id))
        conn.commit()
        return redirect(url_for('index'))

    cursor.execute('SELECT id, review, stars, image_id, time FROM reviews')
    reviews = cursor.fetchall()
    conn.close()
    db_reviews = [{'id': row[0], 'review': row[1], 'stars': row[2], 'image_id': row[3], 'time': row[4]} for row in reviews]

    return render_template('index.html', reviews=db_reviews, image_filename=image_filename)

@app.route('/review/<int:review_id>', methods=['DELETE'])
def delete_review(review_id):
    conn = sqlite3.connect('reviews.db')
    cursor = conn.cursor()
    cursor.execute('DELETE FROM reviews WHERE id = ?', (review_id,))
    conn.commit()
    conn.close()
    return '', 204

if __name__ == '__main__':
    init_db()
    app.run(debug=True)