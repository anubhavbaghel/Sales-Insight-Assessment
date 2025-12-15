import SalesAnalytics from "@/components/organisms/SalesAnalytics";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header>
          <h1 className="text-3xl font-extrabold text-gray-900">Dashboard</h1>
        </header>
        <section>
          <SalesAnalytics />
        </section>
      </div>
    </main>
  );
}