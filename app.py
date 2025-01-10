import os
from flask import Flask, render_template, request, jsonify
from psycopg2 import pool

app = Flask(__name__)

# Use environment variables for database credentials
DATABASE_URL = os.environ.get('DATABASE_URL')

# Initialize connection pool
db_pool = pool.SimpleConnectionPool(1, 20, DATABASE_URL)

def get_db_connection():
    try:
        connection = db_pool.getconn()
        if connection.closed:
            raise Exception("Connection is closed")
        return connection
    except Exception as e:
        print(f"Error getting connection: {e}")
        return None

def release_db_connection(conn):
    db_pool.putconn(conn)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/view_articles')
def view_articles():
    return render_template('view_articles.html')

@app.route('/register', methods=['GET', 'POST'])
def registration_form():
    if request.method == 'POST':
        data = request.form
        team_name = data['team-name']
        school = data['school']
        coach_name = data['coach-name']
        members_count = data['members-count']
        members_info = data['members-info']
        topic = data['pdf-file']

        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute('''
                INSERT INTO registrations (team_name, school, coach_name, members_count, members_info, topic)
                VALUES (%s, %s, %s, %s, %s, %s)
            ''', (team_name, school, coach_name, members_count, members_info, topic))
            conn.commit()
            release_db_connection(conn)
            return jsonify({'status': 'success', 'message': 'Registration successful!'})
        except Exception as e:
            return jsonify({'status': 'error', 'message': str(e)})

    return render_template('register.html')

@app.route('/admin')
def view_registrations():
    page = request.args.get('page', 1, type=int)
    per_page = 20

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT COUNT(*) FROM registrations')
    total_count = cursor.fetchone()[0]

    cursor.execute('SELECT * FROM registrations ORDER BY timestamp DESC LIMIT %s OFFSET %s',
                   (per_page, (page - 1) * per_page))
    rows = cursor.fetchall()
    release_db_connection(conn)

    return render_template('admin.html', rows=rows, total_count=total_count, page=page, per_page=per_page)

if __name__ == '__main__':
    app.run()
