from flask import Flask, jsonify, render_template
#from flask_cors import CORS, cross_origin
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import datetime;

engine = create_engine('postgresql://postgres:Hershey1/@localhost:5432/RegionalJobMarket')

Base = automap_base()

Base.prepare(engine, reflect=True)
#Combined = Base.classes.combined 
session = Session(engine)

app = Flask(__name__)
#cors = CORS(app)
app.config['CORS_HEADERS'] = 'postgresql://postgres:Hershey1/@localhost:5432/RegionalJobMarket'

@app.route("/")
def welcome():
    return render_template("index.html")

@app.route("/keepalive")
def keep_alive():
    return datetime.datetime.now().strftime("%m/%d/%Y, %H:%M:%S")

if __name__ == '__main__':
    app.run(debug=True)



