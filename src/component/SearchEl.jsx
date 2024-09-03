export default function SearchEl({ placeholder, btnText }) {
  return (
    <div>
      <input type="text" placeholder={placeholder} />
      <button>{btnText}</button>
    </div>
  );
}
