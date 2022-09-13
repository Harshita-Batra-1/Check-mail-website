from flask import Flask, render_template, url_for, request, jsonify
import pickle
import joblib

filename = 'pickle.pkl'
clf = pickle.load(open(filename, 'rb'))
cv = pickle.load(open('tansform.pkl', 'rb')) 
app = Flask(__name__)

@app.route("/")
def home:
    return render_template('home.html)

@app.route("/predict", method = ["POST"])
def predict:
    if request.method == 'POST'
       
                           
if __name__=="__main__":
    app.run(debug=True)
