from flask import Flask
import json

app = Flask(__name__)


@app.route('/')
def hello():
    return "Hello World!"

@app.route('/projects/<name>')
def hello_name(name):
    with open('projects.json') as f:
        print(d)
        for elem in d:
           if(elem == name):
               return d[name]["titulo"]+","+d[name]["corpo"]
    return "Projeto não encontrado 404"

if __name__ == '__main__':
    app.run()