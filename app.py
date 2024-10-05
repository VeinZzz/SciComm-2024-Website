from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)

# Initialize SQLite database
def init_db():
    conn = sqlite3.connect('registrations.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS registrations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            team_name TEXT NOT NULL,
            school TEXT NOT NULL,
            coach_name TEXT NOT NULL,
            members_count INTEGER NOT NULL,
            members_info TEXT NOT NULL,
            topic TEXT NOT NULL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

init_db()

# Route for the main index page
@app.route('/')
def index():
    return render_template('index.html')

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

        # Insert the data into the SQLite database
        try:
            conn = sqlite3.connect('registrations.db')
            cursor = conn.cursor()
            cursor.execute('''
                INSERT INTO registrations (team_name, school, coach_name, members_count, members_info, topic)
                VALUES (?, ?, ?, ?, ?, ?)
            ''', (team_name, school, coach_name, members_count, members_info, topic))
            conn.commit()
            conn.close()
            return jsonify({'status': 'success', 'message': 'Registration successful!'})
        except Exception as e:
            return jsonify({'status': 'error', 'message': str(e)})

    return render_template('register.html')

# Route for the admin page
@app.route('/admin')
def view_registrations():
    conn = sqlite3.connect('registrations.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM registrations')
    rows = cursor.fetchall()
    conn.close()
    
    return render_template('admin.html', rows=rows)


if __name__ == '__main__':
    app.run(debug=True)
