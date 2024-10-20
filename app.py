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

@app.route('/view_articles')
def view_articles():
    # Render the view_articles.html template
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

@app.route('/reset_registrations', methods=['POST'])
def reset_registrations():
    try:
        # Connect to the database
        conn = sqlite3.connect('registrations.db')
        cursor = conn.cursor()
        
        # Drop the registrations table if it exists
        cursor.execute('DROP TABLE IF EXISTS registrations')
        
        # Recreate the registrations table
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
            );
        ''')
        
        # Commit the changes and close the connection
        conn.commit()
        conn.close()
        
        return jsonify({'status': 'success', 'message': 'Registrations table reset!'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})


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

@app.route('/articles/<int:article_id>')
def view_article(article_id):
    articles = [
        {"id": 1, "title": "Seeing the Unseen: Uncover the Bulk Heterogeneous Deformation Processes", "content": "Detailed content for article 1..."},
        # Additional articles here
    ]

    article = next((article for article in articles if article['id'] == article_id), None)
    if article:
        return render_template('article.html', article=article)
    else:
        return "Article not found", 404

@app.route('/view_articles')
def view_articles():
    # Simulating a database of articles
    articles = {
        1: {
            "title": "Seeing the Unseen: Uncover the Bulk Heterogeneous Deformation Processes",
            "content": "Detailed content for Article 1...",
        },
        2: {
            "title": "Host–Guest Recognition on Photo-Responsive Cell Surfaces",
            "content": "Detailed content for Article 2...",
        },
        # Add more articles here as needed
    }

    # Get the article_id from the query string (if provided)
    article_id = request.args.get('article_id', None)

    # If article_id is provided and exists, load the article content
    if article_id and int(article_id) in articles:
        article = articles[int(article_id)]
        return render_template('view_articles.html', article=article)
    else:
        # Default behavior: Show the list of articles without details
        return render_template('view_articles.html', article=None, articles=articles)
    
@app.route('/view_articles')
def view_articles():
    # Simulate a list of external article links (without titles)
    article_links = [
        'https://www.sciencedirect.com/science/article/pii/S1369702116302383',
        'https://www.sciencedirect.com/science/article/pii/S1369702116302164',
        'https://www.sciencedirect.com/science/article/pii/S1369702116303546',
        'https://www.sciencedirect.com/science/article/pii/S1369702117306089',
        'https://www.sciencedirect.com/science/article/pii/S1369702117307836'
    ]
    return render_template('view_articles.html', article_links=article_links)