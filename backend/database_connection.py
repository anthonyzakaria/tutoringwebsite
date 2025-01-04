from flask import Flask, jsonify
import psycopg2
from psycopg2.extras import RealDictCursor

app = Flask(__name__)

# Database connection parameters
DB_HOST = "mytestdb.ctmii6ws07sv.us-east-1.rds.amazonaws.com"
DB_NAME = "mytestdb"
DB_USER = "postgres"
DB_PASS = "UpbeatCamera4257$"

# Establish a connection to the database
def get_db_connection():
    conn = psycopg2.connect(host=DB_HOST, database=DB_NAME, user=DB_USER, password=DB_PASS)
    return conn

@app.route('/universities', methods=['GET'])
def get_universities():
    conn = get_db_connection()
    cursor = conn.cursor(cursor_factory=RealDictCursor)
    cursor.execute("SELECT * FROM universities")
    universities = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(universities)

@app.route('/courses', methods=['GET'])
def get_courses():
    conn = get_db_connection()
    cursor = conn.cursor(cursor_factory=RealDictCursor)
    cursor.execute("SELECT * FROM courses")
    courses = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(courses)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

