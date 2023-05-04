
/**
 * Fetch a word definition from dictionary api and return the result in JSON
 */
export async function fetchWordDef(word) {
    const header = { 'Accept': 'application/json' }
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

    try {
        const r = await fetch(url, {
            method: 'GET',
            headers: header
        })

        return r.json()
    } catch (error) {
        console.error(`Network request failed. Error : ${error}`)
    }
}