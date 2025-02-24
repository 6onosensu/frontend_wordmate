import React, { useState } from "react";

const DictionaryApp: React.FC = () => {
    const [word, setWord] = useState<string>("");
    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const searchWord = async () => {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        try {
            setError(null);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            setResult(data); 
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>Dictionary App</h1>
            <input
                type="text"
                value={word}
                onChange={(e) => setWord(e.target.value)}
                placeholder="Введите слово"
            />
            <button onClick={searchWord}>
                Найти
            </button>

            {error && (
                <div>
                    <strong>Ошибка:</strong> {error}
                </div>
            )}

            {result && (
                <div>
                    <h2>Результаты для: {word}</h2>
                    {result[0]?.meanings.map((meaning: any, index: number) => (
                        <div key={index}>
                            <strong>Часть речи:</strong> {meaning.partOfSpeech}
                            <ul>
                                {meaning.definitions.map(
                                    (definition: any, defIndex: number) => (
                                        <li key={defIndex}>{definition.definition}</li>
                                    )
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DictionaryApp;
