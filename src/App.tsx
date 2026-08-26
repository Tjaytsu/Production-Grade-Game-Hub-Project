function App() {
  return (
    <div className="container-fluid min-vh-100">
      {/* 1. Top Navbar Row (Spans all 12 columns) */}
      <header className="row bg-warning p-3">
        <div className="col-12">Nav</div>
      </header>

      {/* 2. Content Row */}
      <div className="row">
        {/* Aside Sidebar: Hidden on small screens, occupies 2 of 12 columns on large screens */}
        <aside className="col-lg-2 d-none d-lg-block bg-info p-3">
          Aside (Genres)
        </aside>

        {/* Main Content: Takes full width (12) on mobile, and remaining 10 columns on large screens */}
        <main className="col-12 col-lg-10 bg-primary text-white p-3">
          Main (Game Grid)
        </main>
      </div>
    </div>
  );
}

export default App;