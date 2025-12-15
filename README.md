# Sales Analytics Dashboard

A dynamic sales visualization dashboard built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. This project demonstrates modern frontend architecture using the **Atomic Design Principle** to structure components for scalability and maintainability.

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![Framework](https://img.shields.io/badge/Framework-Next.js_15-black)
![Styling](https://img.shields.io/badge/Styling-Tailwind_CSS-blue)

## Features

* **Atomic Design Architecture:** Code is organized into Atoms, Molecules, and Organisms for maximum reusability.
* **Dynamic Data Visualization:**
    * **Multiple Chart Types:** Users can toggle between **Bar**, **Line**, and **Pie** charts.
    * **Data Filtering:** Real-time filtering of sales data based on a custom numeric threshold.
    * **Yearly Comparison:** Toggle views between 2024, 2023, and 2022 datasets.
* **Mock API Integration:** Simulates real-world data fetching using Next.js API Routes (`/api/sales`).
* **Responsive UI:** Fully responsive layout using Tailwind CSS.
* **Type Safety:** Built with strict TypeScript for robust code quality.

## Tech Stack

* **Framework:** Next.js 15 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS, `clsx`, `tailwind-merge`
* **Charts:** Recharts
* **Icons:** Lucide React

## Project Structure (Atomic Design)

I structured the `src` directory following the Atomic Design methodology to separate concerns effectively:

```text
src/
├── app/
│   ├── api/sales/      # Mock Backend (Simulating database response)
│   └── dashboard/      # Page Template (The main view)
├── components/
│   ├── atoms/          # Base elements (Button, Input, Card)
│   ├── molecules/      # Combined elements (ChartControls)
│   └── organisms/      # Complex logic sections (SalesAnalytics)
└── lib/                # Utilities (Tailwind class merging)