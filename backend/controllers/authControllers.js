import db from "../database/time_converter_db.js";
import bcrypt from "bcrypt";

// signup 

export const signUp = (req, res) => {
    const { name, gender, email, password } = req.body 
    const hashedPassword = bcrypt.hash(password, 10);
    
    let selectQuery = `SELECT * FROM user_details WHERE email=?`;

    const userdb = db.query(selectQuery, [email]);

    if (userdb !== "") {
        return res.status(400).json({
            message: "User Already Exist"
        });
    }
    else{
        const insertQuery = `INSERT INTO user_details(name, gender, email, password) VALUES (?, ?, ?, ?)`;
        db.query(insertQuery, [name, gender, email, hashedPassword])
        
        res.status(201).json({
            message: "User created successfully"
        });
    }
}


// login

export const logIn = (req, res) => {
    const { email, password } = req.body 
    
    let selectQuery = `SELECT * FROM user_details WHERE email=?`;

    const userdb = db.query(selectQuery, [email]);

    if (userdb === "") {
        return res.status(404).json({
        message: "User not found, Please sign Up"
    });
    }
    else {
        isMatch=bcrypt.compare(password,userdb.password)
        if (!isMatch) {
        return res.status(401).json({ message: "Invalid Credentials" });
        }
        res.status(200).json({ message: "Login successful" });

    }

}