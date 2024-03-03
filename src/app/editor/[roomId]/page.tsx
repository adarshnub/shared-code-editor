export default function Page({ params }: { params: { roomId: string } }) {
  return (
    <div>
        My Post: {params.roomId}
    </div>
);
}
