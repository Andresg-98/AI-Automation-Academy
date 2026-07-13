import { Card } from "../../ui";

function GoalWidget({

  title,

  value,

  subtitle

}) {

  return (

    <Card>

      <h3 className="text-xl font-bold">

        {title}

      </h3>

      <h2 className="text-4xl font-bold mt-4 text-green-400">

        {value}

      </h2>

      <p className="text-slate-400 mt-3">

        {subtitle}

      </p>

    </Card>

  );

}

export default GoalWidget;