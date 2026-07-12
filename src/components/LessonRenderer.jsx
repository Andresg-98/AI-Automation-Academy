function LessonRenderer({ lesson }) {

  return (

    <div className="bg-slate-800 rounded-xl p-8 mt-8">

      <h2 className="text-2xl font-bold mb-6">

        {lesson.title}

      </h2>

      {

        lesson.blocks.map((block, index) => {

          switch (block.type) {

            case "text":

              return (

                <p

                  key={index}

                  className="text-slate-300 leading-8 mb-6"

                >

                  {block.content}

                </p>

              );

            case "tip":

              return (

                <div

                  key={index}

                  className="bg-blue-900 border border-blue-600 rounded-lg p-4 mb-6"

                >

                  💡 {block.content}

                </div>

              );

            default:

              return null;

          }

        })

      }

    </div>

  );

}

export default LessonRenderer;