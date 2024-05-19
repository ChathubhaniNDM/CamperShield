import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
import pickle 


data = pd.read_csv("bathDataset.csv")

# label encoding for categorical dataset
# use labels for data in the dataset

label_encoders = {}
for col in data.columns:
    if data[col].dtype == 'object':
        le = LabelEncoder()
        data[col] = le.fit_transform(data[col])
        label_encoders[col] = le

# everytime in RF classifiers, x data predicts with y data  (y = rating, x = all the other values)
X = data.drop("rating", axis=1)
y = data["rating"]

# test & train dataset separation using "train_test_split" function
# 20% of test data from the whole data set
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = RandomForestClassifier(n_estimators=100, random_state=42) # set the dataset to RF classifier
model.fit(X_train, y_train) # .fit - trains the classifier

# save the model
# pickle - library for save models  
with open('bath_safety_model.pkl', 'wb') as file:
    pickle.dump(model, file)

with open('bath_safety_model.pkl', 'rb') as file: 
    loaded_model = pickle.load(file)


# get predictions using above created test dataset
predictions = loaded_model.predict(X_test)
proba = loaded_model.predict_proba(X_test)

accuracy = accuracy_score(y_test, predictions)
report = classification_report(y_test, predictions)

print("Accuracy:", accuracy)
print("Classification Report:\n", report)
print("Probability of Bath Ratings:\n", proba)
