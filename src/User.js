import { useLocation, useRouteMatch } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const User = () => {
  const routeMatch = useRouteMatch();
  console.log(routeMatch.params.id);

  const params = useQuery();

  console.log(params.get("id"));

  return (
    <div>
      <h1>User</h1>
      param:{params.get("id")}
      route param :{routeMatch.params.id}
    </div>
  );
};

export default User;
