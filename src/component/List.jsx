export default function List({ name, phone }) {
  return (
    <div>
      <p>{name}</p>
      <p>{phone}</p>
      <button>세부사항</button>
      <button>삭제</button>
    </div>
  );
}
