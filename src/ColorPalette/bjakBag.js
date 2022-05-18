export default function BjakHatColorPalette({
  circularRingColor,
  fabricColor,
  primaryMetalColor,
  topPlateColor,
}) {
  return (
    <div>
      <h2>BjakHat</h2>
      <div>
        <input
          id="fabricColor"
          type="button"
          value={"Fabric Color"}
          onClick={(e) => {
            fabricColor(e.target.value);
          }}
        />
        <input
          id="circularRingColor"
          type="button"
          value={"Circular Ring Color"}
          onClick={(e) => {
            circularRingColor(e.target.value);
          }}
        />
        <input
          id="primaryMetalColor"
          type="button"
          value={"Primary Metal Color"}
          onClick={(e) => {
            primaryMetalColor(e.target.value);
          }}
        />
        <input
          id="topPlateColor"
          type="button"
          value={"Top Plate Color"}
          onClick={(e) => {
            topPlateColor(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
