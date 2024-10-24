import "./SectionHeader.css";

export const SectionHeader = ({ title, description }) => {
  return (
    <div className="section-header">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <a href="#">Shop all products</a>
    </div>
  );
};
