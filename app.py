from flask import Flask, render_template, json, request
from date_template import deadlines

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('bfl_page.html', **deadlines)


if __name__ == '__main__':
    app.run()
