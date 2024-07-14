const { 
    ContactModel,
    Pager,
    sortContacts,
    filterContacts
} = require("@jworkman-fs/asl");


exports.getContacts = (req, res) => {
    try {
        const contact =  ContactModel.index()
        res.json(contact)
    } 
    catch (error) {
        res.status(400).json({
            success: false,
            message: error,
        });
    }
}


exports.gContacts =  (req, res) => {
const contact =  ContactModel.index()
    try {
        
        if(filterContacts){
            const filtered = ContactModel.filterContacts( contact, req.get('X-Filter-By: fname'), req.get('X-Filter-Value: John') )
            res.json(filtered)
        }
        
        if(req.query.sortContacts){
            const sorted = ContactModel.sortContacts(contact, fname, asc);
            res.json(sorted)
        }
            
        if(req.query.page){
            const pager = new Pager( contact, req.query.page, req.query.size )
            res.set("X-Page-Total: 11", pager.total())
            res.set("X-Page-Next: 2", pager.next())
            res.set("X-Page-Prev: 1", pager.prev())
            res.json(pager.results())
        }
            
    } 
    catch (e) { 
        switch(e.name) {
            case "InvalidContactError":
            return res.status(400).json({ message: e.message })
            break;
            case "ContactNotFoundError":
            return res.status(404).json({ message: e.message })
            break;
            default:
            return res.status(500).json(e)
            break;
        }
    }
}

exports.update = (req, res) =>{
    try {
        const {id} = req.params;
    const updateContact = ContactModel.findByIdAndUpdate(id, req.body)
    res.status(200).json({
        data: updateContact,
    });
    } catch (e) { 
        switch(e.name) {
            case "InvalidContactError":
            return res.status(400).json({ message: e.message })
            break;
            case "ContactNotFoundError":
            return res.status(404).json({ message: e.message })
            break;
            default:
            return res.status(500).json(e)
            break;
        }
    }
}

exports.postContact = async (req,res) => {
    try {
        const {Contact} = req.query;
        const newContact = ContactModel.create(Contact)
    res.status(303).json({
        data: newContact
    });
    } 
    catch (error) {
        switch(e.name){
            case "DuplicateContactResourceError":
            return res.status(400).json({ message: e.message })
        break;
        case "InvalidContactError":
            return res.status(400).json({ message: e.message })
        break;
        case "InvalidContactSchemaError":
            return res.status(400).json({ message: e.message })
        break;
        res.status(500).json({
        success: false,
        message: error,
        });
        }
    };
};

exports.getOneContact = (req, res) =>{
    try {
        const contact = ContactModel.index()
        for(let i=0; i<contact.length; i++ ){
            const ncon= contact[i]
            const yellow = ncon.id
            const {id} = req.params.id;
            if(yellow === id){
                console.log(ncon)
            }
            res.status(200).json({
        data: ncon,
    });
        }
    } catch (error) {
        res.status(400).json({
        success: false,
        message: error,
        });  
    };
}


exports.deleteContact =  (req,res) => {
    const {id} = req.params;
    const delContact =  ContactModel.findByIdAndDelete(id)
    res.status(303).json(delContact).redirect("localhost:8080/v1/contacts");
};
