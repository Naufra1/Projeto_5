function Checkbox({ valor,name,text }) {
  return (
    <>
      <div>
        <label htmlFor={name}>{text}</label>
        <input name={name} type="checkbox" value={valor} />
      </div>
    </>
  );
}
