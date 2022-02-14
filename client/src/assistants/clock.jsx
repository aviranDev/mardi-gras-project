export default function FormattedDate(props) {
  var options = { timeZone: "CST", timeZoneName: "short" };
  return (
    <div className="timediv">
      {" "}
      {props.date.toLocaleTimeString("en-US", options)}.
    </div>
  );
}
