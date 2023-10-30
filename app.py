from flask import Flask, render_template
import meta


app = Flask(__name__)


@app.route('/')
@app.route('/index')
def main():
    return render_template('main_page.html')


@app.route('/bankrotstvo-fizlic')
def bfl():
    return render_template('404.html')


@app.route('/lite-bankrotstvo')
def lbfl():
    return render_template('404.html')


@app.route('/vzyskanie-dolgov-fiz-lic')
def debt_collection():
    return render_template('404.html')


@app.route('/zashhita-v-sude')
def gpk():
    return render_template('404.html')


@app.route('/ugolovnye-dela')
def upk():
    return render_template('404.html')


@app.route('/semejnoe-pravo')
def family_law():
    return render_template('404.html')


@app.route('/nasledstvennye-spory')
def hereditary_disputes():
    return render_template('404.html')


@app.route('/zemelnye-spory')
def land_law():
    return render_template('404.html')


@app.route('/zhilishnye-spory')
def housing_disputes():
    return render_template('404.html')


@app.route('/vozvrat-strahovovk')
def insurance_refund():
    return render_template('404.html')


@app.route('/trudovoe-pravo')
def labor_law():
    return render_template('404.html')


@app.route('/auto-urist')
def autourist():
    return render_template('404.html')


@app.route('/zashchita-prav-potrebitelya')
def сonsumer_protection():
    return render_template('404.html')


@app.route('/bankrotstvo-ul')
def bul():
    return render_template('404.html')


@app.route('/vzyskanie-dolgov-ul')
def consumer_protection_ul():
    return render_template('404.html')


@app.route('/corporate')
def corporate():
    return render_template('404.html')


@app.route('/about')
def about():
    return render_template('404.html')


@app.route('/news')
def news():
    return render_template('404.html')


@app.route('/privedi-druga')
def bring_friend():
    return render_template('404.html')


@app.route('/contacts')
def contacts():
    return render_template('404.html')


@app.route('/login')
def login():
    return render_template('404.html')

if __name__ == '__main__':
    app.run()
