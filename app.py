from flask import Flask, render_template
import meta


app = Flask(__name__)


@app.route('/')
@app.route('/index')
def main():
    return render_template('main_page.html',)


@app.route('/zashhita-v-sude')
def gpk():
    return render_template('gpk.html')


if __name__ == '__main__':
    app.run()
