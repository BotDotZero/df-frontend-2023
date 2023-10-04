export default function Book({ params }: { params: { id: number } }) {
  return <h1>Book id: {params.id}</h1>
}
