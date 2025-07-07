from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
model = joblib.load("kaggle_mood_classifier.joblib")
emoji_map = {
    "joy": "😄",
    "sadness": "😢",
    "anger": "😠",
    "fear": "😨",
    "love": "❤️",
    "surprise": "😲",
}

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    text = data.get("text", "")
    if not text:
        return jsonify({"error": "Text is required"}), 400

    mood = model.predict([text])[0]
    return jsonify({
        "mood": mood,
        "emoji": emoji_map.get(mood.lower(), "🤖")
    })

if __name__ == "__main__":
    app.run(debug=True)
