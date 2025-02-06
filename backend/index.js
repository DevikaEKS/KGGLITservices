import express from "express";
import cors from "cors";
import dotenv, { config } from "dotenv";
import mysql from "mysql2";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import axios from "axios";
const app = express();
dotenv.config();

app.use(express.json());
app.use(
  cors({
    origin: `${process.env.DOMAIN}`,
    credentials: "true",
  })
);
app.use("/uploads", express.static("uploads"));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "johnpauljayakumar08@gmail.com",
    pass: "yguu jxha dlwv abdk",
  },
});


/*                                       DB Conf                                    */
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnection:true,
});

db.getConnection((err,connection) => {
  if (err) {
    console.log("error", err);
    return;
  } else {
    console.log("db connected");
   connection.release();
  }
});

/*                               multer conf                                           */
// Set up Multer storage (make sure to define this above your routes)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the storage location and filename handling
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "/uploads"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

// Initialize the multer middleware
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|pdf|mp4|avi|mov|mkv|webm/;
    const extName = allowedTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimeType = allowedTypes.test(file.mimetype);

    if (mimeType && extName) {
      return cb(null, true);
    } else {
      cb(new Error("Only images and PDFs are allowed."));
    }
  },
});

// app.post("/webinar-form", (req, res) => {
//   const {
//     username,
//     email,
//     phoneNumber,
//     companyName,
//     designation,
//     date,
//     slot,
//     state,
//     city,
//   } = req.body;
//   console.log(date+1)
//   const query = `
//     INSERT INTO webinar (
//       name, 
//       email, 
//       phoneNumber, 
//       companyName, 
//       designation, 
//       date,
//       slot,
//       state, 
//       city
//     ) VALUES (?, ?, ?, ?, ?, ?, ?,?,?)`;

//   // Execute the query
//   db.query(
//     query,
//     [username, email, phoneNumber, companyName, designation,date,slot, state, city],
//     (err, result) => {
//       if (err) {
//         console.error("Error inserting data:", err);
//         return res.status(500).json({ message: "Database error" });
//       } else {
        
//         const mailOptions = {
//           from: "sivaranji5670@gmail.com",
//           to: email,
//           subject: 'Thank You for Registering for Our Webinar!',
//     text: `Dear ${username}, Thank you for registering for the upcoming webinar hosted by KG Genius Labs! We are excited to have you join us.`,
//     html: `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #001040; border-radius: 10px; color: white;">
//         <h2 style="text-align: center; color: white;">Your Registration is Successful</h2>
        
//         <p>Hello ${username},</p>
//         <p>We are confident that it will provide valuable insights into Customised ERP. We look forward to your participation and engaging with you during the session.</p>
//         <p>Here are the details for the webinar:</p>
//         <p><strong>Date:</strong> 14TH December</p>
//         <p><strong>Time:</strong> 7pm to 8pm</p>
      
//         <div style="padding: 15px; border: 1px solid #4CAF50; border-radius: 8px; margin-top: 10px; background-color: #001040;">
//           <p style="margin: 0;">
//             <a href="https://chat.whatsapp.com/JmT4HDEp0FDByUJUGPImWH" style="color: #4CAF50; font-weight: bold;">Join Our Group</a>
//           </p>
//         </div>
      
//         <p style="margin-top: 20px; color: white;">Updates regarding the upcoming webinar will be shared in the WhatsApp group.</p>
        
//         <p style="color: white;">If you have any questions or need assistance, feel free to reach out to our support team at 
//           <a href="mailto:info@kggeniuslabs.com" style="color: #4CAF50;">info@kggeniuslabs.com</a>.
//         </p>
      
//         <div style="border-top: 1px solid #4CAF50; margin-top: 20px; padding-top: 10px;">
//           <p style="font-size: 12px; color: white;">Best Regards,<br>KG Genius Labs Team</p>
//         </div>
//       </div>
//     `
//         };

//         transporter.sendMail(mailOptions, (error)=>{
//           if(error){
//             console.error(error);
//           }
//           else{
//             res.json({ message: "Form submitted successfully" });
//           }
//         })
//       }
//     }
//   );
// });
// app.post("/webinar-form", (req, res) => {
//   const {
//     username,
//     email,
//     phoneNumber,
//     companyName,
//     designation,
//     date,
//     slot,
//     state,
//     city,
//   } = req.body;

