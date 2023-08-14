"use client"
import { useState } from "react";
import { sentimentAnalysis, summarize, scanDocument } from "../utilities/consultas";
import Spinner from "./Spinner"
import random from "../utilities/idRandom"

export default function Form({ title, type }) {
    const [text, setText] = useState("")
    const [sentiment, setSentiment] = useState("")
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState([])

    // console.log(process.env.NEXT_PUBLIC_API_URL)
    // console.log(process.env.NEXT_PUBLIC_PAGE_URL)

    async function handleSubmit(e) {
        e.preventDefault();
        if (text === "") return alert("El texto es obligatorio")

        setLoading(true)

        if (type === "feels") {

            const { sentiment, sentiment_list } = await sentimentAnalysis(text)
            setSentiment(sentiment)
            setResult(sentiment_list)

        } else if (type === "summarizes") {

            if (text.length < 100) {
                return alert("At least 100 characters")
            }
            if (text.length >= 100 && text.length < 1000) {
                setResult(await summarize(text, 60))
                console.log(await summarize(text, 60))
            } else {
                setResult(await summarize(text))
            }

        }else if (type === "scan"){

            const archive = document.querySelector('input[type="file"]')
            setResult([await scanDocument(archive.files[0])])

        }

        

        setTimeout(() => {
            const elementoFinal = document.querySelector('#result');
            elementoFinal.scrollIntoView({ behavior: 'smooth' });

            setText("")
        }, 100);
        setTimeout(() => {
            setLoading(false)
        }, 400);
    }
    return (
        <main>
            <section className="page">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">{title}</label>
                    <p>{type !== "scan" && "(english only)"}</p>
                    {type !== "scan" ? (
                        <>
                            {loading ? <Spinner /> : (
                                <>
                                    <input type="text" name="title" id="title" value={text} onChange={e => setText(e.target.value)} placeholder="At least 100 characters" />
                                    <button >Analyze</button>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            {loading ? <Spinner /> : (
                                <>
                                    <input type="file" name="title" id="title" onChange={e => setText(e.target.value)} />
                                    <button >Analyze</button>
                                </>
                            )}
                        </>
                    )}
                </form>
            </section>

            {result.length < 1 ? "" : (
                <section>
                    <div id="result">
                        <h2>{sentiment || ""}</h2>
                        {result?.map(line => (
                            <p key={random(12)} >
                                {line.sentence || line}
                            </p>
                        ))}
                    </div>
                </section>
            )}
        </main>
    )
}