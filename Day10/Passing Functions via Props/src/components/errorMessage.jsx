const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 ? <p>There is nothing </p> : null}</>;
};
export default ErrorMessage;
