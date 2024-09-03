export default function InputEl({ inputName, value, onChange }) {
  return (
    <div className="InputEl">
      <p>{inputName}</p>
      <input
        type="text"
        placeholder={inputName}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
