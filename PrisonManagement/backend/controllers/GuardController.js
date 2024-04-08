const Guards = [

    {
        'id': 1,
        'name': 'Heavy',
        'Rank': 'Warrant Officer',
        'YoS': 25 ,
         'active' : false,

    },
    
    {
        'id': 2,
        'name': 'Soldier',
        'Rank': 'Captain',
        'YoS': 40 ,
         'active' : true,
        
    },
    
    
    {
        'id': 3,
        'name': 'Demoman',
        'Rank': 'Colonel',
        'YoS': 15 ,
         'active' : false,
        
    },
    
    ]
    
    
    module.exports.Guards = (req, res) => {
    
        res.json({'Guards':Guards});
    
    
    
    };
    
    
    //search prisoner by id using /prisoner/id
    
    module.exports.Guard =  (req, res) => {
        const { id } = req.params
    
        console.log(id)
    
        const matchingGuard = Guards.filter(
        (Guard) => Guard.id === parseInt(id)
    
        )
    
        if (matchingGuard.length === 0) {
            res.status(404).json({'error': `Guard with ${id} not found`})
        }
    
        else 
        {
            res.status(200).json({'Guard': matchinguard[0]}) 
        }
    }
    
    
   
    
    //
    // route:  /search/Guard?key1=value1 & key2=value2
    //         Guard/search/Guard?id=1&name=Given
    
    module.exports.Guard = (req, res) => {
        const {id, rank,YoS, } = req.query
        console.log(id, rank, YoS)
    
        const matchingGuard = Guards.filter(
    
        (Guard) => Guard.id === parseInt(id) && Guard.rank === rank && Guard.YoS === parseInt(YoS)
        
        )
    
        if(matchingGuard.length === 0)
         {
            res.status(404).json({'error': `Guard with ${id}, ${rank}, and ${YoS}  not found`})
        }
        
        else
        {
            res.status(200).json({'found': matchingGuard[0]})
        }
    
    
    
    }


    // delete function
    // Guard/delete?id=0

    module.exports.delete = (req, res) => {
        const { id } = req.query;
    
        const matchingGuard = Guards.filter(
            (Guard) => Guard.id === parseInt(id)
        );
    
        if (matchingGuard === -1) {
            res.status(404).json({ 'error': `Guard with ${id} not found` });
        } else {
            const deletedGuard = Guards.splice(matchingGuard, 1);
            res.status(200).json({ 'deletedGuard': deletedGuard });
        }
    }
    
     