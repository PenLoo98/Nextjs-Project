export default async function handler(req, res) {
    try{
        const res = await fetch("/api/forum");
        const data = await res.json();
        return data;
    } catch(err) {
        console.log(err);
    }
}