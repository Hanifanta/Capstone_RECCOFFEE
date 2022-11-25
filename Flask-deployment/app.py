import pandas as pd
import numpy as np
from sklearn import svm
from flask import Flask, request, jsonify
from sklearn.metrics.pairwise import cosine_similarity
import joblib
from flask_cors import CORS

# Loading model
file = open('./model/svm_model.pkl', 'rb')
model = joblib.load(file)

# Loading dataset
coffee = pd.read_csv('./dataset/coffee_clean.csv')
recom = pd.read_csv('./dataset/coffee_recom.csv')

# Preparing recom data
labelling = recom.filter(['name', 'label'])
# Get dummies and drop unused columns
label_dum = pd.get_dummies(labelling['label'])
labelling_new = pd.concat([labelling, label_dum], axis=1)
labelling_new.drop('label', inplace=True, axis=1)
labelling_new.drop('name', inplace=True, axis=1)
# Finding similarity
cosine_sim = cosine_similarity(labelling_new)
cosine_sim_df = pd.DataFrame(cosine_sim, index=labelling['name'], columns=labelling['name'])

app = Flask(__name__)
CORS(app)

@app.route('/')
def message():
    return "Model deployed!"


@app.route('/predict', methods=['POST'])
def predict():
    aroma = request.json['aroma']
    acid_or_milk = request.json['acid_or_milk']
    body = request.json['body']
    flavor = request.json['flavor']
    aftertaste = request.json['aftertaste']
    float_features = [aroma, acid_or_milk, body, flavor, aftertaste]
    features = [np.array(float_features)]
    prediction = model.predict(features)

    data = coffee[coffee['name'] == prediction.item()]
    link = data['slug'].values[0]
    name = data['name'].values[0]
    origin = data['origin'].values[0]
    rating = data['rating'].values[0]
    roaster = data['roaster'].values[0]
    aroma = data['aroma'].values[0]
    acid_or_milk = data['acid_or_milk'].values[0]
    body = data['body'].values[0]
    flavor = data['flavor'].values[0]
    aftertaste = data['aftertaste'].values[0]
    desc_1 = data['desc_1'].values[0]
    desc_2 = data['desc_2'].values[0]
    desc_3 = data['desc_3'].values[0]

    #get recom
    recom = app_recom(name)

    return jsonify({'link': link,'name': name, 'origin': origin, 'rating': str(rating), 'roaster': roaster, 'aroma': str(aroma), 'acid_or_milk': str(acid_or_milk), 'body': str(body), 'flavor': str(flavor), 'aftertaste': str(aftertaste), 'desc_1': desc_1, 'desc_2': desc_2, 'desc_3': desc_3, 'recom_link1': recom['slug'].values[0], 'recom_name1': recom['name'].values[0], 'recom_origin1': recom['origin'].values[0], 'recom_rating1': str(recom['rating'].values[0]), 'recom_roaster1': recom['roaster'].values[0], 'recom_aroma1': str(recom['aroma'].values[0]), 'recom_acid_or_milk1': str(recom['acid_or_milk'].values[0]), 'recom_body1': str(recom['body'].values[0]), 'recom_flavor1': str(recom['flavor'].values[0]), 'recom_aftertaste1': str(recom['aftertaste'].values[0]), 'recom_desc_11': recom['desc_1'].values[0], 'recom_desc_21': recom['desc_2'].values[0], 'recom_desc_31': recom['desc_3'].values[0], 'recom_link2': recom['slug'].values[1], 'recom_name2': recom['name'].values[1], 'recom_origin2': recom['origin'].values[1], 'recom_rating2': str(recom['rating'].values[1]), 'recom_roaster2': recom['roaster'].values[1], 'recom_aroma2': str(recom['aroma'].values[1]), 'recom_acid_or_milk2': str(recom['acid_or_milk'].values[1]), 'recom_body2': str(recom['body'].values[1]), 'recom_flavor2': str(recom['flavor'].values[1]), 'recom_aftertaste2': str(recom['aftertaste'].values[1]), 'recom_desc_12': recom['desc_1'].values[1], 'recom_desc_22': recom['desc_2'].values[1], 'recom_desc_32': recom['desc_3'].values[1], 'recom_link3': recom['slug'].values[2], 'recom_name3': recom['name'].values[2], 'recom_origin3': recom['origin'].values[2], 'recom_rating3': str(recom['rating'].values[2]), 'recom_roaster3': recom['roaster'].values[2], 'recom_aroma3': str(recom['aroma'].values[2]), 'recom_acid_or_milk3': str(recom['acid_or_milk'].values[2]), 'recom_body3': str(recom['body'].values[2]), 'recom_flavor3': str(recom['flavor'].values[2]), 'recom_aftertaste3': str(recom['aftertaste'].values[2]), 'recom_desc_13': recom['desc_1'].values[2], 'recom_desc_23': recom['desc_2'].values[2], 'recom_desc_33': recom['desc_3'].values[2], 'recom_link4': recom['slug'].values[3], 'recom_name4': recom['name'].values[3], 'recom_origin4': recom['origin'].values[3], 'recom_rating4': str(recom['rating'].values[3]), 'recom_roaster4': recom['roaster'].values[3], 'recom_aroma4': str(recom['aroma'].values[3]), 'recom_acid_or_milk4': str(recom['acid_or_milk'].values[3]), 'recom_body4': str(recom['body'].values[3]), 'recom_flavor4': str(recom['flavor'].values[3]), 'recom_aftertaste4': str(recom['aftertaste'].values[3]), 'recom_desc_14': recom['desc_1'].values[3], 'recom_desc_24': recom['desc_2'].values[3], 'recom_desc_34': recom['desc_3'].values[3], 'recom_link5': recom['slug'].values[4], 'recom_name5': recom['name'].values[4], 'recom_origin5': recom['origin'].values[4], 'recom_rating5': str(recom['rating'].values[4]), 'recom_roaster5': recom['roaster'].values[4], 'recom_aroma5': str(recom['aroma'].values[4]), 'recom_acid_or_milk5': str(recom['acid_or_milk'].values[4]), 'recom_body5': str(recom['body'].values[4]), 'recom_flavor5': str(recom['flavor'].values[4]), 'recom_aftertaste5': str(recom['aftertaste'].values[4]), 'recom_desc_15': recom['desc_1'].values[4], 'recom_desc_25': recom['desc_2'].values[4], 'recom_desc_35': recom['desc_3'].values[4]})

def app_recom(label, similarity_data=cosine_sim_df, items=recom[['slug', 'name', 'origin', 'rating', 'roaster', 'aroma', 'acid_or_milk', 'body', 'flavor', 'aftertaste', 'desc_1', 'desc_2', 'desc_3']], k=5):
    # Retrieve data by using argpartition to partition indirectly along a given axis    
    # Dataframe changed to numpy
    # Range(start, stop, step)
    index = similarity_data.loc[:,label].to_numpy().argpartition(
        range(-1, -k, -1))   
    # Retrieving data with the greatest similarity from the existing index
    closest = similarity_data.columns[index[-1:-(k+2):-1]] 
    # Drop the coffee name so that the coffee name you are looking for does not appear in the list of recommendations
    closest = closest.drop(label, errors='ignore')
    return pd.DataFrame(closest).merge(items).head(k)



if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
