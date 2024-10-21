# 🌦️ **Weather Monitoring Application**

The **Weather Monitoring Application** is a full-stack project designed to provide real-time weather updates and notifications for major cities. It fetches data from the **OpenWeather API**, stores it in MongoDB, and features a user-friendly React-based interface.

---

## ✨ **Features**

- **🌍 Fetch Weather Data**: Fetches real-time weather data from OpenWeather API.
- **💾 Store Data**: Stores weather data in MongoDB for historical reference.
- **📊 Interactive Dashboard**: React-based UI to visualize weather data.
- **⚡ Email Alerts**: Sends email alerts when extreme weather conditions are met.
- **🔄 Automated Updates**: Uses cron jobs to fetch and update weather data periodically.

---

## 📋 **Table of Contents**

1. [⚙️ Technologies Used](#technologies-used)
2. [🚀 Installation](#installation)
3. [📊 Usage](#usage)
4. [🗂️ Project Structure](#project-structure)
5. [🗄️ Database Schema](#database-schema)
6. [📸 Screenshots](#screenshots)
7. [📝 License](#license)

---

## ⚙️ **Technologies Used**

- **Frontend**: React.js, Axios
- **Backend**: Node.js, Express.js, Nodemailer
- **Database**: MongoDB (via Mongoose ODM)
- **Utilities**: dotenv for environment variables, node-fetch for making API requests, node-cron for job scheduling

---

## 🚀 **Installation**

### **Prerequisites**

- **Node.js** (v18.x or above)
- **MongoDB** (local or cloud instance)
- **npm** (Node Package Manager)

### **Steps to Set Up**

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/weather-monitoring.git
    cd weather-monitoring
    ```

2. **Install Dependencies**:
   - **Backend**:
     ```bash
     cd backend
     npm install
     ```
   - **Frontend**:
     ```bash
     cd ../client
     npm install
     ```

3. **Configure Environment Variables**:  
   Create a `.env` file in the `backend` folder with the following:
   ```bash
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/weather
   OPENWEATHER_API_KEY=your_openweather_api_key
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASSWORD=your_app_password
   ALERT_RECIPIENT=recipient_email@gmail.com
   PORT=5000
