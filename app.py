import os
from flask import Flask
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
 

@app.route('/')
def index():
    return "<h1>Hello World!</h1>"

@app.route('/projects/<name>')
def hello_name(name):
    with open('projects.json') as f:
        d=""
        print(d)
        for elem in d:
           if(elem == name):
               return d[name]["titulo"]+","+d[name]["corpo"]
    return "Projeto não encontrado 404"

if __name__ == '__main__':
    app.run(debug=True) 