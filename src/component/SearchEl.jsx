export default function SearchEl({ placeholder, btnText }) {
  return (
    <div className="SearchEl">
      <input type="text" placeholder={placeholder} />
      <button>{btnText}</button>
    </div>
  );
}
