import TextBlock from "./blocks/TextBlock";
import TipBlock from "./blocks/TipBlock";
import CodeBlock from "./blocks/CodeBlock";
import ImageBlock from "./blocks/ImageBlock";

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

                <TextBlock
                  key={index}
                  content={block.content}
                />

              );

            case "tip":

              return (

                <TipBlock
                  key={index}
                  content={block.content}
                />

              );

            case "code":

              return (

                <CodeBlock
                  key={index}
                  language={block.language}
                  content={block.content}
                />

              );

            case "image":

              return (

                <ImageBlock
                  key={index}
                  src={block.src}
                  alt={block.alt}
                />

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