//   // Adjust the date to handle time zone issues
//   let adjustedDate = new Date(date);
//   adjustedDate.setMinutes(adjustedDate.getMinutes() - adjustedDate.getTimezoneOffset());

//   const query = `
//     INSERT INTO webinar (
//       name, 
//       email, 
//       phoneNumber, 
//       companyName, 
//       designation, 
//       date,
//       slot,
//       state, 
//       city
//     ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

//   db.query(
//     query,
//     [username, email, phoneNumber, companyName, designation, adjustedDate, slot, state, city],
//     (err, result) => {
//       if (err) {
//         console.error("Error inserting data:", err);
//         return res.status(500).json({ message: "Database error" });
//       } else {
//         const mailOptions = {
//           from: "sivaranji5670@gmail.com",
//           to: email,
//           subject: 'Thank You for Registering for Our Webinar!',
//           text: `Dear ${username}, Thank you for registering for the upcoming webinar hosted by KG Genius Labs! We are excited to have you join us.`,
//           html: `
//             <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #001040; border-radius: 10px; color: white;">
//               <h2 style="text-align: center; color: white;">Your Registration is Successful</h2>
//               <p>Hello ${username},</p>
//               <p>We are confident that it will provide valuable insights into Customised ERP. We look forward to your participation and engaging with you during the session.</p>
//               <p>Here are the details for the webinar:</p>
//               <p><strong>Date:</strong> 14TH December</p>
//               <p><strong>Time:</strong> 7pm to 8pm</p>
//               <div style="padding: 15px; border: 1px solid #4CAF50; border-radius: 8px; margin-top: 10px; background-color: #001040;">
//                 <p style="margin: 0;">
//                   <a href="https://chat.whatsapp.com/JmT4HDEp0FDByUJUGPImWH" style="color: #4CAF50; font-weight: bold;">Join Our Group</a>
//                 </p>
//               </div>
//               <p style="margin-top: 20px; color: white;">Updates regarding the upcoming webinar will be shared in the WhatsApp group.</p>
//               <p style="color: white;">If you have any questions or need assistance, feel free to reach out to our support team at 
//                 <a href="mailto:info@kggeniuslabs.com" style="color: #4CAF50;">info@kggeniuslabs.com</a>.
//               </p>
//               <div style="border-top: 1px solid #4CAF50; margin-top: 20px; padding-top: 10px;">
//                 <p style="font-size: 12px; color: white;">Best Regards,<br>KG Genius Labs Team</p>
//               </div>
//             </div>
//           `
//         };

//         transporter.sendMail(mailOptions, (error) => {
//           if (error) {
//             console.error(error);
//           } else {
//             res.json({ message: "Form submitted successfully" });
//           }
//         });
//       }
//     }
//   );
// });
async function createLead(state, event) {
  const leadData = {
      name: event.text,  // assuming the user's name is in event.text
      email: state.email,
      phone: state.phone
  };

  try {
      const response = await axios.post('http://192.168.253.187:8000/api/method/erpnext.create_lead', leadData);
      return state;
  } catch (error) {
      console.error('Error creating lead:', error);
      return state;
  }
}
// app.post("/webinar-form", (req, res) => {
//   const {
//     username,
//     email,
//     phoneNumber,
//     companyName,
//     designation,
//     date,
//     slot,
//     state,
//     city,
//   } = req.body;
//   async function createLead(state, event) {
//     console.log("enter")
//     const leadData = {
//       lead_name: username,  // Assuming 'lead_name' maps to the full name in ERPNext
//       company_name: companyName,  // Assuming 'company_name' is the organization name
//       email_id: email,  // Assuming 'email_id' is the email field
//       mobile_no: phoneNumber,  // Assuming 'mobile_no' is the mobile number field
//       phone: phoneNumber,  // Assuming 'phone' is an alternate phone field
//       source: "www.kggeniuslabs.com"  // Assuming 'source' maps to lead source
//     };
  
//     try {
//         const response = await axios.post('http://192.168.253.187:8000/api/method/erpnext.create_lead', leadData);
//         return state;
//     } catch (error) {
//         console.error('Error creating lead:', error);
//         return state;
//     }
//   }
//   // Adjust the date to handle time zone issues
//   let adjustedDate = new Date(date);
//   adjustedDate.setMinutes(adjustedDate.getMinutes() - adjustedDate.getTimezoneOffset());
  
