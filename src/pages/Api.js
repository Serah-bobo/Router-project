export async function getVans() {
    const res = await fetch("/api/vans")
    if (!res.ok) {
        // eslint-disable-next-line no-throw-literal
        throw {
            message: "Failed to fetch vans", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}