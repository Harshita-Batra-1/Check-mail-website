from flask import Flask, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)
model = pickle.load(open('all_articles_ondeepANDlearning.pkl', 'rb'))

@app.route("/predict")
def predict():
    # raw_features = [x for x in request.form.values()]
    # processed_features = [np.array(raw_features)]
    # prediction = model[0].predict(processed_features)
    # return jsonify(prediction)

    print("work under progress...")



if __name__=="__main__":
    app.run(debug=True)