//   // Format the adjusted date for display
//   const formattedDate = adjustedDate.toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });

//   const query = `
//     INSERT INTO webinar (
//       name, 
//       email, 
//       phoneNumber, 
//       companyName, 
//       designation, 
//       date,
//       slot,
//       state, 
//       city
//     ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

//   db.query(
//     query,
//     [username, email, phoneNumber, companyName, designation, adjustedDate, slot, state, city],
//     (err, result) => {
//       if (err) {
//         console.error("Error inserting data:", err);
//         return res.status(500).json({ message: "Database error" });
//       } else {
//         createLead
//         // const mailOptions = {
//         //   // from: "sivaranji5670@gmail.com",
//         //   from: "johnpauljayakumar08@gmail.com",
//         //   to: email,
//         //   subject: 'Thank You for Registering for Our Webinar!',
//         //   text: `Dear ${username}, Thank you for registering for the upcoming webinar hosted by KG Genius Labs! We are excited to have you join us.`,
//         //   html: `
//         //     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #001040; border-radius: 10px; color: white;">
//         //       <h2 style="text-align: center; color: white;">Your Registration is Successful</h2>
//         //       <p>Hello ${username},</p>
//         //       <p>We are confident that it will provide valuable insights into Customised ERP. We look forward to your participation and engaging with you during the session.</p>
//         //       <p>Here are the details for the webinar:</p>
//         //       <p><strong>Date:</strong> ${formattedDate}</p>
//         //       <p><strong>Slot:</strong> ${slot}</p>
//         //       <div style="padding: 15px; border: 1px solid #4CAF50; border-radius: 8px; margin-top: 10px; background-color: #001040;">
//         //         <p style="margin: 0;">
//         //           <a href="https://chat.whatsapp.com/JmT4HDEp0FDByUJUGPImWH" style="color: #4CAF50; font-weight: bold;">Join Our Group</a>
//         //         </p>
//         //       </div>
//         //       <p style="margin-top: 20px; color: white;">Updates regarding the upcoming webinar will be shared in the WhatsApp group.</p>
//         //       <p style="color: white;">If you have any questions or need assistance, feel free to reach out to our support team at 
//         //         <a href="mailto:info@kggeniuslabs.com" style="color: #4CAF50;">info@kggeniuslabs.com</a>.
//         //       </p>
//         //       <div style="border-top: 1px solid #4CAF50; margin-top: 20px; padding-top: 10px;">
//         //         <p style="font-size: 12px; color: white;">Best Regards,<br>KG Genius Labs Team</p>
//         //       </div>
//         //     </div>
//         //   `
//         // };

//         // transporter.sendMail(mailOptions, (error) => {
//         //   if (error) {
//         //     console.error(error);
//         //   } else {
//         //     res.json({ message: "Form submitted successfully" });
//         //   }
//         // });
//         res.json({ message: "Form submitted successfully" });
//       }
//     }
//   );
// });

app.post("/webinar-form", async (req, res) => {
  const {
    username,
    email,
    phoneNumber,
    companyName,
    designation,
    date,
    slot,
    state,
    city,
  } = req.body;

  // Function to create lead in ERPNext
  async function createLead() {
    const leadData = {
      lead_name: username, // Assuming 'lead_name' maps to the full name in ERPNext
      company_name: companyName, // Assuming 'company_name' is the organization name
      email_id: email, // Assuming 'email_id' is the email field
      mobile_no: phoneNumber, // Assuming 'mobile_no' is the mobile number field
      phone: phoneNumber, // Assuming 'phone' is an alternate phone field
      source: "www.kggeniuslabs.com" // Assuming 'source' maps to lead source
    };

    try {
      const response = await axios.post(
        'http://192.168.253.187:8000/api/resource/Lead',
        leadData,
        {
          headers: {
            Authorization: `Token your_api_key:your_api_secret`, // Replace with your actual API key and secret
            'Content-Type': 'application/json' // Ensure JSON format
          }
        }
      );
      console.log('Lead created successfully:', response.data);
    } catch (error) {
      console.error('Error creating lead:', error.response ? error.response.data : error.message);
    }
  }

  try {
    // Adjust the date to handle time zone issues
    let adjustedDate = new Date(date);
    adjustedDate.setMinutes(adjustedDate.getMinutes() - adjustedDate.getTimezoneOffset());

    // Insert data into the database
    const query = `
      INSERT INTO webinar (
        name, 
        email, 
        phoneNumber, 
        companyName, 
        designation, 
        date,
        slot,
        state, 
        city
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(
      query,
      [username, email, phoneNumber, companyName, designation, adjustedDate, slot, state, city],
      async (err, result) => {
        if (err) {
          console.error("Error inserting data:", err);
          return res.status(500).json({ message: "Database error" });
        }

        // Call the function to create the lead in ERPNext
        await createLead();

        // Respond to the client
        res.json({ message: "Form submitted successfully" });
      }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/submit-form", (req, res) => {
  const {
    request_type_id,
    email,
    phno,
    whatsappnumber,
    company_name,
    company_site,
    message,
    username,
  } = req.body;

  console.log(request_type_id, email);

  const query = `
        INSERT INTO glform (request_type_id, email, phno, whats_app_number, company_name, company_site, message, name) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

  db.query(
    query,
    [
      request_type_id,
      email,
      phno,
      whatsappnumber || null,
      company_name,
      company_site,
      message || null,
      username || null,
    ],
    (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        return res.json({ message: "Database error" });
      }
     res.json({ message: "Form submitted successfully" });
    }
  );
});

