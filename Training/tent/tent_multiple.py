import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report
import pickle


data = pd.read_csv("tentDataset.csv")

label_encoders = {}
for col in data.columns:
    if data[col].dtype == 'object':
        le = LabelEncoder()
        data[col] = le.fit_transform(data[col])
        label_encoders[col] = le


X = data.drop("Safety_Rating", axis=1)
y = data["Safety_Rating"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


models = {
    "Random Forest": RandomForestClassifier(n_estimators=100, random_state=42),
    "SVM": SVC(kernel='linear', probability=True, random_state=42),
    "Decision Tree": DecisionTreeClassifier(random_state=42),
    "KNN": KNeighborsClassifier(),
    "Logistic Regression": LogisticRegression(max_iter=1000, random_state=42)
}


for name, model in models.items():
    model.fit(X_train, y_train)
    with open(f'tent_{name.lower().replace(" ", "_")}_model.pkl', 'wb') as file:
        pickle.dump(model, file)


for name in models.keys():
    with open(f'tent_{name.lower().replace(" ", "_")}_model.pkl', 'rb') as file:
        loaded_model = pickle.load(file)
    predictions = loaded_model.predict(X_test)
    proba = loaded_model.predict_proba(X_test)
    accuracy = accuracy_score(y_test, predictions)
    report = classification_report(y_test, predictions)
    print(f"{name}:")
    print("Accuracy:", accuracy)
    print("Classification Report:\n", report)
    print("Probability of Safety Ratings:\n", proba)
    print("\n")
