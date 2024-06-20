export default function handler(req, res){
    const{query} = req.query;
    const result = mockSearch(query);
    res.status(200).json ({result}); 
}
const mockSearch = (query) =>{
    const data =[
        'anniii',
        'papa',
        'mama',
        'sogol',
        'astride',
        'alexandre',
    ];

    return data.filter((item)=>
    item.toLowerCase().includes(query.toLowerCase())
);
}