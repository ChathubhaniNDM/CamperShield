import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.metrics import accuracy_score, classification_report
import pickle

# trained data from different algorithms and chose the random forest since it has the best accuracy

data = pd.read_csv("bathDataset.csv")


label_encoders = {}
for col in data.columns:
    if data[col].dtype == 'object':
        le = LabelEncoder()
        data[col] = le.fit_transform(data[col])
        label_encoders[col] = le

X = data.drop("rating", axis=1)
y = data["rating"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


rf_model = RandomForestClassifier(n_estimators=100, random_state=42)
rf_model.fit(X_train, y_train)
with open('bath_rf_model.pkl', 'wb') as file:
    pickle.dump(rf_model, file)

svm_model = SVC(kernel='linear', probability=True, random_state=42)
svm_model.fit(X_train, y_train)
with open('bath_svm_model.pkl', 'wb') as file:
    pickle.dump(svm_model, file)


dt_model = DecisionTreeClassifier(random_state=42)
dt_model.fit(X_train, y_train)
with open('bath_dt_model.pkl', 'wb') as file:
    pickle.dump(dt_model, file)


knn_model = KNeighborsClassifier()
knn_model.fit(X_train, y_train)
with open('bath_knn_model.pkl', 'wb') as file:
    pickle.dump(knn_model, file)

gb_model = GradientBoostingClassifier(random_state=42)
gb_model.fit(X_train, y_train)
with open('bath_gb_model.pkl', 'wb') as file:
    pickle.dump(gb_model, file)


with open('bath_rf_model.pkl', 'rb') as file:
    loaded_rf_model = pickle.load(file)
with open('bath_svm_model.pkl', 'rb') as file:
    loaded_svm_model = pickle.load(file)
with open('bath_dt_model.pkl', 'rb') as file:
    loaded_dt_model = pickle.load(file)
with open('bath_knn_model.pkl', 'rb') as file:
    loaded_knn_model = pickle.load(file)
with open('bath_gb_model.pkl', 'rb') as file:
    loaded_gb_model = pickle.load(file)


rf_predictions = loaded_rf_model.predict(X_test)
rf_proba = loaded_rf_model.predict_proba(X_test)
svm_predictions = loaded_svm_model.predict(X_test)
svm_proba = loaded_svm_model.predict_proba(X_test)
dt_predictions = loaded_dt_model.predict(X_test)
dt_proba = loaded_dt_model.predict_proba(X_test)
knn_predictions = loaded_knn_model.predict(X_test)
knn_proba = loaded_knn_model.predict_proba(X_test)
gb_predictions = loaded_gb_model.predict(X_test)
gb_proba = loaded_gb_model.predict_proba(X_test)


rf_accuracy = accuracy_score(y_test, rf_predictions)
rf_report = classification_report(y_test, rf_predictions)
svm_accuracy = accuracy_score(y_test, svm_predictions)
svm_report = classification_report(y_test, svm_predictions)
dt_accuracy = accuracy_score(y_test, dt_predictions)
dt_report = classification_report(y_test, dt_predictions)
knn_accuracy = accuracy_score(y_test, knn_predictions)
knn_report = classification_report(y_test, knn_predictions)
gb_accuracy = accuracy_score(y_test, gb_predictions)
gb_report = classification_report(y_test, gb_predictions)


print("Random Forest Model:")
print("Accuracy:", rf_accuracy)
print("Classification Report:\n", rf_report)
print("Probability of Bath Ratings:\n", rf_proba)

print("\nSVM Model:")
print("Accuracy:", svm_accuracy)
print("Classification Report:\n", svm_report)
print("Probability of Bath Ratings:\n", svm_proba)

print("\nDecision Tree Model:")
print("Accuracy:", dt_accuracy)
print("Classification Report:\n", dt_report)
print("Probability of Bath Ratings:\n", dt_proba)

print("\nKNN Model:")
print("Accuracy:", knn_accuracy)
print("Classification Report:\n", knn_report)
print("Probability of Bath Ratings:\n", knn_proba)

print("\nGradient Boosting Model:")
print("Accuracy:", gb_accuracy)
print("Classification Report:\n", gb_report)
print("Probability of Bath Ratings:\n", gb_proba)
