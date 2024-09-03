export default function SelectEl({ selected, onChange }) {
  return (
    <div>
      <p>그룹</p>
      <select name="selectgroup" value={selected} onChange={onChange}>
        <option value="가족">가족</option>
        <option value="친구">친구</option>
        <option value="직장">직장</option>
        <option value="스터디">스터디</option>
      </select>
      <button>조직추가</button>
    </div>
  );
}
