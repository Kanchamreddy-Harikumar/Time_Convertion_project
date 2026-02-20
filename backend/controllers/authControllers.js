import db from "../database/time_converter_db.js";
import bcrypt from "bcrypt";


//signup

export const signUp = async (req, res) => {
    try {
        const { name, gender, email, password } = req.body;
        const selectQuery = `SELECT * FROM user_details WHERE email = ?`;

        const [rows] = await db.query(selectQuery, [email]);
            if (rows.length>0) {
                return res.status(400).json({
                    message: "User Already Exist"
                });
            }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        const insertQuery = `INSERT INTO user_details(name, gender, email, password) VALUES (?, ?, ?, ?)`;
        
        const [result]=await db.query(insertQuery, [name, gender, email, hashedPassword])
        
        if (result.affectedRows === 1) {
            return res.status(201).json({
                success: true,
                message: "User created successfully",
                userId: result.insertId
            });
        } else {
            return res.status(500).json({
                success: false,
                message: "User not created"
            });
        }

    } catch (error) {
        console.error("Signup Error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};


//login
export const logIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const selectQuery = `SELECT * FROM user_details WHERE email = ?`;

        const [rows] = await db.query(selectQuery, [email]);
        if (rows.length === 0) {
            return res.status(404).json({
                message: "User not found, Please sign Up"
            });
        }
        const result = rows[0];
        const isMatch = await bcrypt.compare(password, result.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid Credentials"
            });
        }
        res.status(200).json({
            message: "Login successful"
        })
    } catch (error) {
        console.error("Signup Error:", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}


