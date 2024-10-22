import os
import psycopg2
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Use environment variables for database credentials
DATABASE_URL = os.environ.get('DATABASE_URL')

def init_db():
    conn = psycopg2.connect(DATABASE_URL)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS registrations (
            id SERIAL PRIMARY KEY,
            team_name TEXT NOT NULL,
            school TEXT NOT NULL,
            coach_name TEXT NOT NULL,
            members_count INTEGER NOT NULL,
            members_info TEXT NOT NULL,
            topic TEXT NOT NULL,
            timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

init_db()

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
            conn = psycopg2.connect(DATABASE_URL)
            cursor = conn.cursor()
            cursor.execute('''
                INSERT INTO registrations (team_name, school, coach_name, members_count, members_info, topic)
                VALUES (%s, %s, %s, %s, %s, %s)
            ''', (team_name, school, coach_name, members_count, members_info, topic))
            conn.commit()
            conn.close()
            return jsonify({'status': 'success', 'message': 'Registration successful!'})
        except Exception as e:
            return jsonify({'status': 'error', 'message': str(e)})

    return render_template('register.html')

@app.route('/admin')
def view_registrations():
    conn = psycopg2.connect(DATABASE_URL)
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM registrations')
    rows = cursor.fetchall()
    conn.close()
    return render_template('admin.html', rows=rows)

# PostgreSQL connection function
def get_db_connection():
    connection = psycopg2.connect(
        host="dpg-csbqj6tds78s7bsc02g-a",  # Your Hostname
        port="5432",  # Default PostgreSQL port
        database="scicomm2024_data",  # Your Database name
        user="scicomm2024_data_user",  # Your Username
        password="5qPVk2zhdJwRazNTbHSAFQoLsn5IiZWa"  # Your Password from Render
    )
    return connection

init_db()


if __name__ == '__main__':
    app.run(debug=True)

