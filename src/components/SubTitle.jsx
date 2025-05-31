import "./SubTitle.css";

const SubTitle = ({ children, color }) => {

  const style = color ? { color } : {};

  return (
    <h2 className="subtitle" style={style}>
      {children}
    </h2>
  );
};

export default SubTitle;

