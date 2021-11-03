import translation from "../../data/translations"

export default function handler(req, res) {
    res.status(200).json({translation})
};