// Route to Insert URL into seo_url Table
app.post("/add-url", (req, res) => {
  const { url } = req.body;

  // Simple raw SQL insert query
  const sql = `INSERT INTO seo_url (url) VALUES ('${url}')`;

  db.query(sql, (err, result) => {
    if (err) {
      res.json({ error: "Failed to insert URL" });
      return;
    }
    res.json({ message: "URL inserted successfully", id: result.insertId });
  });
});

// Fetch all glform data
app.get("/glform-data", (req, res) => {
  const query = `SELECT * FROM glform`;

  // Execute the query to fetch data
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching data:", err);
      return res.status(500).send("Database error");
    }
    // Send the fetched data as JSON
    res.status(200).json(results);
  });
});

app.get("/webinar-data", (req, res) => {
  const query = `SELECT * FROM webinar`;

  // Execute the query to fetch data
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching data:", err);
      return res.status(500).send("Database error");
    }
    // Send the fetched data as JSON
    res.status(200).json(results);
  });
});
app.get("/request-types", (req, res) => {
  const query = `SELECT * FROM request_type`;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching request types:", err);
      return res.status(500).send("Database error");
    }
    res.status(200).json(results);
  });
});


/*                                       Blog                                        */
// Route to fetch all categories
app.get("/blog_categories", (req, res) => {
  const query = "SELECT id, category_name FROM blog_categories";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Error fetching categories:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(200).json(result);
  });
});

