let data = require('../../data/data.json');

export default function handler(req, res) {
    try {
        const result = data
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ error: 'failed to fetch data' })
    }
}