
const Checkbox = ({ label, type, value, onChange }:any) => (
    <div className="flex w-max gap-6 mb-4">
        <label className="inline-flex items-center">
          <input
           type={type}
           value={value}
           onChange={(e) => onChange(e.target.value)}
           className="form-checkbox text-blue-500 p-2"
          />
          <span className="text-sm font-medium text-gray-700 ml-2">{label}</span>
        </label>
    </div>
  );
  
  export default Checkbox;