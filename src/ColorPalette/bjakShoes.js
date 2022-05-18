export default function BjakShoesColorPalette({
  baseColor,
  primaryColor,
  secondaryColor,
  baseInsideColor,
}) {
  return (
    <div>
      <h2>BjakShoes</h2>
      <div>
        <input
          id="baseColor"
          type="button"
          value={"Base Color"}
          onClick={(e) => {
            baseColor(e.target.value);
          }}
        />
        <input
          id="primaryColor"
          type="button"
          value={"Primary Color"}
          onClick={(e) => {
            primaryColor(e.target.value);
          }}
        />
        <input
          id="secondaryColor"
          type="button"
          value={"Primary Color"}
          onClick={(e) => {
            secondaryColor(e.target.value);
          }}
        />
        <input
          id="baseInsideColor"
          type="button"
          value={"Base Inside Color"}
          onClick={(e) => {
            baseInsideColor(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
