function PageHeader({

  title,

  description,

  action = null

}) {

  return (

    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

      <div>

        <h1 className="text-4xl font-bold">

          {title}

        </h1>

        {

          description && (

            <p className="text-slate-400 mt-3">

              {description}

            </p>

          )

        }

      </div>

      {

        action && (

          <div>

            {action}

          </div>

        )

      }

    </div>

  );

}

export default PageHeader;