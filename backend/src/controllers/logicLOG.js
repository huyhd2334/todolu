import Account from "../models/Account.js";

export const newUserAccount = async (req, res) => {
    try{
        const {userName} = req.body;
        
        const {pasw} = req.body;
        
        const account = new Account({userName, pasw});

        const newAccount = await account.save()

        res.status(201).json({message: true, user: newAccount["userName"]});

    }catch(error){
       console.error("loi khi goi signup", error);
       res.status(500).json({message: "loi he thong signup"});
    }
}

export const recvUserAccount = async (req, res) => {
    try{
        const {userName, pasw} = req.body;
        
        const user = await Account.findOne({userName})
        
        if (!user) return res.json({message: false})
        if (user.pasw !== pasw) 
            return res.json({message: false})

        res.json({ message: true, user });
        
    }catch(error){
       console.error("loi khi goi login", error);
       res.status(500).json({message: "loi he thong login"});
    }
}