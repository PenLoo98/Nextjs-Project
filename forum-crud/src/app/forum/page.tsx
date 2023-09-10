export default function ForumPage() {
    // GET /api/forum
    fetch("/api/forum")
    .then(response => response.json())
    .then(data => console.log(data));

  return (
    <div>
      <h1>Forum List</h1>
    </div>
  );
}
