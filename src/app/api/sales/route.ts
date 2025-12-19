import { NextResponse } from 'next/server';

const SALES_DATA = {
  2024: [
    { name: 'Jan', sales: 600 }, 
    { name: 'Feb', sales: 3000 }, 
    { name: 'Mar', sales: 2000 },
    { name: 'Apr', sales: 2780 }, 
    { name: 'May', sales: 890 }, 
    { name: 'Jun', sales: 2390 },
    { name: 'Jul', sales: 3490 }, 
    { name: 'Aug', sales: 4000 }, 
    { name: 'Sep', sales: 3000 },
    { name: 'Oct', sales: 4500 }, 
    { name: 'Nov', sales: 5000 }, 
    { name: 'Dec', sales: 6000 },
  ],
  2023: [
    { name: 'Jan', sales: 2400 }, 
    { name: 'Feb', sales: 1398 }, 
    { name: 'Mar', sales: 980 },
    { name: 'Apr', sales: 3908 }, 
    { name: 'May', sales: 800 }, 
    { name: 'Jun', sales: 3800 },
    { name: 'Jul', sales: 4300 }, 
    { name: 'Aug', sales: 5300 }, 
    { name: 'Sep', sales: 700 },
    { name: 'Oct', sales: 3300 }, 
    { name: 'Nov', sales: 4300 }, 
    { name: 'Dec', sales: 5300 },
  ],
  2022: [
    { name: 'Jan', sales: 1000 }, 
    { name: 'Feb', sales: 2000 }, 
    { name: 'Mar', sales: 1500 },
    { name: 'Apr', sales: 780 }, 
    { name: 'May', sales: 1290 }, 
    { name: 'Jun', sales: 1390 },
    { name: 'Jul', sales: 2490 }, 
    { name: 'Aug', sales: 2000 }, 
    { name: 'Sep', sales: 2500 },
    { name: 'Oct', sales: 800 }, 
    { name: 'Nov', sales: 3000 }, 
    { name: 'Dec', sales: 3500 },
  ]
};

export async function GET() {
  return NextResponse.json(SALES_DATA);
}