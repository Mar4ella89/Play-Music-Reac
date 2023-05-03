import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={css.container}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};

export default Section;
