from flask import Flask, render_template, url_for
import requests
import json

app = Flask(__name__)

tags_url = "https://api.codingninjas.com/api/v3/event_tags"
events_url = "https://api.codingninjas.com/api/v3/events"

event_tags = requests.request('GET', tags_url)

@app.route('/')
@app.route('/index', methods=['GET'])
def index():
	return render_template('layout.html')


@app.route('/favicon.ico')
def favicon():
	return "Favicon"

if __name__ == '__main__':
	app.run(debug=True)