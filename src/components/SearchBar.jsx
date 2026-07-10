function SearchBar({ value, onChange }) {

  return (

    <div className="mb-8">

      <input

        type="text"

        placeholder="🔍 Buscar cursos..."

        value={value}

        onChange={(e) => onChange(e.target.value)}

        className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500"

      />

    </div>

  );

}

export default SearchBar;