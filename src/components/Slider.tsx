import { PW_MAX_LENGTH, PW_MIN_LENGTH } from "@/utils/Password-Utils";

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
}


const Slider: React.FC<SliderProps> = ({ value, onChange }) => {
  return ( 
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">Password Length: {value}</label>
      <input
        type="range"
        min={PW_MIN_LENGTH}
        max={PW_MAX_LENGTH}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-6 w-full"
      />
    </div>
   );
}
 
export default Slider;