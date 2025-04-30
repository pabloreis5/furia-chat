from flask import Flask, jsonify
from flask_cors import CORS
import random
import requests


app = Flask(__name__)
CORS(app) 

@app.route('/')
def home():
    return jsonify({"mensagem": "API do FuriosoBot está no ar!"})


@app.route('/api/elenco')
def get_elenco():
    try:
        print("➡️ Iniciando requisição para HLTV API...")

        response = requests.get('https://hltv-api.vercel.app/api/player.json')
        print("🔍 Status code:", response.status_code)

        if response.status_code != 200:
            return jsonify([])

        data = response.json()
        print("🔍 Times recebidos:", len(data))

        furia_team = next((team for team in data if team.get("name") == "FURIA"), None)

        if not furia_team:
            print("❌ Time FURIA não encontrado!")
            return jsonify([])

        players = furia_team.get("players", [])
        print(f"✅ {len(players)} jogadores encontrados na FURIA")

        elenco = [
            {
                "nickname": p["nickname"],
                "nome": p["fullname"]
            }
            for p in players
        ]

        return jsonify(elenco)

    except Exception as e:
        print("❌ Erro ao buscar elenco:", e)
        return jsonify([]), 500





@app.route('/teste')
def teste():
    print("✅ Acessou /teste!")
    return "OK"




if __name__ == '__main__':
    app.run(debug=True)
