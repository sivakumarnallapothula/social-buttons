const Button = (props) => {
  //  Write your code here.
  const { ok, rin } = props;

  return <button className={rin}>{ok}</button>;
};

const element = (
  //  Write your code here.
  <div className="ks">
    <div>
      <h1 className="p">Social Buttons</h1>
    </div>
    <div className="oo">
      <Button ok="Like" rin="r" />

      <Button ok="Share" rin="s" />

      <Button ok="Subscribe" rin="ss" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
