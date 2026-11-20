# 💱 Currency Converter

A responsive and interactive Currency Converter built using **React.js** and **Tailwind CSS**. This application fetches live exchange rates using a currency API and allows users to convert between different currencies easily.

## 🚀 Features

- **Real-Time Exchange Rates:** Fetches currency exchange rates using an external API.
- **Dynamic Currency Selection:** Choose from multiple available currencies.
- **Currency Conversion:** Convert an amount from one currency to another.
- **Swap Functionality:** Instantly swap the source and target currencies.
- **Custom React Hook:** Uses a custom `useCurrencyInfo` hook to manage API fetching and exchange-rate data.
- **Responsive UI:** Clean and responsive interface built with Tailwind CSS.

## 🛠️ Tech Stack

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- HTML5
- CSS3
- Vite
- Currency API

## 📂 Project Structure

```text
currency-converter/
│
├── public/
├── src/
│   ├── components/
│   │   ├── InputBox.jsx
│   │   └── index.js
│   │
│   ├── hooks/
│   │   └── useCurrencyInfo.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
└── README.md
```

## ⚙️ Installation & Setup

**1. Clone the repository**

```bash
git clone https://github.com/vaibhavgarg1705/currency_convertor.git
```

**2. Navigate to the project directory**

```bash
cd currency-converter
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## 🌐 API Used

This project uses the Currency API by Fawaz Ahmed.

API Source:

https://github.com/fawazahmed0/currency-api

Example API endpoint:

```text
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json
```

## 🧠 Key React Concepts Learned

- Functional Components
- React `useState` Hook
- React `useEffect` Hook
- Custom Hooks
- Props and State Management
- API Fetching using `fetch()`
- Event Handling
- Conditional Data Rendering
- Component Reusability

## 👨‍💻 Author

**Vaibhav Garg**

Built with ❤️ using React.js.

---

⭐ If you like this project, consider giving it a star!