// API endpoint to add a new blog
app.post("/add-blog", upload.single("image"), (req, res) => {
  const { categoryId, stitle, title, content, conclusion } = req.body;
  const blogImage = req.file;

  // Check if an image was uploaded and set the path accordingly
  const blogImagePath = blogImage
    ? path.join("/uploads", blogImage.filename) // Path relative to the server
    : null;

  const query = `
    INSERT INTO blogs (category_id, title, image, content, conclusion, unique_identifier) 
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [categoryId, title, blogImagePath, content, conclusion || null, stitle],
    (err, result) => {
      if (err) {
        console.error("Error inserting blog:", err);
        return res.json({ message: "Database error" });
      }
      res.json({ message: "Blog added successfully!" });
    }
  );
});

// Get the latest three blog posts
app.get("/latestThreeBlogs", (req, res) => {
  const baseUrl = process.env.BASE_URL; // Ensure this is set in your .env file

  const query = `
    SELECT b.id,b.unique_identifier, b.category_id, b.title, b.content, b.publish, b.conclusion, b.created_at, 
           bc.category_name, 
           CONCAT(?, b.image) AS blog_image
    FROM blogs b
    JOIN blog_categories bc ON b.category_id = bc.id
    WHERE b.publish = 1
    ORDER BY b.created_at DESC
    LIMIT 3
  `;

  db.query(query, [baseUrl], (error, results) => {
    if (error) {
      console.error("Error fetching latest blogs:", error);
      return res.status(500).json({ message: "Error fetching blogs" });
    }
    res.json(results);
  });
});

const BASE_URL = process.env.BASE_URL;

// API to get blogs by IT
app.get("/blogs/category/2", (req, res) => {
  const sql = `SELECT *, CONCAT(?, b.image) AS blog_image
FROM blogs b
WHERE category_id = ? AND publish = 1
ORDER BY created_at DESC Limit 3;
`;
  db.query(sql, [BASE_URL, 2], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    return res.json(results);
  });
});
app.get("/mainblogs/category/2", (req, res) => {
  const sql = `SELECT *, CONCAT(?, b.image) AS blog_image
FROM blogs b
WHERE category_id = ? AND publish = 1
ORDER BY created_at DESC;
`;
  db.query(sql, [BASE_URL, 2], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    return res.json(results);
  });
});
// API to get blogs by SAP
app.get("/blogs/category/1", (req, res) => {
  const sql = `SELECT *, CONCAT(?, b.image) AS blog_image
FROM blogs b
WHERE category_id = ? AND publish = 1
ORDER BY created_at DESC Limit 3;
`;
  db.query(sql, [BASE_URL, 1], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    return res.json(results);
  });
});
app.get("/mainblogs/category/1", (req, res) => {
  const sql = `SELECT *, CONCAT(?, b.image) AS blog_image
FROM blogs b
WHERE category_id = ? AND publish = 1
ORDER BY created_at DESC;
`;
  db.query(sql, [BASE_URL, 1], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    return res.json(results);
  });
});

// API to get blogs by DM
app.get("/blogs/category/3", (req, res) => {
  const sql = `SELECT *, CONCAT(?, b.image) AS blog_image
FROM blogs b
WHERE category_id = ? AND publish = 1
ORDER BY created_at DESC Limit 3;
`;
  db.query(sql, [BASE_URL, 3], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    return res.json(results);
  });
});
app.get("/mainblogs/category/3", (req, res) => {
  const sql = `SELECT *, CONCAT(?, b.image) AS blog_image
FROM blogs b
WHERE category_id = ? AND publish = 1
ORDER BY created_at DESC;
`;
  db.query(sql, [BASE_URL, 3], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    return res.json(results);
  });
});
//erp blog
app.get("/blogs/category/5", (req, res) => {
  const sql = `SELECT *, CONCAT(?, b.image) AS blog_image
FROM blogs b
WHERE category_id = ? AND publish = 1
ORDER BY created_at DESC Limit 3;
`;
  db.query(sql, [BASE_URL, 5], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    return res.json(results);
  });
});
app.get("/mainblogs/category/5", (req, res) => {
  const sql = `SELECT *, CONCAT(?, b.image) AS blog_image
FROM blogs b
WHERE category_id = ? AND publish = 1
ORDER BY created_at DESC;
`;
  db.query(sql, [BASE_URL, 5], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    return res.json(results);
  });
});
// get blog by id
app.get("/blogs/:id", (req, res) => {
  const blogId = req.params.id;
  const baseUrl = process.env.BASE_URL; // Set your base URL here

  const sql = `SELECT id, category_id, title, content, conclusion, created_at, 
           CONCAT(?, image) AS blog_image 
    FROM blogs 
    WHERE unique_identifier = ? AND publish = 1`;

  db.query(sql, [baseUrl, blogId], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Blog not found" });
    }
    return res.json(results[0]);
  });
});

// getRelatd Blogs
app.get("/relatedBlogs/:category_id/:id", (req, res) => {
  const { category_id, id } = req.params;
  const baseUrl = process.env.BASE_URL; // Your base URL for images
  const query = `
    SELECT id, category_id, title, content, conclusion, 
           CONCAT(?, image) AS blog_image, unique_identifier, 
           created_at 
    FROM blogs 
    WHERE category_id = ? AND unique_identifier != ? AND publish = 1 
    ORDER BY created_at DESC
    
  `;

  db.query(query, [baseUrl, category_id, id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Database query failed" });
    }
    res.json(results);
  });
});

// all blogs
app.get("/blogs", (req, res) => {
  const blogId = req.params.id;
  const baseUrl = process.env.BASE_URL; // Set your base URL here
  const sql = `SELECT id, category_id, title, unique_identifier, content, conclusion, created_at, 
       CONCAT(?, image) AS blog_image 
FROM blogs 
WHERE publish = 1 
ORDER BY created_at DESC;
`;

  db.query(sql, [baseUrl], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Blog not found" });
    }
    return res.json(results);
  });
});

// categorized blogs
app.get("/blogs/category/:category_id", (req, res) => {
  const categoryId = req.params.category_id;
  const query = `
    SELECT 
      id,
      title,
      CONCAT(?, image) AS blog_image,
      content,
      sub,
      created_at
    FROM blogs
    WHERE category_id = ? AND publish = 1
    ORDER BY created_at DESC
  `;

  db.query(query, [BASE_URL, categoryId], (error, results) => {
    if (error) {
      console.error("Error fetching blogs:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(results);
  });
});

// update blogs
app.get("/update/getblogs/:id", (req, res) => {
  const blogId = req.params.id; // Get the blog ID from the URL parameters

  // SQL query to get the blog details
  const sql = `SELECT id, category_id, title,unique_identifier ,content, conclusion, created_at, 
                CONCAT(?, image) AS blog_image 
                FROM blogs 
                WHERE id = ?`;

  // Execute the query with baseUrl and blogId as parameters
  db.query(sql, [BASE_URL, blogId], (error, results) => {
    if (error) {
      console.error("Error retrieving blog:", error);
      return res.status(500).json({ error: "Database error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json(results[0]); // Send the first result (the blog details)
  });
});

app.put("/blogs/update/:id", upload.single("image"), (req, res) => {
  const blogId = req.params.id;
  const { category_id, title, stitle, content, conclusion } = req.body;
  const blogImage = req.file;

  // Create image path if an image was uploaded
  const blogImagePath = blogImage
    ? path.join("/uploads", blogImage.filename) // Path relative to the server
    : null;

  // SQL query to update the blog
  const query = `
    UPDATE blogs 
    SET category_id = ?, title = ?, unique_identifier = ? ,content = ?, conclusion = ?, created_at = NOW()${
      blogImagePath ? ", image = ?" : ""
    }
    WHERE id = ?
  `;

  // Prepare the values to be updated
  const values = [category_id, title, stitle, content, conclusion];
  if (blogImagePath) {
    values.push(blogImagePath); // Only push the image path if a new image was uploaded
  }
  values.push(blogId); // Always include the blog ID

  db.query(query, values, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database update failed" });
    }
    if (results.affectedRows === 0) {
      return res.json({ error: "Blog not found or no changes made" });
    }
    return res.json({ message: "Blog updated successfully" });
  });
});

// delete Blog
app.delete("/blogs/delete/:id", (req, res) => {
  const blogId = req.params.id;

  // SQL query to delete the blog
  const query = `DELETE FROM blogs WHERE id = ?`;

  db.query(query, [blogId], (err, results) => {
    if (err) {
      return res.json({ error: "Database deletion failed" });
    }
    if (results.affectedRows === 0) {
      return res.json({ error: "Blog not found" });
    }
    return res.json({ message: "Blog deleted successfully" });
  });
});

// pblish Blog
app.put("/blogs/togglePublish/:id", (req, res) => {
  const blogId = req.params.id;

  // Query to get the current publish status
  const checkPublishQuery = "SELECT publish FROM blogs WHERE id = ?";

  db.query(checkPublishQuery, [blogId], (err, results) => {
    if (err) {
      console.error("Error fetching publish status:", err);
      return res.json({ error: "Database query failed" });
    }

    if (results.length === 0) {
      return res.json({ error: "Blog not found" });
    }

    const currentPublishStatus = results[0].publish;

    // Determine the new status: if 1, set to 0; if 0, set to 1
    const newPublishStatus = currentPublishStatus === 1 ? 0 : 1;

    // Update the publish field
    const updatePublishQuery = "UPDATE blogs SET publish = ? WHERE id = ?";

    db.query(updatePublishQuery, [newPublishStatus, blogId], (updateErr) => {
      if (updateErr) {
        console.error("Error updating publish status:", updateErr);
        return res.json({ error: "Database update failed" });
      }

      // Respond with the new publish status
      res.json({ success: true, publish: newPublishStatus === 1 });
    });
  });
});

// content writer
app.get("/content/blogs", (req, res) => {
  const blogId = req.params.id;
  const baseUrl = process.env.BASE_URL; // Set your base URL here

  const sql = `SELECT id, category_id, title, unique_identifier, content, publish, conclusion, created_at, 
       CONCAT(?, image) AS blog_image 
FROM blogs
ORDER BY created_at DESC;
`;

  db.query(sql, [baseUrl], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Blog not found" });
    }
    return res.json(results);
  });
});

app.get("/blogs/content/category/:category_id", (req, res) => {
  const categoryId = req.params.category_id;
  const query = `
    SELECT 
    id,
    title,
    unique_identifier,
    CONCAT(?, image) AS blog_image,
    content,
    category_id,
    publish
FROM blogs
WHERE category_id = ?
ORDER BY created_at DESC;

  `;

  db.query(query, [BASE_URL, categoryId], (error, results) => {
    if (error) {
      console.error("Error fetching blogs:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(results);
  });
});

// login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ message: "Please provide both email and password." });
  }

  // Query to find the user by email and password
  const sql = "SELECT * FROM login WHERE username = ? AND password = ?";
  db.query(sql, [email, password], (err, results) => {
    if (err) {
      return res.json({ message: "Database error", error: err });
    }

    if (results.length === 0) {
      return res.json({ message: "Invalid email or password" });
    }

    // Login successful, send user data
    const user = results[0];
    res.json({
      message: "Login successful",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role_id:user.role_id
      },
    });
  });
});




app.post("/dm-contact", (req, res) => {
  const {
    username,
    mobile_number,
    email,
    company_name,
    state,
    city,
    message,
  } = req.body;

  // SQL query to insert form data into the 'dm_contact' table
  const query = `
    INSERT INTO dm_contact (username, mobile_number, email,message) 
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [username, mobile_number, email, company_name, state, city, message],
    (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        return res.status(500).json({ message: "Database error" });
      } else {
        // Send a welcome email to the user
        const mailOptions = {
          from: "sanjayravichandran@gmail.com", // Replace with your email
          to: email,
          subject: "Thank you for contacting us",
          text: `Hello ${username},\n\nThank you for contacting us! We will get back to you shortly.\n\nBest Regards,\nYour Company Name,`
        };

        transporter.sendMail(mailOptions, (error) => {
          if (error) {
            console.error("Error sending email:", error);
            return res.status(500).json({ message: "Error sending email" });
          } else {
            console.log("Email sending successfully!")
            return res.status(201).json({ message: "Form submitted and email sent successfully" });
          }
        });
        
      }
    }
  );
});

