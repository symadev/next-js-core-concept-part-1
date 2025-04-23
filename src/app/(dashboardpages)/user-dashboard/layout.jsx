export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      {/* user nav */}
      <div className="col-span-3  p-4">
        <ul>
          <li>User List</li>
        </ul>
      </div>

      {/* dashboard content */}
      <div className="col-span-9 p-4">
        {children}
      </div>
    </div>
  );
}
