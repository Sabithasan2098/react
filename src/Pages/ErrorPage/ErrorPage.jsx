import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page" className="text-center">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="text-2xl font-medium">Sorry, no content avilable here.</p>
    </div>
  );
};

export default ErrorPage;
