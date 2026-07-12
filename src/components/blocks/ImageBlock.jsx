function ImageBlock({ src, alt }) {

  return (

    <div className="mb-8">

      <img
        src={src}
        alt={alt}
        className="rounded-xl border border-slate-700 w-full shadow-lg"
      />

      {alt && (

        <p className="text-center text-slate-400 text-sm mt-3">

          {alt}

        </p>

      )}

    </div>

  );

}

export default ImageBlock;