const prisoners = [

{
    'id': 1,
    'name': 'Given',
    'age': 25 ,
    'crime': 'Frustrated murder',
    'sentence': '25 years',
    
},

{
    'id': 2,
    'name': 'Nico Faith',
    'age': 25 ,
    'crime': 'illegaly illegal the illegeal',
    'sentence': '50 years',
    
},


{
    'id': 3,
    'name': 'scout',
    'age': 25 ,
    'crime': 'the Sex Offender Registry. murder',
    'sentence': '5 years',
    
},

]


module.exports.prisoners = (req, res) => {

    res.json({'PRISONERS':prisoners});



};


//search prisoner by id using /prisoner/id

module.exports.prisoner =  (req, res) => {
    const { id } = req.params

    console.log(id)

    const matchingPrisoner = prisoners.filter(
    (prisoner) => prisoner.id === parseInt(id)

    )

    if (matchingPrisoner.length === 0) {
        res.status(404).json({'error': `Prisoner with ${id} not found`})
    }

    else 
    {
        res.status(200).json({'Prisoner': matchingPrisoner[0]}) 
    }
}


// req.query 

// route:  prisoner/greet/person?name=value


module.exports.greet = (req, res) => {

    const { name } = req.query

    console.log(name)

    res.status(200).json({'HELLO': name})
 
}

//
// route:  /search/prisoner?key1=value1 & key2=value2
//         prisoner/search/prisoner?id=1&name=Given

module.exports.searchPrisoner = (req, res) => {
    const {id, name} = req.query
    console.log(id, name)

    const matchingPrisoner = prisoners.filter(

    (prisoner) => prisoner.id === parseInt(id) && prisoner.name === name 
    
    )

    if(matchingPrisoner.length === 0)
     {
        res.status(404).json({'error': `Prisoner with ${id} and ${name}  not found`})
    }
    
    else
    {
        res.status(200).json({'found': matchingPrisoner[0]})
    }



}

 