// API endpoint to get all DM contact submissions
app.get("/dm-contact", (req, res) => {
  const query = "SELECT * FROM dm_contact";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching data:", err);
      return res.json({ message: "Database error" });
    }
    res.json(results);
  });
});

// API endpoint to get a DM contact submission by ID
app.get("/dm-contact/:id", (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM dm_contact WHERE id = ?";

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error("Error fetching data:", err);
      return res.json({ message: "Database error" });
    }
    if (result.length === 0) {
      return res.json({ message: "No record found with this ID" });
    }
    res.json(result[0]);
  });
});





app.post("/dm-contact", (req, res) => {
  const { username, mobile_number, email, services, message } = req.body;

  if (!username || !mobile_number || !email || !services || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const query = `
    INSERT INTO dm_contact (username, mobile_number, email, services, message) 
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(query, [username, mobile_number, email, services, message], (err, result) => {
    if (err) {
      console.error(" Error inserting data:", err);
      return res.status(500).json({ message: "Database error" });
    }

    // Send Email to the User
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting us",
      text: `Hello ${username},\n\nThank you for reaching out! We will contact you soon.\n\nBest Regards,\nYour Company Name`,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Error sending email" });
      }

      console.log("Email sent successfully!");
      return res.status(201).json({ message: "Form submitted and email sent successfully" });
    });
  });
});

//  API Endpoint to Get All Contact Submissions
app.get("/dm-contact", (req, res) => {
  const query = "SELECT * FROM dm_contact";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching data:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(200).json(results);
  });
});

// API Endpoint to Get Contact Submission by ID
app.get("/dm-contact/:id", (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM dm_contact WHERE id = ?";

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error("Error fetching data:", err);
      return res.status(500).json({ message: "Database error" });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: "No record found with this ID" });
    }
    res.status(200).json(result[0]);
  });
});

// Handle 404 Errors (Invalid Routes)
app.use((req, res) => {
  res.status(404).json({ message: "API route not found" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});






















app.listen(process.env.PORT, () => {
  console.log(`server is listening on port ${process.env.PORT}`);
});









app.listen(process.env.PORT, () => {
  console.log(`server is listening on port ${process.env.PORT}`);
});

