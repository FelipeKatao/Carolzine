import os
from flask import Flask
from flask import jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
 

@app.route('/')
def index():
    return jsonify({"projeto":"Carolzine"})

@app.route('/projects/<name>')
def hello_name(name):
    with open('projects.json') as f:
        d= json.load(f)
        for elem in d:
           if(elem == name):
               return jsonify(d)
    return "Projeto não encontrado 404"

if __name__ == '__main__':
    app.run(debug=True) 